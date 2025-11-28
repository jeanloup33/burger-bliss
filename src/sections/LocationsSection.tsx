import { motion } from 'framer-motion'
import { MapPin, Calendar, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const LOCATIONS = [
    {
        id: 1,
        day: 'Lundi',
        place: 'Place de la Mairie',
        time: '11h30 - 14h30',
        address: '12 Place de l\'Hôtel de Ville, 75004 Paris'
    },
    {
        id: 2,
        day: 'Mardi',
        place: 'Zone Tech - La Défense',
        time: '11h30 - 14h30',
        address: 'Parvis de la Défense, 92800 Puteaux'
    },
    {
        id: 3,
        day: 'Mercredi',
        place: 'Marché des Batignolles',
        time: '11h30 - 14h30',
        address: 'Boulevard des Batignolles, 75017 Paris'
    },
    {
        id: 4,
        day: 'Jeudi',
        place: 'Campus Universitaire',
        time: '11h30 - 14h30',
        address: '45 Rue des Saints-Pères, 75006 Paris'
    },
    {
        id: 5,
        day: 'Vendredi',
        place: 'Zone Business - Station F',
        time: '11h30 - 15h00',
        address: '5 Parvis Alan Turing, 75013 Paris'
    },
    {
        id: 6,
        day: 'Samedi Soir',
        place: 'Quais de Seine - Event',
        time: '19h00 - 23h00',
        address: 'Port de la Gare, 75013 Paris'
    }
]

export function LocationsSection() {
    return (
        <section id="locations" className="py-20 bg-bliss-brown text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-[url('/images/food-pattern.png')] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-heading text-bliss-cream">
                        Où nous trouver ?
                    </h2>
                    <div className="w-20 h-1 bg-bliss-orange rounded-full mx-auto" />
                    <p className="text-bliss-cream/80 max-w-2xl mx-auto text-lg">
                        Suivez le camion ! Nous sillonnons la ville pour vous apporter votre dose de bonheur.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Locations List */}
                    <div className="space-y-4">
                        {LOCATIONS.map((loc, index) => (
                            <motion.div
                                key={loc.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors duration-300">
                                    <CardContent className="p-4 flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 rounded-full bg-bliss-orange flex items-center justify-center shrink-0">
                                                <Calendar className="text-white h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-xl text-bliss-cream">{loc.day}</h3>
                                                <div className="flex items-center gap-2 text-white/70 text-sm">
                                                    <MapPin className="h-3 w-3" />
                                                    <span>{loc.place}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right hidden sm:block">
                                            <div className="flex items-center justify-end gap-2 text-bliss-ochre font-medium">
                                                <Clock className="h-4 w-4" />
                                                <span>{loc.time}</span>
                                            </div>
                                            <p className="text-xs text-white/50 mt-1 max-w-[150px] truncate">{loc.address}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Map Embed */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 relative"
                    >
                        <iframe
                            title="Emplacement Burger Bliss - Pessac Centre"
                            src="https://www.google.com/maps?q=44.80534649337742,-0.6299111751392525&hl=fr&z=15&output=embed"
                            className="w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 text-bliss-brown px-4 py-2 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-bliss-orange" />
                            <span className="text-sm font-semibold">Centre-ville de Pessac</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
