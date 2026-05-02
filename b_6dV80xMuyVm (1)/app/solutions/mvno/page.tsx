import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Smartphone,
  PhoneCall,
  MessageSquare,
  Hash,
  CreditCard,
  LayoutDashboard,
  Shuffle,
  Headphones,
  Code2,
  ShieldCheck,
  Wallet,
  CheckCircle,
  Signal,
  TrendingUp,
  Wifi,
  Globe,
  Rocket,
} from "lucide-react"
import { Navbar } from "@/components/meratalk/navbar"
import { Footer } from "@/components/meratalk/footer"
import { CTABanner } from "@/components/meratalk/cta-banner"

export const metadata: Metadata = {
  title: "MVNOs | Launch & Scale a Mobile Virtual Network Operator · MeraTalk",
  description:
    "Voice, SMS, number provisioning, billing, and a white-label subscriber experience — everything an MVNO needs on one platform, ready to launch in weeks.",
  openGraph: {
    title: "MVNOs | MeraTalk",
    description:
      "Spin up and scale a Mobile Virtual Network Operator with carrier-grade voice, SMS, billing, and self-service tools from MeraTalk.",
    url: "https://meratalk.com/solutions/mvno",
    type: "website",
  },
}

const sixIconBoxes = [
  {
    icon: <PhoneCall className="w-6 h-6" />,
    title: "Carrier-Grade Voice",
    description:
      "Tier-1 voice termination with per-second LCR, low PDD, and consistent ASR so subscriber calls connect cleanly every time.",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "A2P & P2P Messaging",
    description:
      "Two-way SMS, MMS, and short-code support for activation flows, OTPs, and marketing — fully provisioned in your brand.",
  },
  {
    icon: <Hash className="w-6 h-6" />,
    title: "Number Provisioning",
    description:
      "Spin up local DIDs and toll-free numbers in 70+ countries, port subscribers in cleanly, and recycle numbers automatically.",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Rating & Billing",
    description:
      "Real-time rating, prepaid wallets, postpaid invoicing, plan packages, and add-ons — built specifically for MVNO economics.",
  },
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "Self-Service Portal",
    description:
      "White-label subscriber and admin dashboards for plan changes, top-ups, usage tracking, and SIM management without tickets.",
  },
  {
    icon: <Shuffle className="w-6 h-6" />,
    title: "Multi-Network Failover",
    description:
      "Mix host MNOs and route subscribers to the strongest signal automatically, keeping coverage and quality high everywhere.",
  },
]

const fourTrustBoxes = [
  {
    icon: <Headphones className="w-7 h-7" />,
    title: "24/7 NOC Support",
    description: "Dedicated MVNO operations team monitoring traffic, billing, and signaling round the clock.",
  },
  {
    icon: <Code2 className="w-7 h-7" />,
    title: "Open APIs",
    description: "REST and webhook APIs for SIMs, plans, top-ups, and usage events — easy to plug into your stack.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Regulatory Ready",
    description: "STIR/SHAKEN, GDPR, lawful intercept, and country-by-country compliance handled for you.",
  },
  {
    icon: <Wallet className="w-7 h-7" />,
    title: "Flexible Commercials",
    description: "Volume-tiered wholesale rates, revenue share, and prepaid or postpaid billing built for MVNO margin.",
  },
]

const faqs = [
  {
    question:
      "What does it actually take to launch a new MVNO brand on the MeraTalk platform from scratch?",
    answer:
      "Most MVNOs go from kickoff to commercial launch in eight to twelve weeks. We handle host MNO contracts and integration, BSS/OSS configuration, white-label portal setup, and SIM provisioning. Your team focuses on brand, plans, pricing, and customer acquisition — we run the technical backbone end to end and stay on point through ramp-up.",
  },
  {
    question:
      "How does MeraTalk handle multi-network failover so my subscribers stay connected when the host MNO has issues?",
    answer:
      "Subscribers can be steered between multiple host MNOs based on real-time signal quality, congestion, and outage signals. Voice and SMS automatically retry across alternate carriers within seconds, and our network policy engine lets you set rules per region or plan tier so premium subscribers always land on the best-performing network available.",
  },
  {
    question:
      "Can we white-label the entire subscriber experience including the SIM activation flow, customer portal, and billing statements?",
    answer:
      "Yes. Your brand sits on the SIM card, the activation app or web flow, the self-service portal, and every invoice or top-up receipt. You control colors, copy, domains, and email templates. We stay invisible — neither your subscribers nor your support agents ever see the MeraTalk name unless you choose to surface it.",
  },
  {
    question:
      "What kind of regulatory and compliance support do you provide for MVNOs operating across multiple countries and regions?",
    answer:
      "We maintain country-specific compliance — STIR/SHAKEN attestation, lawful intercept, emergency calling routing, GDPR data residency, and KYC workflows for SIM activation. Our regulatory team tracks changes per market and updates the platform proactively, so you don't lose nights to scrambling whenever a regulator shifts the rules underneath you.",
  },
  {
    question:
      "How is pricing structured for MVNOs and can we move from prepaid models to postpaid as we scale?",
    answer:
      "Pricing is volume-tiered with monthly minimums that drop as your subscriber base grows. You can run prepaid wallets, postpaid invoicing, hybrid models, or revenue-share arrangements simultaneously across different plan tiers. There's no platform re-architecture when you launch new commercial models — switch a flag, ship the change, and start billing the new way.",
  },
]

