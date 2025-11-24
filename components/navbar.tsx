"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Search, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/mode-toggle"

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
                ? "bg-background/80 backdrop-blur-md border-b"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-xl">G</span>
                    </div>
                    <span className="font-bold text-xl hidden sm:inline-block">
                        GlobalTrade
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        href="#services"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        Services
                    </Link>
                    <Link
                        href="#about"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        About Us
                    </Link>
                    <Link
                        href="#products"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        Products
                    </Link>
                    <Link
                        href="#contact"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    {/* <Button size="sm" className="hidden md:flex">
                        Get Quote
                    </Button> */}
                    <ModeToggle />

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="w-5 h-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                            <div className="flex flex-col gap-8 mt-8">
                                <Link href="/" className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                        <span className="text-primary-foreground font-bold text-xl">
                                            G
                                        </span>
                                    </div>
                                    <span className="font-bold text-xl">GlobalTrade</span>
                                </Link>
                                <nav className="flex flex-col gap-4">
                                    <Link
                                        href="#services"
                                        className="text-lg font-medium hover:text-primary transition-colors"
                                    >
                                        Services
                                    </Link>
                                    <Link
                                        href="#about"
                                        className="text-lg font-medium hover:text-primary transition-colors"
                                    >
                                        About Us
                                    </Link>
                                    <Link
                                        href="#products"
                                        className="text-lg font-medium hover:text-primary transition-colors"
                                    >
                                        Products
                                    </Link>
                                    <Link
                                        href="#contact"
                                        className="text-lg font-medium hover:text-primary transition-colors"
                                    >
                                        Contact
                                    </Link>
                                </nav>
                                <div className="flex flex-col gap-4">
                                    <Button className="w-full">Get Quote</Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
