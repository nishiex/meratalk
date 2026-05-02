import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Headphones, ShieldCheck, Activity, Rocket } from "lucide-react"
import { Navbar } from "./navbar"
import { Footer } from "./footer"
import { CTABanner } from "./cta-banner"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface Benefit {
  title: string
  description: string
}

interface FAQItem {
  question: string
  answer: string
}

interface PlatformPageProps {
  // Hero Section
  heroTitle: React.ReactNode
  heroDescription: string
  heroImage: string
  heroImageAlt: string

  // Second Section (Left Image, Right Content)
  section2Title: string
  section2Description: string
  section2Image: string
  section2ImageAlt: string
  section2Features?: string[]

  // Third Section - Features Grid
  section3Title: string
  section3Subtitle: string
  features: Feature[]

  // Benefits Section
  benefitsTitle: string
  benefitsSubtitle: string
  benefits: Benefit[]

  // Use Cases Section
  useCasesTitle: string
  useCases: { title: string; description: string }[]

  // FAQ Section
  faqTitle: string
  faqs: FAQItem[]

  ctaTitle?: string
  ctaDescription?: string

  // Per-page accent color used as the tinted shadow behind the hero & section-2
  // images. Defaults to a soft peach.
  accentColor?: string
}

export function PlatformPageTemplate({
  heroTitle,
  heroDescription,
  heroImage,
  heroImageAlt,
  section2Title,
  section2Description,
  section2Image,
  section2ImageAlt,
  section2Features,
  section3Title,
  section3Subtitle,
  features,
  benefitsTitle,
  benefitsSubtitle,
  benefits,
  useCasesTitle,
  useCases,
  faqTitle,
  faqs,
  accentColor = "#fde2cf",
}: PlatformPageProps) {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Left text, Right contained image */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#f0fdfa] via-white to-[#e6f7f5]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0d4a4a] leading-tight mb-6 text-balance">
                {heroTitle}
              </h1>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8 max-w-xl">
                {heroDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0a9e8f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#088a7d] transition-colors group"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#0d4a4a] px-6 py-3 rounded-lg font-semibold border border-[#e0e0e0] hover:border-[#0a9e8f] hover:text-[#0a9e8f] transition-colors"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div
                className="relative w-full max-w-xl aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl"
                style={{ boxShadow: `0 25px 50px -12px ${accentColor}` }}
              >
                <Image
                  src={heroImage}
                  alt={heroImageAlt}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Left contained image, Right text */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <div
                className="relative w-full max-w-xl aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl"
                style={{ boxShadow: `0 25px 50px -12px ${accentColor}` }}
              >
                <Image
                  src={section2Image}
                  alt={section2ImageAlt}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] leading-tight mb-6">
                {section2Title}
              </h2>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8">
                {section2Description}
              </p>
              {section2Features && section2Features.length > 0 && (
                <ul className="space-y-4">
                  {section2Features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#0a9e8f] mt-0.5 shrink-0" />
                      <span className="text-[#333]">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20 bg-[#f8fffe]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] mb-4">
              {section3Title}
            </h2>
            <p className="text-lg text-[#5a6a7a] max-w-2xl mx-auto">
              {section3Subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-[#e6f0ee]"
              >
                <div className="w-12 h-12 bg-[#e0f2f1] rounded-xl flex items-center justify-center text-[#0a9e8f] mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#0d4a4a] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#5a6a7a] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] mb-4">
              {benefitsTitle}
            </h2>
            <p className="text-lg text-[#5a6a7a] max-w-2xl mx-auto">
              {benefitsSubtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-xl bg-gradient-to-br from-[#f0fdfa] to-white border border-[#e6f0ee]"
              >
                <div className="w-10 h-10 bg-[#0a9e8f] rounded-full flex items-center justify-center text-white font-bold shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0d4a4a] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[#5a6a7a] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-[#0d4a4a]">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-14">
            {useCasesTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/15 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-white/80 leading-relaxed text-sm">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Icon Box / Trust Signals Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Headphones className="w-7 h-7" />,
                title: "24/7 Expert Support",
                description: "Real humans, around the clock. Get help when you need it most.",
              },
              {
                icon: <ShieldCheck className="w-7 h-7" />,
                title: "Enterprise Security",
                description: "SOC 2 Type II, HIPAA, and GDPR compliant by default.",
              },
              {
                icon: <Activity className="w-7 h-7" />,
                title: "99.99% Uptime",
                description: "Carrier-grade infrastructure with redundancy across regions.",
              },
              {
                icon: <Rocket className="w-7 h-7" />,
                title: "Setup in Minutes",
                description: "No hardware, no IT headaches—activate features instantly.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl border border-[#e6f0ee] hover:shadow-md transition-shadow bg-white"
              >
                <div
                  className="w-14 h-14 mx-auto mb-5 rounded-xl flex items-center justify-center text-[#0a9e8f]"
                  style={{ backgroundColor: `${accentColor}66` }}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#0d4a4a] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5a6a7a] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] text-center mb-14">
            {faqTitle}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-[#f8fffe] rounded-xl border border-[#e6f0ee] overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-[#0d4a4a] pr-4">{faq.question}</span>
                  <span className="text-[#0a9e8f] transition-transform group-open:rotate-180">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-[#5a6a7a] leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
