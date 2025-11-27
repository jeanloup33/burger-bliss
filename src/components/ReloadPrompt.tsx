import { useRegisterSW } from 'virtual:pwa-register/react'

function ReloadPrompt() {
    const {
        offlineReady: [offlineReady, setOfflineReady],
        needRefresh: [needRefresh, setNeedRefresh],
        updateServiceWorker,
    } = useRegisterSW({
        onRegistered(r) {
            console.log('SW Registered: ' + r)
        },
        onRegisterError(error) {
            console.log('SW registration error', error)
        },
    })

    const close = () => {
        setOfflineReady(false)
        setNeedRefresh(false)
    }

    return (
        <div className="ReloadPrompt-container">
            {(offlineReady || needRefresh) && (
                <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-2xl p-6 max-w-sm z-[9999] border-2 border-bliss-orange">
                    <div className="flex flex-col gap-4">
                        {offlineReady ? (
                            <span className="text-bliss-brown font-semibold">
                                ✅ Application prête à fonctionner hors ligne !
                            </span>
                        ) : (
                            <span className="text-bliss-brown font-semibold">
                                🔄 Nouvelle version disponible !
                            </span>
                        )}
                        <div className="flex gap-2">
                            {needRefresh && (
                                <button
                                    className="bg-bliss-orange text-white px-4 py-2 rounded-lg font-bold hover:bg-bliss-orange/90 transition-colors"
                                    onClick={() => updateServiceWorker(true)}
                                >
                                    Mettre à jour
                                </button>
                            )}
                            <button
                                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                                onClick={() => close()}
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ReloadPrompt
