import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function About() {
    return (
        <section id="about" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="aspect-square rounded-3xl overflow-hidden bg-muted relative z-10">
                            {/* Placeholder for actual image, using a gradient for now */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-muted-foreground">
                                About Us Image
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute -top-8 -left-8 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Your Trusted Partner in <br />
                                <span className="text-primary">Industrial Excellence</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                With years of experience in the industry, GlobalTrade has established itself as a reliable partner for businesses across various sectors. We pride ourselves on delivering high-quality products and exceptional service.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                "Global Sourcing Network",
                                "Quality Assurance Guarantee",
                                "Timely Delivery & Logistics",
                                "Expert Technical Support"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                    <span className="font-medium text-lg">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <Button size="lg" className="px-8">
                                Discover Our Story
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