export default function MvnoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Section 1 — Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#f0fdfa] via-white to-[#e6f7f5]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a9e8f]/10 text-[#0a9e8f] text-sm font-semibold mb-6">
                <Smartphone className="w-4 h-4" />
                MVNOs
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0d4a4a] leading-tight mb-6 text-balance">
                Launch and Scale Your{" "}
                <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">
                  MVNO
                </span>{" "}
                Without the Infrastructure Drag
              </h1>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8 max-w-xl">
                Voice, SMS, number provisioning, billing, and a fully white-label
                subscriber experience — every component a Mobile Virtual Network Operator
                needs, on one platform that ships in weeks, not quarters.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0a9e8f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#088a7d] transition-colors group"
                >
                  Plan Your Launch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#0d4a4a] px-6 py-3 rounded-lg font-semibold border border-[#e0e0e0] hover:border-[#0a9e8f] hover:text-[#0a9e8f] transition-colors"
                >
                  Talk to an MVNO Expert
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <SubscriberDashboardIllustration />
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
                One Stack for Voice, SMS, Data, and Subscriber Experience
              </h2>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-6">
                Most MVNO launches stall at integration — billing one place, voice another,
                provisioning a third, customer care everywhere. MeraTalk replaces that
                patchwork with a single platform: voice, SMS, number management, rating,
                billing, and self-service all wired together and ready to white-label.
              </p>
              <ul className="space-y-3">
                {[
                  "Voice and SMS termination on Tier-1 routes globally",
                  "Real-time rating across prepaid, postpaid, and hybrid plans",
                  "Self-service subscriber and admin portals out of the box",
                  "Open APIs for activation, top-ups, plans, and usage events",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0a9e8f] mt-0.5 shrink-0" />
                    <span className="text-[#333]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center lg:justify-end order-first lg:order-last">
              <UnifiedStackIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — 6 Icon Boxes */}
      <section className="py-20 bg-[#f8fffe]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] mb-4">
              Everything an MVNO Needs to Run a Modern Network
            </h2>
            <p className="text-lg text-[#5a6a7a]">
              Six core capabilities purpose-built for the cost structure, agility, and
              subscriber expectations of a virtual operator.
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

      {/* Section 4 — Workflow / Alternating Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <LaunchJourneyIllustration />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] leading-tight mb-6">
                From Brand Kickoff to First Activated SIM in Weeks
              </h2>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8">
                Standing up an MVNO usually means months of host carrier negotiation,
                BSS/OSS integration, and SIM logistics before a single subscriber gets
                online. Our launch program runs four parallel tracks so the first SIM
                activates in a fraction of the time most operators expect — and your team
                stays focused on brand, plans, and acquisition.
              </p>
              <div className="space-y-5">
                {[
                  {
                    num: "01",
                    title: "Plan",
                    text: "We map your target markets, host MNOs, plan structure, and regulatory needs into a clear launch blueprint.",
                  },
                  {
                    num: "02",
                    title: "Integrate",
                    text: "Connect host carriers, configure rating and billing, white-label portals, and provision your first SIM ranges.",
                  },
                  {
                    num: "03",
                    title: "Pilot",
                    text: "Run a controlled pilot with internal subscribers — validate voice, SMS, billing, and self-service end to end.",
                  },
                  {
                    num: "04",
                    title: "Launch & Scale",
                    text: "Open commercial sales, monitor activations live, and lean on the NOC and account team as volume ramps.",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#0a9e8f] text-white font-bold flex items-center justify-center shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0d4a4a] mb-1">
                        {step.title}
                      </h3>
                      <p className="text-[#5a6a7a] leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — 4 Icon Boxes (Trust Signals) */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] mb-4">
              Built for the Realities of MVNO Operations
            </h2>
            <p className="text-lg text-[#5a6a7a]">
              The infrastructure, support, and commercial flexibility virtual operators
              need to compete with incumbents from day one.
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
              What founders and operators ask before launching a new MVNO with MeraTalk.
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

