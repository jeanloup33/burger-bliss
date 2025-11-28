import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

export interface Product {
    id: string
    name: string
    description: string
    price: number
    image: string
    tags?: ('spicy' | 'veggie' | 'best-seller' | 'new')[]
}

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <Card className="overflow-hidden h-full flex flex-col border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <div className="relative h-48 overflow-hidden group">
                    <img
                        src={product.image}
                        alt={product.name}
                        width="400"
                        height="300"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 flex flex-col gap-1">
                        {product.tags?.map(tag => (
                            <Badge key={tag} variant={tag === 'veggie' ? 'green' : tag === 'spicy' ? 'destructive' : 'default'} className="uppercase text-[10px] tracking-wider shadow-sm">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>

                <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                        <CardTitle className="text-xl font-heading text-bliss-brown">{product.name}</CardTitle>
                        <span className="text-lg font-bold text-bliss-orange">{product.price}€</span>
                    </div>
                </CardHeader>

                <CardContent className="flex-grow">
                    <CardDescription className="text-gray-600 line-clamp-2">
                        {product.description}
                    </CardDescription>
                </CardContent>

                <CardFooter className="pt-0">
                    <Button className="w-full bg-bliss-brown hover:bg-bliss-brown/90 group">
                        <span>Commander</span>
                        <Plus className="ml-2 h-4 w-4 transition-transform group-hover:rotate-90" />
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}
