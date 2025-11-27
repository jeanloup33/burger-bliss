import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const REVIEWS = [
    {
        id: 1,
        name: "Thomas Dubois",
        role: "Fan de Burgers",
        rating: 5,
        text: "Absolument incroyable ! Le pain est moelleux, la viande juteuse... C'est de loin le meilleur burger que j'ai mangé à Paris. Le service est top !",
        avatar: "https://i.pravatar.cc/150?u=1"
    },
    {
        id: 2,
        name: "Sarah Martin",
        role: "Guide Local",
        rating: 5,
        text: "Une découverte géniale. Les frites maison sont à tomber par terre. J'adore l'ambiance du camion et l'équipe est super souriante.",
        avatar: "https://i.pravatar.cc/150?u=5"
    },
    {
        id: 3,
        name: "Julien R.",
        role: "Client régulier",
        rating: 4,
        text: "Très bon rapport qualité-prix pour du fait maison. Le Spicy Chicken est une tuerie, attention ça pique vraiment ! Je recommande.",
        avatar: "https://i.pravatar.cc/150?u=8"
    },
    {
        id: 4,
        name: "Léa Petit",
        role: "Étudiante",
        rating: 5,
        text: "Le spot parfait pour la pause déj. Rapide, copieux et délicieux. L'option veggie est vraiment travaillée, ça change des galettes sèches.",
        avatar: "https://i.pravatar.cc/150?u=12"
    },
    {
        id: 5,
        name: "Marc Lemoine",
        role: "Gourmet",
        rating: 5,
        text: "Enfin un vrai burger américain ! On sent la qualité des produits. Mention spéciale pour le Cheesecake en dessert.",
        avatar: "https://i.pravatar.cc/150?u=3"
    }
]

export function ReviewsSection() {
    return (
        <section id="avis" className="py-20 bg-bliss-cream overflow-hidden">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-heading text-bliss-brown mb-4">Ils ont kiffé !</h2>
                <div className="w-20 h-1 bg-bliss-orange rounded-full mx-auto" />
            </div>

            {/* Infinite Scroll Marquee */}
            <div className="relative w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-bliss-cream to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-bliss-cream to-transparent z-10" />

                <motion.div
                    className="flex gap-6 w-max px-4"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 40 // Adjust speed here
                    }}
                >
                    {/* Double the array to create seamless loop */}
                    {[...REVIEWS, ...REVIEWS].map((review, index) => (
                        <Card key={`${review.id}-${index}`} className="w-[350px] md:w-[450px] shrink-0 border-none shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white transition-colors">
                            <CardContent className="p-8 flex flex-col gap-4 h-full">
                                <div className="flex justify-between items-start">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-5 h-5 ${i < review.rating ? 'text-bliss-ochre fill-bliss-ochre' : 'text-gray-300'}`}
                                            />
                                        ))}
                                    </div>
                                    <Quote className="text-bliss-orange/20 w-10 h-10" />
                                </div>

                                <p className="text-gray-700 italic flex-grow">"{review.text}"</p>

                                <div className="flex items-center gap-4 mt-2">
                                    <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                                    <div>
                                        <p className="font-bold text-bliss-brown">{review.name}</p>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">{review.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
