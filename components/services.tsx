import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Package, Wrench, PenTool, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
    {
        title: "General Trading",
        description: "Comprehensive sourcing and supply solutions for diverse business needs. We bridge the gap between global manufacturers and local markets.",
        icon: Package,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
    },
    {
        title: "Electrical Support",
        description: "High-quality electrical components, cables, and support systems for residential, commercial, and industrial projects.",
        icon: Zap,
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
    },
    {
        title: "Industrial Equipment",
        description: "Heavy-duty machinery, tools, and spare parts to keep your operations running smoothly and efficiently.",
        icon: Wrench,
        color: "text-green-500",
        bg: "bg-green-500/10",
    },
    {
        title: "Stationary Supplies",
        description: "Premium office supplies and stationary to support your daily business administration and operations.",
        icon: PenTool,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
    },
]

export function Services() {
    return (
        <section id="services" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
                    <p className="text-muted-foreground text-lg">
                        We provide a comprehensive range of solutions tailored to meet the diverse needs of modern industries.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-none shadow-md">
                            <CardHeader>
                                <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon className={`w-7 h-7 ${service.color}`} />
                                </div>
                                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base mb-6">
                                    {service.description}
                                </CardDescription>
                                <Link
                                    href="#"
                                    className="inline-flex items-center text-sm font-medium text-primary hover:underline gap-1 group-hover:gap-2 transition-all"
                                >
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
