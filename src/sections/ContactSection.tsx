import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, Instagram, Facebook, MapPin, Clock, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function ContactSection() {
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [focusedField, setFocusedField] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSuccess(true)
        setFormState({ name: '', email: '', subject: '', message: '' })

        // Reset success state after 3s
        setTimeout(() => setIsSuccess(false), 3000)
    }

    const contactMethods = [
        {
            icon: Phone,
            label: 'Téléphone',
            value: '06 12 34 56 78',
            href: 'tel:+33612345678',
            color: 'from-orange-500 to-red-500',
            description: 'Lun-Sam 11h-22h'
        },
        {
            icon: Mail,
            label: 'Email',
            value: 'hello@burgerbliss.fr',
            href: 'mailto:hello@burgerbliss.fr',
            color: 'from-blue-500 to-purple-500',
            description: 'Réponse sous 24h'
        },
        {
            icon: MapPin,
            label: 'Adresse',
            value: 'Paris & Île-de-France',
            href: '#locations',
            color: 'from-green-500 to-teal-500',
            description: 'Voir nos emplacements'
        }
    ]

    const socialLinks = [
        { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600' },
        { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
        { icon: MessageCircle, href: '#', label: 'WhatsApp', color: 'hover:bg-green-600' }
    ]

    return (
        <section id="contact" className="relative py-24 overflow-hidden bg-gradient-to-br from-bliss-cream via-white to-orange-50">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.03, 0.05, 0.03]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-bliss-orange to-bliss-ochre rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                        opacity: [0.03, 0.06, 0.03]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-1/2 -left-1/4 w-[700px] h-[700px] bg-gradient-to-br from-bliss-brown to-bliss-orange rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-bliss-orange/10 text-bliss-orange px-4 py-2 rounded-full mb-4 font-medium">
                        <Sparkles className="w-4 h-4" />
                        <span>On a hâte de vous lire !</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-heading text-bliss-brown mb-4">
                        Restons en contact
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-bliss-orange to-bliss-ochre rounded-full mx-auto mb-6" />
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Une question, une suggestion ou juste envie de discuter burgers ?
                        <br className="hidden md:block" />
                        Notre équipe est là pour vous ! 🍔
                    </p>
                </motion.div>

                {/* Contact Methods Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {contactMethods.map((method, index) => (
                        <motion.a
                            key={method.label}
                            href={method.href}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                            <div className="relative">
                                <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    <method.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-1">{method.label}</h3>
                                <p className="text-bliss-brown font-semibold mb-1">{method.value}</p>
                                <p className="text-sm text-gray-500">{method.description}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

                    {/* Left Side - Info & Social */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-8"
                    >
                        {/* Why Contact Us */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-heading text-bliss-brown mb-6 flex items-center gap-2">
                                <MessageCircle className="w-6 h-6 text-bliss-orange" />
                                Pourquoi nous contacter ?
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    'Questions sur les allergènes',
                                    'Privatisation pour événements',
                                    'Partenariats & collaborations',
                                    'Suggestions de menu',
                                    'Feedback & témoignages'
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-3 text-gray-700"
                                    >
                                        <div className="w-6 h-6 bg-bliss-orange/10 rounded-full flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-bliss-orange" />
                                        </div>
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div className="bg-gradient-to-br from-bliss-brown to-bliss-brown/90 rounded-2xl p-8 shadow-xl text-white">
                            <h3 className="text-2xl font-heading mb-3 flex items-center gap-2">
                                <Sparkles className="w-6 h-6 text-bliss-ochre" />
                                Suivez nos aventures
                            </h3>
                            <p className="text-white/80 mb-6">
                                Rejoignez notre communauté et ne ratez aucune nouveauté !
                            </p>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`w-14 h-14 bg-white/10 backdrop-blur-sm text-white rounded-xl flex items-center justify-center transition-all duration-300 ${social.color} shadow-lg`}
                                        title={social.label}
                                    >
                                        <social.icon className="w-6 h-6" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="bg-bliss-cream/50 rounded-2xl p-6 border-2 border-bliss-orange/20">
                            <div className="flex items-center gap-3 mb-3">
                                <Clock className="w-6 h-6 text-bliss-orange" />
                                <h3 className="text-xl font-heading text-bliss-brown">Horaires de réponse</h3>
                            </div>
                            <p className="text-gray-700">
                                <strong>Lun-Sam:</strong> 11h - 22h<br />
                                <strong>Dimanche:</strong> Sur événements uniquement
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3"
                    >
                        <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
                            {/* Success Overlay */}
                            {isSuccess && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex flex-col items-center justify-center text-white z-50"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2, type: "spring" }}
                                    >
                                        <CheckCircle2 className="w-20 h-20 mb-4" />
                                    </motion.div>
                                    <h3 className="text-3xl font-heading mb-2">Message envoyé !</h3>
                                    <p className="text-white/90">On vous répond très vite 🚀</p>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <motion.div
                                        className="space-y-2"
                                        animate={{ scale: focusedField === 'name' ? 1.02 : 1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Label htmlFor="name" className="text-gray-700 font-semibold">Nom complet</Label>
                                        <Input
                                            id="name"
                                            placeholder="John Doe"
                                            value={formState.name}
                                            onChange={e => setFormState({ ...formState, name: e.target.value })}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className="bg-gray-50 border-2 border-gray-200 focus:border-bliss-orange focus:bg-white transition-all h-12 text-base"
                                        />
                                    </motion.div>
                                    <motion.div
                                        className="space-y-2"
                                        animate={{ scale: focusedField === 'email' ? 1.02 : 1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Label htmlFor="email" className="text-gray-700 font-semibold">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            value={formState.email}
                                            onChange={e => setFormState({ ...formState, email: e.target.value })}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className="bg-gray-50 border-2 border-gray-200 focus:border-bliss-orange focus:bg-white transition-all h-12 text-base"
                                        />
                                    </motion.div>
                                </div>

                                <motion.div
                                    className="space-y-2"
                                    animate={{ scale: focusedField === 'subject' ? 1.02 : 1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Label htmlFor="subject" className="text-gray-700 font-semibold">Sujet de votre message</Label>
                                    <Select
                                        onValueChange={val => setFormState({ ...formState, subject: val })}
                                        value={formState.subject}
                                    >
                                        <SelectTrigger
                                            className="bg-gray-50 border-2 border-gray-200 focus:border-bliss-orange h-12 text-base"
                                            onFocus={() => setFocusedField('subject')}
                                            onBlur={() => setFocusedField(null)}
                                        >
                                            <SelectValue placeholder="Choisissez un sujet" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="privatisation">🎉 Privatisation / Événement</SelectItem>
                                            <SelectItem value="info">💬 Information générale</SelectItem>
                                            <SelectItem value="feedback">⭐ Retour d'expérience</SelectItem>
                                            <SelectItem value="presse">📰 Presse / Partenariat</SelectItem>
                                            <SelectItem value="autre">🤔 Autre demande</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </motion.div>

                                <motion.div
                                    className="space-y-2"
                                    animate={{ scale: focusedField === 'message' ? 1.02 : 1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Label htmlFor="message" className="text-gray-700 font-semibold">Votre message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Dites-nous tout ! On adore lire vos messages 😊"
                                        className="min-h-[160px] bg-gray-50 border-2 border-gray-200 focus:border-bliss-orange focus:bg-white resize-none transition-all text-base"
                                        value={formState.message}
                                        onChange={e => setFormState({ ...formState, message: e.target.value })}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                    />
                                </motion.div>

                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-bliss-orange to-orange-600 hover:from-bliss-orange/90 hover:to-orange-700 text-white text-lg py-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-bold relative overflow-hidden group"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            {isSubmitting ? (
                                                <>
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                    />
                                                    Envoi en cours...
                                                </>
                                            ) : (
                                                <>
                                                    Envoyer le message
                                                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </>
                                            )}
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </Button>
                                </motion.div>

                                <p className="text-center text-sm text-gray-500">
                                    En envoyant ce formulaire, vous acceptez que nous utilisions vos données pour vous répondre.
                                    Vos données ne seront jamais partagées. 🔒
                                </p>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
