import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { SocialLinks } from "@/components/social-links"
import { EmailSignup } from "@/components/email-signup"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <About />
      <SocialLinks />
      <EmailSignup />
      <Footer />
    </main>
  )
}
