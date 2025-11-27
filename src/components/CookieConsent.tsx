import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, Shield, Settings, X, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CookiePreferences {
    necessary: boolean
    analytics: boolean
    marketing: boolean
}

export function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false)
    const [showSettings, setShowSettings] = useState(false)
    const [showWidget, setShowWidget] = useState(false)
    const [preferences, setPreferences] = useState<CookiePreferences>({
        necessary: true,
        analytics: false,
        marketing: false
    })

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent')
        if (!consent) {
            // Show banner after 2 seconds
            setTimeout(() => setShowBanner(true), 2000)
        } else {
            // Show widget if consent given
            setShowWidget(true)
            const savedPrefs = JSON.parse(localStorage.getItem('cookie-preferences') || '{}')
            setPreferences({ ...preferences, ...savedPrefs })
        }
    }, [])

    const acceptAll = () => {
        const allAccepted = {
            necessary: true,
            analytics: true,
            marketing: true
        }
        setPreferences(allAccepted)
        saveConsent(allAccepted)
    }

    const acceptNecessary = () => {
        const necessaryOnly = {
            necessary: true,
            analytics: false,
            marketing: false
        }
        setPreferences(necessaryOnly)
        saveConsent(necessaryOnly)
    }

    const saveCustomPreferences = () => {
        saveConsent(preferences)
    }

    const saveConsent = (prefs: CookiePreferences) => {
        localStorage.setItem('cookie-consent', 'true')
        localStorage.setItem('cookie-preferences', JSON.stringify(prefs))
        setShowBanner(false)
        setShowSettings(false)
        setShowWidget(true)

        // Initialize analytics if accepted
        if (prefs.analytics) {
            console.log('Analytics enabled')
            // Here you would initialize Google Analytics, etc.
        }
        if (prefs.marketing) {
            console.log('Marketing cookies enabled')
            // Here you would initialize marketing pixels, etc.
        }
    }

    const resetConsent = () => {
        localStorage.removeItem('cookie-consent')
        localStorage.removeItem('cookie-preferences')
        setShowWidget(false)
        setShowBanner(true)
        setPreferences({
            necessary: true,
            analytics: false,
            marketing: false
        })
    }

    return (
        <>
            {/* Cookie Banner */}
            <AnimatePresence>
                {showBanner && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="fixed bottom-0 left-0 right-0 z-[9998] p-4 md:p-6"
                    >
                        <div className="container mx-auto max-w-6xl">
                            <div className="bg-white rounded-2xl shadow-2xl border-2 border-bliss-orange overflow-hidden">
                                <div className="p-6 md:p-8">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 bg-bliss-orange/10 rounded-xl flex items-center justify-center shrink-0">
                                            <Cookie className="w-6 h-6 text-bliss-orange" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl md:text-2xl font-heading font-bold text-bliss-brown mb-2">
                                                🍪 Nous utilisons des cookies
                                            </h3>
                                            <p className="text-gray-600 text-sm md:text-base">
                                                Nous utilisons des cookies pour améliorer votre expérience, analyser notre trafic et personnaliser le contenu.
                                                En cliquant sur "Tout accepter", vous consentez à notre utilisation des cookies.
                                                Vous pouvez gérer vos préférences à tout moment.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <Button
                                            onClick={acceptAll}
                                            className="flex-1 bg-gradient-to-r from-bliss-orange to-orange-600 hover:from-bliss-orange/90 hover:to-orange-700 text-white font-bold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                                        >
                                            <Check className="w-5 h-5 mr-2" />
                                            Tout accepter
                                        </Button>
                                        <Button
                                            onClick={acceptNecessary}
                                            variant="outline"
                                            className="flex-1 border-2 border-gray-300 hover:border-bliss-orange hover:bg-bliss-orange/5 font-semibold py-6 rounded-xl transition-all"
                                        >
                                            Nécessaires uniquement
                                        </Button>
                                        <Button
                                            onClick={() => setShowSettings(true)}
                                            variant="outline"
                                            className="border-2 border-gray-300 hover:border-bliss-brown hover:bg-bliss-brown/5 font-semibold py-6 rounded-xl transition-all"
                                        >
                                            <Settings className="w-5 h-5 mr-2" />
                                            Personnaliser
                                        </Button>
                                    </div>

                                    <p className="text-xs text-gray-500 mt-4 text-center">
                                        En savoir plus sur notre{' '}
                                        <a href="#" className="text-bliss-orange hover:underline font-medium">
                                            Politique de confidentialité
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Settings Modal */}
            <AnimatePresence>
                {showSettings && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
                        onClick={() => setShowSettings(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="sticky top-0 bg-gradient-to-br from-bliss-brown to-bliss-brown/90 text-white p-6 rounded-t-3xl">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Shield className="w-8 h-8" />
                                        <h3 className="text-2xl font-heading font-bold">Paramètres des cookies</h3>
                                    </div>
                                    <button
                                        onClick={() => setShowSettings(false)}
                                        className="p-2 hover:bg-white/20 rounded-full transition-colors"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>

                            <div className="p-6 space-y-6">
                                {/* Necessary Cookies */}
                                <div className="border-2 border-gray-200 rounded-xl p-4 bg-gray-50">
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex-1">
                                            <h4 className="font-bold text-bliss-brown text-lg mb-1">
                                                🔒 Cookies nécessaires
                                            </h4>
                                            <p className="text-sm text-gray-600">
                                                Ces cookies sont essentiels au fonctionnement du site. Ils ne peuvent pas être désactivés.
                                            </p>
                                        </div>
                                        <div className="ml-4">
                                            <div className="w-12 h-6 bg-bliss-orange rounded-full flex items-center px-1">
                                                <div className="w-4 h-4 bg-white rounded-full ml-auto shadow-md" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">
                                        Exemples : session, sécurité, préférences de langue
                                    </p>
                                </div>

                                {/* Analytics Cookies */}
                                <div className="border-2 border-gray-200 rounded-xl p-4 hover:border-bliss-orange/50 transition-colors">
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex-1">
                                            <h4 className="font-bold text-bliss-brown text-lg mb-1">
                                                📊 Cookies analytiques
                                            </h4>
                                            <p className="text-sm text-gray-600">
                                                Nous aident à comprendre comment vous utilisez notre site pour l'améliorer.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                                            className="ml-4"
                                        >
                                            <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${preferences.analytics ? 'bg-bliss-orange' : 'bg-gray-300'
                                                }`}>
                                                <div className={`w-4 h-4 bg-white rounded-full shadow-md transition-transform ${preferences.analytics ? 'ml-auto' : ''
                                                    }`} />
                                            </div>
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">
                                        Exemples : Google Analytics, statistiques de visite
                                    </p>
                                </div>

                                {/* Marketing Cookies */}
                                <div className="border-2 border-gray-200 rounded-xl p-4 hover:border-bliss-orange/50 transition-colors">
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex-1">
                                            <h4 className="font-bold text-bliss-brown text-lg mb-1">
                                                🎯 Cookies marketing
                                            </h4>
                                            <p className="text-sm text-gray-600">
                                                Utilisés pour vous proposer des publicités pertinentes sur d'autres sites.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                                            className="ml-4"
                                        >
                                            <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${preferences.marketing ? 'bg-bliss-orange' : 'bg-gray-300'
                                                }`}>
                                                <div className={`w-4 h-4 bg-white rounded-full shadow-md transition-transform ${preferences.marketing ? 'ml-auto' : ''
                                                    }`} />
                                            </div>
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">
                                        Exemples : Facebook Pixel, Google Ads, retargeting
                                    </p>
                                </div>

                                <div className="bg-bliss-cream/50 rounded-xl p-4 border border-bliss-orange/20">
                                    <p className="text-sm text-gray-700">
                                        <strong>💡 Bon à savoir :</strong> Vous pouvez modifier vos préférences à tout moment
                                        en cliquant sur l'icône cookie en bas à gauche de l'écran.
                                    </p>
                                </div>

                                <div className="flex gap-3 pt-4">
                                    <Button
                                        onClick={saveCustomPreferences}
                                        className="flex-1 bg-gradient-to-r from-bliss-orange to-orange-600 hover:from-bliss-orange/90 hover:to-orange-700 text-white font-bold py-6 rounded-xl"
                                    >
                                        Enregistrer mes préférences
                                    </Button>
                                    <Button
                                        onClick={() => setShowSettings(false)}
                                        variant="outline"
                                        className="border-2 border-gray-300 hover:border-bliss-brown py-6 rounded-xl"
                                    >
                                        Annuler
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Cookie Widget (bottom left) */}
            <AnimatePresence>
                {showWidget && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        onClick={() => setShowSettings(true)}
                        className="fixed bottom-4 left-4 z-[9997] w-14 h-14 bg-gradient-to-br from-bliss-orange to-orange-600 text-white rounded-full shadow-2xl hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
                        title="Gérer les cookies"
                    >
                        <Cookie className="w-7 h-7 group-hover:rotate-12 transition-transform" />
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Reset button for testing (hidden in production) */}
            {process.env.NODE_ENV === 'development' && showWidget && (
                <button
                    onClick={resetConsent}
                    className="fixed bottom-20 left-4 z-[9997] px-3 py-1 bg-red-500 text-white text-xs rounded-full shadow-lg hover:bg-red-600 transition-colors"
                >
                    Reset Cookies
                </button>
            )}
        </>
    )
}
