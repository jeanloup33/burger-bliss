import { HeroSection } from '@/sections/HeroSection'
import { HistorySection } from '@/sections/HistorySection'
import { MenuSection } from '@/sections/MenuSection'
import { LocationsSection } from '@/sections/LocationsSection'
import { ReviewsSection } from '@/sections/ReviewsSection'
import { ContactSection } from '@/sections/ContactSection'
import { Header } from '@/components/layout/Header'
import ReloadPrompt from '@/components/ReloadPrompt'
import { PWAInstallPrompt } from '@/components/PWAInstallPrompt'
import { CookieConsent } from '@/components/CookieConsent'
import { ScrollToTopButton } from '@/components/shared/ScrollToTopButton'

function App() {
    return (
        <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
            <Header />
            <ReloadPrompt />
            <PWAInstallPrompt />
            <CookieConsent />
            <main>
                <HeroSection />
                <HistorySection />
                <MenuSection />
                <LocationsSection />
                <ReviewsSection />
                <ContactSection />
            </main>

            <ScrollToTopButton />

            <footer className="bg-bliss-brown text-white py-8 text-center">
                <div className="container mx-auto px-4">
                    <p className="text-sm opacity-70">
                        &copy; {new Date().getFullYear()} Burger Bliss. Tous droits reserves. Fait avec amour et beaucoup de gras.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default App
