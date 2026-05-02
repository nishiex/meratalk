import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Users,
  Tag,
  Layers,
  CreditCard,
  ShieldCheck,
  BarChart3,
  Rocket,
  Settings,
  Zap,
  Headphones,
  Globe,
  Wallet,
  Repeat,
  CheckCircle,
} from "lucide-react"
import { Navbar } from "@/components/meratalk/navbar"
import { Footer } from "@/components/meratalk/footer"
import { CTABanner } from "@/components/meratalk/cta-banner"
import { OnboardingAccordion } from "@/components/meratalk/onboarding-accordion"

export const metadata: Metadata = {
  title: "VoIP Sellers | White-Label Wholesale Voice & Reseller Platform · MeraTalk",
  description:
    "Launch and grow a profitable VoIP business with MeraTalk. White-label SIP trunking, DIDs, billing, and a partner portal built for resellers, ITSPs, and channel sellers.",
  openGraph: {
    title: "VoIP Sellers | MeraTalk",
    description:
      "White-label voice, programmable APIs, and wholesale rates that let VoIP sellers and resellers launch fast, brand it as their own, and protect every margin.",
    url: "https://meratalk.com/solutions/voip-seller",
    type: "website",
  },
}

const sixIconBoxes = [
  {
    icon: <Tag className="w-6 h-6" />,
    title: "Full White-Label Branding",
    description:
      "Your logo, domain, colors, and pricing across the portal, invoices, and notifications — MeraTalk stays invisible.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Multi-Tier Reseller Hierarchy",
    description:
      "Onboard sub-resellers and downstream customers with their own rates, credit limits, and branded login experiences.",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Built-In Billing & Invoicing",
    description:
      "Per-second billing, taxes, prepaid wallets, post-paid contracts, and automated invoices delivered in your currency.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global DIDs & Origination",
    description:
      "Stock 70+ countries with local, mobile, and toll-free numbers and provision them to customers in seconds.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Fraud Protection & Limits",
    description:
      "Real-time fraud scoring, destination locks, and per-customer call caps protect your margins and your reputation.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Live Margin Analytics",
    description:
      "See profit, ASR, ACD, and call quality per customer and route in real time — and adjust pricing before margin slips.",
  },
]

const fourTrustBoxes = [
  {
    icon: <Rocket className="w-7 h-7" />,
    title: "Launch in Days",
    description: "Spin up a fully branded VoIP business in under a week — no telco infrastructure required.",
  },
  {
    icon: <Wallet className="w-7 h-7" />,
    title: "Wholesale Margins",
    description: "Volume-tiered rates and direct routes so every minute of traffic earns you more.",
  },
  {
    icon: <Settings className="w-7 h-7" />,
    title: "Programmable APIs",
    description: "REST APIs to provision trunks, numbers, and rates — automate everything you sell.",
  },
  {
    icon: <Headphones className="w-7 h-7" />,
    title: "Partner Success Team",
    description: "A dedicated channel manager and 24/7 NOC stand behind every reseller account.",
  },
]

const faqs = [
  {
    question:
      "What exactly do I get when I sign up as a VoIP reseller and how is it different from a normal SIP plan?",
    answer:
      "You get the full wholesale stack: a branded reseller portal, SIP trunks, global DIDs, programmable APIs, billing and invoicing, real-time analytics, and per-second wholesale rates. Unlike a retail SIP plan, you can onboard your own customers and sub-resellers, set your own pricing, and bill in your own currency — MeraTalk stays completely invisible to the people you sell to.",
  },
  {
    question:
      "How quickly can I go to market with a fully branded VoIP business and start selling to my first customers?",
    answer:
      "Most resellers are live within five business days. Sign-up and KYC take 24–48 hours, white-label setup of your domain, branding, and rate plans takes another day or two, and your first SIP trunk and DIDs can be provisioned the same day they're requested. You can start onboarding paying customers immediately after that.",
  },
  {
    question:
      "Do I need my own telecom infrastructure, switches, or carrier licenses to start reselling VoIP services on this platform?",
    answer:
      "No. MeraTalk handles the carrier interconnects, switches, geo-redundant core, STIR/SHAKEN attestation, and regulatory plumbing. You focus on sales, support, and pricing. If you later want to bring your own carrier or interconnect a soft-switch, we support that too — but it's never required to launch and grow.",
  },
  {
    question:
      "How does the billing system handle taxes, currencies, prepaid wallets, and post-paid invoicing for my downstream customers?",
    answer:
      "The billing engine supports per-second rating, multi-currency pricing, configurable tax rules, and both prepaid wallets and post-paid contracts. You can issue automated branded invoices, top-up reminders, and payment-failure notifications. Customers can pay via credit card, ACH, or wire, and you keep full control of pricing tiers and credit limits per account.",
  },
  {
    question:
      "What happens if a customer of mine experiences fraud, toll-bypass, or a sudden call spike on their account overnight?",
    answer:
      "Real-time fraud scoring flags abnormal patterns — Wangiri, IRSF, premium-rate abuse, or unusual destinations — and automatically applies caps you've pre-configured. You and the customer are alerted instantly, suspicious traffic is throttled or blocked, and our 24/7 NOC engages on serious events. Per-customer call limits and destination locks let you contain exposure before it becomes a bill shock.",
  },
]

