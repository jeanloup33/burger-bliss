import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Share, Plus, Home } from 'lucide-react'

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export function PWAInstallPrompt() {
    const [showIOSPrompt, setShowIOSPrompt] = useState(false)
    const [showAndroidPrompt, setShowAndroidPrompt] = useState(false)
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
    const [isStandalone, setIsStandalone] = useState(false)

    useEffect(() => {
        // Detect iOS
        const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream

        // Check if already installed (standalone mode)
        const standalone = window.matchMedia('(display-mode: standalone)').matches ||
            (window.navigator as any).standalone === true
        setIsStandalone(standalone)

        // Don't show if already installed
        if (standalone) return

        // Check if user has dismissed the prompt before
        const dismissed = localStorage.getItem('pwa-install-dismissed')
        const dismissedTime = dismissed ? parseInt(dismissed) : 0
        const daysSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24)

        // Show iOS prompt after 3 seconds if not dismissed in last 7 days
        if (iOS && daysSinceDismissed > 7) {
            setTimeout(() => setShowIOSPrompt(true), 3000)
        }

        // Android/Desktop PWA install prompt
        const handleBeforeInstallPrompt = (e: Event) => {
            e.preventDefault()
            const promptEvent = e as BeforeInstallPromptEvent
            setDeferredPrompt(promptEvent)

            // Show Android prompt after 3 seconds if not dismissed in last 7 days
            if (daysSinceDismissed > 7) {
                setTimeout(() => setShowAndroidPrompt(true), 3000)
            }
        }

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
        }
    }, [])

    const handleIOSDismiss = () => {
        setShowIOSPrompt(false)
        localStorage.setItem('pwa-install-dismissed', Date.now().toString())
    }

    const handleAndroidInstall = async () => {
        if (!deferredPrompt) return

        deferredPrompt.prompt()
        const { outcome } = await deferredPrompt.userChoice

        if (outcome === 'accepted') {
            console.log('PWA installed')
        }

        setDeferredPrompt(null)
        setShowAndroidPrompt(false)
        localStorage.setItem('pwa-install-dismissed', Date.now().toString())
    }

    const handleAndroidDismiss = () => {
        setShowAndroidPrompt(false)
        localStorage.setItem('pwa-install-dismissed', Date.now().toString())
    }

    // Don't render if already installed
    if (isStandalone) return null

    return (
        <>
            {/* iOS Installation Guide */}
            <AnimatePresence>
                {showIOSPrompt && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-end md:items-center justify-center p-4"
                        onClick={handleIOSDismiss}
                    >
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-br from-bliss-orange to-orange-600 p-6 text-white relative">
                                <button
                                    onClick={handleIOSDismiss}
                                    className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                                        <img src="/logo_BURGER-BLISS-512.webp" alt="Burger Bliss" className="w-14 h-14 object-contain" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-heading font-bold">Installer Burger Bliss</h3>
                                        <p className="text-white/90 text-sm">Accès rapide depuis votre écran d'accueil</p>
                                    </div>
                                </div>
                            </div>

                            {/* Instructions */}
                            <div className="p-6 space-y-6">
                                <p className="text-gray-700 font-medium">
                                    Pour installer cette app sur votre iPhone :
                                </p>

                                <div className="space-y-4">
                                    {/* Step 1 */}
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 bg-bliss-orange/10 rounded-full flex items-center justify-center shrink-0">
                                            <span className="text-bliss-orange font-bold">1</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-800 font-medium mb-2">Appuyez sur le bouton Partager</p>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Share className="w-5 h-5 text-blue-500" />
                                                <span>en bas de votre navigateur Safari</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 bg-bliss-orange/10 rounded-full flex items-center justify-center shrink-0">
                                            <span className="text-bliss-orange font-bold">2</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-800 font-medium mb-2">Sélectionnez "Sur l'écran d'accueil"</p>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Plus className="w-5 h-5 text-gray-700 border border-gray-700 rounded" />
                                                <span>dans le menu qui apparaît</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 bg-bliss-orange/10 rounded-full flex items-center justify-center shrink-0">
                                            <span className="text-bliss-orange font-bold">3</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-800 font-medium mb-2">Confirmez l'ajout</p>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Home className="w-5 h-5 text-bliss-orange" />
                                                <span>L'icône apparaîtra sur votre écran</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Benefits */}
                                <div className="bg-bliss-cream/50 rounded-xl p-4 border border-bliss-orange/20">
                                    <p className="text-sm font-semibold text-bliss-brown mb-2">✨ Avantages :</p>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        <li>• Accès instantané depuis l'écran d'accueil</li>
                                        <li>• Fonctionne hors ligne</li>
                                        <li>• Expérience plein écran</li>
                                        <li>• Notifications des nouveautés</li>
                                    </ul>
                                </div>

                                <button
                                    onClick={handleIOSDismiss}
                                    className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                                >
                                    Peut-être plus tard
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Android/Desktop Installation Prompt */}
            <AnimatePresence>
                {showAndroidPrompt && deferredPrompt && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-white rounded-2xl shadow-2xl z-[9999] overflow-hidden border-2 border-bliss-orange"
                    >
                        <div className="p-6">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-14 h-14 bg-bliss-orange/10 rounded-xl flex items-center justify-center shrink-0">
                                    <img src="/logo_BURGER-BLISS-512.webp" alt="Burger Bliss" className="w-12 h-12 object-contain" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-heading font-bold text-bliss-brown mb-1">
                                        Installer Burger Bliss
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Accédez rapidement à nos burgers depuis votre écran d'accueil !
                                    </p>
                                </div>
                                <button
                                    onClick={handleAndroidDismiss}
                                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5 text-gray-500" />
                                </button>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={handleAndroidInstall}
                                    className="flex-1 bg-gradient-to-r from-bliss-orange to-orange-600 text-white py-3 rounded-xl font-bold hover:from-bliss-orange/90 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl"
                                >
                                    Installer
                                </button>
                                <button
                                    onClick={handleAndroidDismiss}
                                    className="px-6 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                                >
                                    Plus tard
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
