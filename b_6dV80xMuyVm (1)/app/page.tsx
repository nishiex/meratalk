import { Navbar } from "@/components/meratalk/navbar"
import { Hero } from "@/components/meratalk/hero"
import { LogoMarquee } from "@/components/meratalk/logo-marquee"
import { ShowcaseSection } from "@/components/meratalk/showcase-section"
import { FeaturesV2 } from "@/components/meratalk/features-v2"
import { AlternatingFeatures } from "@/components/meratalk/alternating-features"
import { HowItWorks } from "@/components/meratalk/how-it-works"
import { Testimonials } from "@/components/meratalk/testimonials"
import { CTABanner } from "@/components/meratalk/cta-banner"
import { Footer } from "@/components/meratalk/footer"

export default function MeraTalkHomePage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      {/* Spacer for fixed header */}
      <div className="h-[72px]" />
      <Hero />
      <LogoMarquee />
      <ShowcaseSection />
      <FeaturesV2 />
      <AlternatingFeatures />
      <HowItWorks />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  )
}
