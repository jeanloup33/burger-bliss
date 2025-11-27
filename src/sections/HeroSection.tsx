import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function HeroSection() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

    return (
        <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-10" />
                {/* Placeholder for background image */}
                <div className="w-full h-full bg-slate-900 bg-[url('https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2565&auto=format&fit=crop')] bg-cover bg-center" />
            </motion.div>

            <div className="relative z-10 text-center text-white space-y-8 px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-6xl md:text-8xl font-heading font-bold tracking-tight mb-2 text-primary drop-shadow-2xl">
                        BURGER BLISS
                    </h1>
                    <p className="text-2xl md:text-3xl font-light tracking-wide text-gray-100 drop-shadow-lg">
                        Le vrai goût de l'Amérique, au coin de votre rue.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-xl px-10 py-8 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300">
                        Voir le Menu
                    </Button>
                    <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border-white/40 text-white hover:bg-white/20 hover:border-white font-bold text-xl px-10 py-8 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300">
                        Nous Trouver
                    </Button>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/80"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></svg>
            </motion.div>
        </section>
    )
}