function SubscriberDashboardIllustration() {
  const bars = [55, 72, 64, 88, 78, 95, 84, 100]
  return (
    <div className="relative w-full max-w-xl aspect-[16/10]">
      {/* Soft glow background */}
      <div
        aria-hidden
        className="absolute -inset-6 bg-gradient-to-br from-[#0a9e8f]/15 via-[#3b8dd6]/10 to-transparent rounded-[2rem] blur-2xl"
      />

      {/* Card */}
      <div
        className="relative w-full h-full rounded-2xl overflow-hidden bg-white border border-[#e6f0ee]"
        style={{ boxShadow: "0 25px 50px -12px #0a9e8f55" }}
      >
        {/* Header band */}
        <div className="bg-gradient-to-r from-[#0d4a4a] to-[#0a9e8f] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white/15 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">Subscriber HQ</div>
              <div className="text-white/70 text-[11px]">Live network view</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-white/15 rounded-full px-3 py-1 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#90EE90] animate-pulse" />
            <span className="text-white text-[11px] font-medium">Online</span>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 space-y-4">
          {/* Stat row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Subscribers", value: "84.2k", tone: "from-[#e0f2f1] to-[#f0fdfa]", color: "text-[#0a9e8f]" },
              { label: "ARPU", value: "$18.40", tone: "from-[#e6f0ff] to-[#f5f9ff]", color: "text-[#3b8dd6]" },
              { label: "Uptime", value: "99.99%", tone: "from-[#f0fdfa] to-[#e6f7f5]", color: "text-[#0d4a4a]" },
            ].map((s) => (
              <div
                key={s.label}
                className={`bg-gradient-to-br ${s.tone} rounded-xl p-3 text-center`}
              >
                <div className={`text-base sm:text-lg font-bold ${s.color}`}>{s.value}</div>
                <div className="text-[10px] sm:text-[11px] text-[#5a6a7a] mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Activation chart */}
          <div className="bg-[#f8fffe] rounded-xl p-4 border border-[#e6f0ee]">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-[#0a9e8f]" />
                <span className="text-xs font-semibold text-[#0d4a4a]">SIM Activations / hr</span>
              </div>
              <span className="text-[10px] font-medium text-[#0a9e8f] bg-[#e0f2f1] rounded-full px-2 py-0.5">
                +12.4%
              </span>
            </div>
            <div className="flex items-end gap-1.5 h-14 sm:h-16">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{
                    height: `${h}%`,
                    background:
                      i === bars.length - 1
                        ? "linear-gradient(to top, #0d4a4a, #0a9e8f)"
                        : "linear-gradient(to top, #0a9e8f55, #0a9e8fcc)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating signal badge */}
      <div className="absolute -top-3 right-4 sm:right-6 bg-white rounded-full px-3 py-1.5 shadow-lg border border-[#e6f0ee] flex items-center gap-1.5">
        <Signal className="w-3.5 h-3.5 text-[#0a9e8f]" />
        <span className="text-[11px] font-semibold text-[#0d4a4a]">5G · MNO A</span>
      </div>
    </div>
  )
}

function UnifiedStackIllustration() {
  const pillars = [
    { icon: <PhoneCall className="w-5 h-5" />, label: "Voice", tag: "Tier-1 routes" },
    { icon: <MessageSquare className="w-5 h-5" />, label: "SMS", tag: "A2P · P2P" },
    { icon: <CreditCard className="w-5 h-5" />, label: "Billing", tag: "Real-time rating" },
  ]
  return (
    <div className="relative w-full max-w-xl aspect-[16/10]">
      <div
        aria-hidden
        className="absolute -inset-6 bg-gradient-to-tr from-[#3b8dd6]/10 via-[#0a9e8f]/15 to-transparent rounded-[2rem] blur-2xl"
      />

      <div
        className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#f0fdfa] via-white to-[#e6f7f5] border border-[#e6f0ee] p-5 sm:p-6"
        style={{ boxShadow: "0 25px 50px -12px #0a9e8f55" }}
      >
        {/* Decorative rings */}
        <div aria-hidden className="absolute -top-16 -right-16 w-56 h-56 rounded-full border border-[#0a9e8f]/15" />
        <div aria-hidden className="absolute -bottom-20 -left-12 w-52 h-52 rounded-full border border-[#0a9e8f]/10" />

        {/* Center hub */}
        <div className="relative h-full flex flex-col items-center justify-center gap-5">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-[#0a9e8f]/20 blur-xl" />
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] flex items-center justify-center shadow-xl">
              <Wifi className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 bg-white rounded-full px-2 py-0.5 text-[10px] font-bold text-[#0a9e8f] shadow-md border border-[#e6f0ee]">
              MVNO Core
            </div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-md">
            {pillars.map((p) => (
              <div
                key={p.label}
                className="bg-white rounded-xl p-3 sm:p-4 border border-[#e6f0ee] shadow-sm flex flex-col items-center text-center gap-1.5"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#e0f2f1] text-[#0a9e8f] flex items-center justify-center">
                  {p.icon}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#0d4a4a]">{p.label}</div>
                <div className="text-[10px] text-[#5a6a7a] leading-tight">{p.tag}</div>
              </div>
            ))}
          </div>

          {/* Subscriber chips */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {["Prepaid", "Postpaid", "Hybrid", "Roaming"].map((c) => (
              <span
                key={c}
                className="text-[10px] sm:text-[11px] font-medium text-[#0d4a4a] bg-white border border-[#e6f0ee] rounded-full px-2.5 py-1 shadow-sm"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function LaunchJourneyIllustration() {
  const steps = [
    { num: "01", label: "Plan" },
    { num: "02", label: "Integrate" },
    { num: "03", label: "Pilot" },
    { num: "04", label: "Launch" },
  ]
  return (
    <div className="relative w-full max-w-xl aspect-[16/10]">
      <div
        aria-hidden
        className="absolute -inset-6 bg-gradient-to-bl from-[#0a9e8f]/15 via-[#3b8dd6]/10 to-transparent rounded-[2rem] blur-2xl"
      />

      <div
        className="relative w-full h-full rounded-2xl overflow-hidden bg-white border border-[#e6f0ee] p-5 sm:p-7 flex flex-col"
        style={{ boxShadow: "0 25px 50px -12px #0a9e8f55" }}
      >
        {/* Top row */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] flex items-center justify-center">
              <Rocket className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#0d4a4a]">Launch Path</div>
              <div className="text-[11px] text-[#5a6a7a]">From kickoff to first SIM</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-[#f0fdfa] rounded-full px-3 py-1 border border-[#e0f2f1]">
            <Globe className="w-3.5 h-3.5 text-[#0a9e8f]" />
            <span className="text-[11px] font-medium text-[#0d4a4a]">~10 weeks</span>
          </div>
        </div>

        {/* Track */}
        <div className="relative flex-1 flex items-center">
          {/* Background track */}
          <div className="absolute left-5 right-5 top-1/2 h-1 -translate-y-1/2 bg-[#e6f0ee] rounded-full" />
          {/* Filled track */}
          <div
            className="absolute left-5 top-1/2 h-1 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#0a9e8f] to-[#3b8dd6]"
            style={{ width: "60%" }}
          />
          {/* Steps */}
          <div className="relative w-full flex items-center justify-between px-1">
            {steps.map((s, i) => {
              const active = i <= 2
              return (
                <div key={s.num} className="flex flex-col items-center gap-2">
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[11px] sm:text-xs font-bold shadow-md ${
                      active
                        ? "bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] text-white"
                        : "bg-white border-2 border-[#e6f0ee] text-[#5a6a7a]"
                    }`}
                  >
                    {s.num}
                  </div>
                  <div
                    className={`text-[11px] sm:text-xs font-semibold ${
                      active ? "text-[#0d4a4a]" : "text-[#5a6a7a]"
                    }`}
                  >
                    {s.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom milestone card */}
        <div className="mt-4 sm:mt-6 bg-[#f8fffe] rounded-xl border border-[#e6f0ee] p-3 sm:p-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#e0f2f1] text-[#0a9e8f] flex items-center justify-center shrink-0">
            <CheckCircle className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="text-xs sm:text-sm font-semibold text-[#0d4a4a] truncate">
              First SIM activated · pilot cohort live
            </div>
            <div className="text-[11px] text-[#5a6a7a] truncate">
              Voice · SMS · Billing validated end-to-end
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
