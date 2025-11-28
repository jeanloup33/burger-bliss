import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const SCROLL_TRIGGER = 300

export function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsVisible(window.scrollY > SCROLL_TRIGGER)
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    key="scroll-top"
                    onClick={scrollToTop}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                    className="fixed bottom-6 right-6 z-50 rounded-full bg-bliss-brown text-white p-3 shadow-lg shadow-bliss-orange/40 hover:bg-bliss-orange focus:outline-none focus:ring-2 focus:ring-bliss-orange/50"
                    aria-label="Remonter en haut de page"
                >
                    <ArrowUp size={22} />
                </motion.button>
            )}
        </AnimatePresence>
    )
}
