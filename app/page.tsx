import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { SocialLinks } from "@/components/social-links"
import { EmailSignup } from "@/components/email-signup"
import { Footer } from "@/components/footer"

/**
 * TODO: Site Texture/Grain
 * TODO: Cool retro graphic in header or VHS-style effects
 * TODO: Do something with video section (maybe our logo??? or just a campfire graphic or something...)
 * TODO: Retro font
 * TODO: Favicon
 * TODO: Wire up email signup to some simple kv store
 */

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