export default function VoipSellerPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Section 1 — Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#f0fdfa] via-white to-[#e6f7f5]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a9e8f]/10 text-[#0a9e8f] text-sm font-semibold mb-6">
                <Users className="w-4 h-4" />
                VoIP Sellers
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0d4a4a] leading-tight mb-6 text-balance">
                Launch a Profitable{" "}
                <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">
                  White-Label VoIP
                </span>{" "}
                Business in Days
              </h1>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8 max-w-xl">
                MeraTalk gives VoIP sellers, resellers, and ITSPs a turnkey wholesale
                platform — branded portal, global DIDs, SIP trunking, billing, and
                programmable APIs — so you can focus on growing customers while we run
                the network behind you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0a9e8f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#088a7d] transition-colors group"
                >
                  Become a Reseller
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#0d4a4a] px-6 py-3 rounded-lg font-semibold border border-[#e0e0e0] hover:border-[#0a9e8f] hover:text-[#0a9e8f] transition-colors"
                >
                  See Wholesale Rates
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div
                className="relative w-full max-w-xl aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl"
                style={{ boxShadow: "0 25px 50px -12px #0a9e8f55" }}
              >
                <Image
                  src="/images/platform/outbound-dialer-hero.jpg"
                  alt="VoIP reseller managing customers and routes from a branded dashboard"
                  width={1600}
                  height={1000}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Value/Feature Split */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] leading-tight mb-6">
                Your Brand on Top, A Tier-1 Network Underneath
              </h2>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-6">
                Building a VoIP business shouldn't mean leasing switches, negotiating
                carrier contracts, or stitching together a billing system. MeraTalk gives
                you a complete reseller platform on day one — fully branded, fully
                programmable, and backed by direct routes to 200+ countries — so you can
                go to market with confidence and keep more of every minute you sell.
              </p>
              <ul className="space-y-3">
                {[
                  "Branded reseller portal with your logo and domain",
                  "Wholesale rates with multi-tier downstream pricing",
                  "Built-in billing, invoicing, and prepaid wallets",
                  "Self-serve trunk, DID, and customer provisioning",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0a9e8f] mt-0.5 shrink-0" />
                    <span className="text-[#333]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center lg:justify-end order-first lg:order-last">
              <div
                className="relative w-full max-w-xl aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl"
                style={{ boxShadow: "0 25px 50px -12px #0a9e8f55" }}
              >
                <Image
                  src="/images/platform/business-phone-feature.jpg"
                  alt="White-label VoIP reseller dashboard with customer accounts and rates"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — 6 Icon Boxes */}
      <section className="py-20 bg-[#f8fffe]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] mb-4">
              Everything a VoIP Seller Needs in One Platform
            </h2>
            <p className="text-lg text-[#5a6a7a]">
              Six core capabilities purpose-built for resellers, ITSPs, and channel
              partners who need to launch fast and scale profitably.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sixIconBoxes.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-[#e6f0ee]"
              >
                <div className="w-12 h-12 bg-[#e0f2f1] rounded-xl flex items-center justify-center text-[#0a9e8f] mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#0d4a4a] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#5a6a7a] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Workflow Accordion */}
      <OnboardingAccordion />

      {/* Section 5 — 4 Icon Boxes (Trust Signals) */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] mb-4">
              Built to Make Resellers Profitable, Fast
            </h2>
            <p className="text-lg text-[#5a6a7a]">
              The tooling, economics, and support a serious VoIP seller needs to win
              customers and keep margins healthy.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fourTrustBoxes.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl border border-[#e6f0ee] hover:shadow-md transition-shadow bg-white flex flex-col"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl flex items-center justify-center text-[#0a9e8f] bg-[#e0f2f1]">
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

      {/* Section 6 — CTA */}
      <CTABanner />

      {/* Section 7 — FAQs */}
      <section className="py-20 bg-[#f8fffe]">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#5a6a7a]">
              What VoIP sellers and resellers ask before they launch on the MeraTalk
              partner platform.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-[#e6f0ee] overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-[#0d4a4a] pr-4">
                    {faq.question}
                  </span>
                  <span className="text-[#0a9e8f] transition-transform group-open:rotate-180 shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
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
