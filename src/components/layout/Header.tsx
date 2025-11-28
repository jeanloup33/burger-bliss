import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: '#', label: 'Accueil' },
        { href: '#menu', label: 'Menu' },
        { href: '#locations', label: 'Emplacements' },
        { href: '#avis', label: 'Avis' },
        { href: '#contact', label: 'Contact' },
    ]

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">

                {/* Logo */}
                <a href="#" className="relative z-50 flex items-center gap-3">
                    {/* Beautiful shield-shaped logo */}
                    <div className="relative">
                        <img
                            src="/logo_BURGER-BLISS-512.webp"
                            alt="Burger Bliss Logo"
                            className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <span className={cn("font-heading text-2xl md:text-3xl font-bold tracking-wide", isScrolled ? "text-bliss-brown" : "text-white drop-shadow-lg")}>
                        BURGER BLISS
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={cn(
                                "text-lg font-medium transition-colors hover:text-bliss-orange relative group",
                                isScrolled ? "text-gray-700" : "text-white"
                            )}
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bliss-orange transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                    <Button
                        size="lg"
                        className="bg-bliss-orange hover:bg-bliss-orange/90 text-white font-bold rounded-full px-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    >
                        <ShoppingBag className="mr-2 h-5 w-5" />
                        Commander
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden relative z-50 p-2 text-bliss-orange"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} className={isScrolled ? "text-bliss-brown" : "text-white"} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center gap-8 md:hidden"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-3xl font-heading font-bold text-bliss-brown hover:text-bliss-orange transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <Button
                                size="lg"
                                className="bg-bliss-orange text-white text-xl px-8 py-6 rounded-full mt-4"
                            >
                                Commander maintenant
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </header>
    )
}
