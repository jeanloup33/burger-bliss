import { motion } from 'framer-motion'

export function HistorySection() {
    return (
        <section className="py-20 bg-bliss-cream overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 space-y-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading text-bliss-brown">
                            Notre Histoire
                        </h2>
                        <div className="w-20 h-1 bg-bliss-orange rounded-full" />
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Tout a commencé par un road-trip sur la Route 66. Fascinés par la culture du "Diner" américain et la générosité des burgers locaux, nous avons décidé de ramener ce goût authentique à la maison.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Chez <span className="font-bold text-bliss-brown">Burger Bliss</span>, pas de chichis. Juste des produits frais, une viande de bœuf 100% française hachée chaque matin, et des frites maison coupées au couteau. Notre foodtruck, c'est notre cuisine ouverte sur la rue, où chaque burger est préparé avec passion sous vos yeux.
                        </p>
                        <div className="pt-4">
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="Team member" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <span className="text-sm font-medium text-gray-600">L'équipe Bliss à votre service !</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop"
                                alt="Burger gourmet avec cheddar fondant"
                                className="w-full h-[500px] object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 w-full h-full border-4 border-bliss-orange rounded-2xl -z-0" />
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
