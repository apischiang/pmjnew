import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Featured } from "@/components/featured"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Clients } from "@/components/clients"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <About />
      <Featured />
      <Contact />
      <Footer />
    </main>
  )
}
