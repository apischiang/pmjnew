"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const clients = [
    { name: "Client 1", logo: "/placeholder-logo.png" },
    { name: "Client 2", logo: "/placeholder-logo.png" },
    { name: "Client 3", logo: "/placeholder-logo.png" },
    { name: "Client 4", logo: "/placeholder-logo.png" },
    { name: "Client 5", logo: "/placeholder-logo.png" },
    { name: "Client 6", logo: "/placeholder-logo.png" },
]

export function Clients() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <section className="py-12 bg-muted/50">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-8">Trusted by Industry Leaders</h2>
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full max-w-5xl mx-auto"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        {clients.map((client, index) => (
                            <CarouselItem key={index} className="basis-1/2 md:basis-1/4 lg:basis-1/5">
                                <div className="p-1">
                                    <Card className="border-none shadow-none bg-transparent">
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            {/* Placeholder for Client Logo */}
                                            <div className="w-full h-full bg-muted-foreground/10 rounded-full flex items-center justify-center text-muted-foreground font-semibold text-sm">
                                                {client.name}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>
            </div>
        </section>
    )
}
