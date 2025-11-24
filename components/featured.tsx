import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const products = [
    {
        title: "Industrial Generators",
        category: "Industrial Equipment",
        image: "/placeholder-generator.jpg", // Placeholder
    },
    {
        title: "High-Voltage Cables",
        category: "Electrical Support",
        image: "/placeholder-cables.jpg", // Placeholder
    },
    {
        title: "Office Essentials Kit",
        category: "Stationary",
        image: "/placeholder-stationary.jpg", // Placeholder
    },
    {
        title: "Safety Gear Set",
        category: "General Trading",
        image: "/placeholder-safety.jpg", // Placeholder
    },
]

export function Featured() {
    return (
        <section id="products" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
                        <p className="text-muted-foreground text-lg">
                            Explore our selection of top-rated products across all categories.
                            We ensure the highest quality standards for every item we supply.
                        </p>
                    </div>
                    <Button variant="outline" className="hidden md:flex">
                        View All Catalog <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <Card key={index} className="overflow-hidden group border-none shadow-md hover:shadow-xl transition-all duration-300">
                            <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-6">
                                    <Button size="sm" variant="secondary" className="w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        View Details
                                    </Button>
                                </div>
                                {/* Placeholder for actual image */}
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-muted-foreground">
                                    {product.title}
                                </div>
                            </div>
                            <CardHeader className="p-4">
                                <p className="text-xs font-medium text-primary mb-1">{product.category}</p>
                                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                    {product.title}
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Button variant="outline" className="w-full">
                        View All Catalog <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>
    )
}
