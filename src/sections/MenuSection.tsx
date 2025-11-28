import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ProductCard, Product } from '@/components/shared/ProductCard'
import { Button } from '@/components/ui/button'

const CATEGORIES = [
    { id: 'burgers', label: 'Burgers' },
    { id: 'sides', label: 'Frites & Sides' },
    { id: 'drinks', label: 'Boissons' },
    { id: 'desserts', label: 'Desserts' },
]

const PRODUCTS: Record<string, Product[]> = {
    burgers: [
        {
            id: 'b1',
            name: 'Le Classic Bliss',
            description: 'Steak haché Black Angus, Cheddar affiné, Salade, Tomate, Oignons caramélisés, Sauce secrète Bliss.',
            price: 12,
            image: '/images/classic_bliss.avif',
            tags: ['best-seller']
        },
        {
            id: 'b2',
            name: 'The Smoky Joe',
            description: 'Double steak, Bacon croustillant, Sauce BBQ maison, Onion rings, Cheddar fumé.',
            price: 14,
            image: '/images/smoky_joe.avif',
            tags: ['new']
        },
        {
            id: 'b3',
            name: 'Veggie Dream',
            description: 'Galette de quinoa et haricots rouges, Avocat, Roquette, Sauce yaourt-herbes, Tomates séchées.',
            price: 13,
            image: '/images/veggie_burger.avif',
            tags: ['veggie']
        },
        {
            id: 'b4',
            name: 'Spicy Chicken',
            description: 'Poulet frit croustillant, Jalapeños, Cheddar, Sauce sriracha-mayo, Pickles.',
            price: 13.5,
            image: '/images/speecy_chicken.avif',
            tags: ['spicy']
        }
    ],
    sides: [
        {
            id: 's1',
            name: 'Frites Maison',
            description: 'Pommes de terre fraîches, double cuisson, sel de Guérande.',
            price: 4,
            image: '/images/frites.avif',
            tags: ['best-seller']
        },
        {
            id: 's2',
            name: 'Onion Rings',
            description: 'Rondelles d\'oignons frits dans une pâte à la bière.',
            price: 5,
            image: '/images/onion_rings.avif'
        },
        {
            id: 's3',
            name: 'Salade Caesar',
            description: 'Romaine, croûtons à l\'ail, parmesan, sauce Caesar maison.',
            price: 6,
            image: '/images/salade_caesar.avif',
            tags: ['veggie']
        },
        {
            id: 's4',
            name: 'Fish & Chips',
            description: 'Cabillaud frais pané, sauce tartare, quartier de citron.',
            price: 9,
            image: '/images/fish-and-chips.avif'
        }
    ],
    drinks: [
        {
            id: 'd1',
            name: 'Limonade Artisanale',
            description: 'Citron pressé minute, menthe fraîche, peu sucrée.',
            price: 3.5,
            image: '/images/limonade.avif'
        },
        {
            id: 'd2',
            name: 'Cola Craft',
            description: 'Cola artisanal bio aux épices douces.',
            price: 4,
            image: '/images/coca-cola.avif'
        },
        {
            id: 'd3',
            name: 'Thé Glacé Pêche',
            description: 'Infusion maison de thé noir, pêche blanche, sans colorant.',
            price: 3.5,
            image: '/images/the.avif'
        },
        {
            id: 'd4',
            name: 'Bière Locale (33cl)',
            description: 'IPA ou Blonde de la brasserie du quartier.',
            price: 5.5,
            image: '/images/biere.avif'
        }
    ],
    desserts: [
        {
            id: 'ds1',
            name: 'Cheesecake NY',
            description: 'L\'authentique recette new-yorkaise, coulis de fruits rouges.',
            price: 6,
            image: '/images/cheese_cake.avif'
        },
        {
            id: 'ds2',
            name: 'Cookie Géant',
            description: 'Pépites de chocolat noir et noix de pécan, cœur fondant.',
            price: 3.5,
            image: '/images/cookies_geant.avif',
            tags: ['best-seller']
        },
        {
            id: 'ds3',
            name: 'Glace Artisanale',
            description: 'Deux boules au choix : Vanille Bourbon, Chocolat, Fraise.',
            price: 4.5,
            image: '/images/glace.avif'
        },
        {
            id: 'ds4',
            name: 'Salade de Fruits',
            description: 'Fruits de saison coupés frais le matin même.',
            price: 4,
            image: '/images/salade-de-fruits.avif',
            tags: ['veggie']
        }
    ]
}

export function MenuSection() {
    const [activeCategory, setActiveCategory] = useState('burgers')

    return (
        <section id="menu" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-heading text-bliss-brown">
                        Le Menu
                    </h2>
                    <div className="w-20 h-1 bg-bliss-orange rounded-full mx-auto" />
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Découvrez nos créations gourmandes, préparées à la commande avec des produits frais et de qualité.
                    </p>
                </div>

                {/* Categories Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {CATEGORIES.map((cat) => (
                        <Button
                            key={cat.id}
                            variant={activeCategory === cat.id ? 'default' : 'outline'}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`rounded-full px-6 text-lg transition-all duration-300 ${activeCategory === cat.id
                                ? 'bg-bliss-orange hover:bg-bliss-orange/90 text-white shadow-md scale-105'
                                : 'hover:border-bliss-orange hover:text-bliss-orange'
                                }`}
                        >
                            {cat.label}
                        </Button>
                    ))}
                </div>

                {/* Products Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {PRODUCTS[activeCategory]?.map((product) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="mt-16 text-center">
                    <p className="text-sm text-muted-foreground italic">
                        * Prix indicatifs, susceptibles de varier selon les emplacements.
                    </p>
                </div>
            </div>
        </section >
    )
}
