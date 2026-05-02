import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Globe,
  Network,
  Signal,
  Server,
  ShieldCheck,
  Gauge,
  DollarSign,
  Headphones,
  Cpu,
  Radio,
  CheckCircle,
} from "lucide-react"
import { Navbar } from "@/components/meratalk/navbar"
import { Footer } from "@/components/meratalk/footer"
import { CTABanner } from "@/components/meratalk/cta-banner"

export const metadata: Metadata = {
  title: "Telecom Carriers | Wholesale Voice & SIP Trunking · MeraTalk",
  description:
    "Carrier-grade wholesale voice, SIP trunking, and global termination for telecom operators. Tier-1 routes, real-time LCR, and a programmable platform built for scale.",
  openGraph: {
    title: "Telecom Carriers | MeraTalk",
    description:
      "Tier-1 wholesale voice, SIP trunking, and intelligent routing for telecom carriers and operators worldwide.",
    url: "https://meratalk.com/solutions/telecom-carriers",
    type: "website",
  },
}

const sixIconBoxes = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Termination",
    description:
      "Direct routes to 200+ countries with Tier-1 carriers, low PDD, and consistent ASR across every destination.",
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: "SIP Trunking at Scale",
    description:
      "Elastic SIP trunks that flex from hundreds to millions of concurrent calls without infrastructure changes.",
  },
  {
    icon: <Signal className="w-6 h-6" />,
    title: "Real-Time LCR",
    description:
      "Least-cost routing engine reprices traffic every second so margins stay healthy as rates and quality shift.",
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Geo-Redundant Core",
    description:
      "Active-active data centers across three continents deliver 99.999% platform uptime with automatic failover.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Fraud & STIR/SHAKEN",
    description:
      "On-net fraud scoring, attestation, and call signing protect your network and the brands that ride on it.",
  },
  {
    icon: <Gauge className="w-6 h-6" />,
    title: "Carrier-Grade QoS",
    description:
      "MOS, jitter, ASR, and ACD monitored per route in real time — with auto-bypass when a vendor degrades.",
  },
]

const fourTrustBoxes = [
  {
    icon: <Headphones className="w-7 h-7" />,
    title: "24/7 NOC Support",
    description: "A dedicated network operations team on call any hour, any region.",
  },
  {
    icon: <Cpu className="w-7 h-7" />,
    title: "Programmable APIs",
    description: "REST and SIP APIs to provision trunks, DIDs, and routing in minutes.",
  },
  {
    icon: <Radio className="w-7 h-7" />,
    title: "Number Portability",
    description: "Port DIDs and toll-free numbers across 70+ countries with no downtime.",
  },
  {
    icon: <DollarSign className="w-7 h-7" />,
    title: "Wholesale Pricing",
    description: "Volume-tiered rates and post-paid billing built for operator economics.",
  },
]

const faqs = [
  {
    question:
      "What kind of interconnect options do you offer for telecom carriers and how quickly can we be live on the network?",
    answer:
      "We support SIP over public internet, private MPLS, IPX, and physical cross-connects in major carrier hotels including LD4, Equinix NY4, and Singapore SG1. Most operators are passing test traffic within 48 hours and on commercial routes within a week, depending on the interconnect type and KYC turnaround.",
  },
  {
    question:
      "How does your least-cost routing engine handle quality versus price trade-offs across different international destinations and routes?",
    answer:
      "Our LCR engine evaluates every route against your own quality thresholds — ASR, ACD, PDD, and MOS — not just rate. You can set destination-specific policies that prioritize premium CLI routes for retail traffic and aggressive economics for wholesale, and the engine reprices and re-ranks vendors every second based on live performance.",
  },
  {
    question:
      "What fraud prevention and STIR/SHAKEN attestation capabilities are included to protect our network from robocalls and toll fraud?",
    answer:
      "Every call is scored in real time using behavioral signals, velocity rules, and destination risk. We provide A/B/C-level STIR/SHAKEN attestation for US traffic, signed call certificates, and automatic blocking of high-risk patterns like Wangiri, IRSF, and PBX hijacking — with full visibility through the carrier portal.",
  },
  {
    question:
      "Can we white-label the platform and resell SIP trunking and DID services to our own downstream customers and partners?",
    answer:
      "Yes. The full carrier portal can be white-labeled with your brand, domain, and pricing. You manage downstream resellers, set per-customer rates and credit limits, and bill in your own currency. We stay invisible — your customers see your brand on every invoice, every dashboard, and every support touchpoint.",
  },
  {
    question:
      "What level of network reliability, geographic redundancy, and uptime guarantees do you commit to in carrier service agreements?",
    answer:
      "Our core voice platform runs active-active across data centers in North America, Europe, and Asia-Pacific with automatic regional failover. We commit to a 99.999% platform SLA with service credits for any breach, and publish real-time status and historical uptime so partners can audit performance independently at any time.",
  },
]

export default function TelecomCarriersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Section 1 — Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#f0fdfa] via-white to-[#e6f7f5]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a9e8f]/10 text-[#0a9e8f] text-sm font-semibold mb-6">
                <Globe className="w-4 h-4" />
                Telecom Carriers
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0d4a4a] leading-tight mb-6 text-balance">
                Wholesale Voice Built for{" "}
                <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">
                  Tier-1 Carriers
                </span>{" "}
                and Global Operators
              </h1>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8 max-w-xl">
                Move voice traffic across 200+ countries on direct routes with
                carrier-grade quality, real-time least-cost routing, and a programmable
                platform that scales from your first SIP trunk to millions of concurrent
                calls.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0a9e8f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#088a7d] transition-colors group"
                >
                  Request a Test Trunk
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#0d4a4a] px-6 py-3 rounded-lg font-semibold border border-[#e0e0e0] hover:border-[#0a9e8f] hover:text-[#0a9e8f] transition-colors"
                >
                  Talk to a Carrier Rep
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div
                className="relative w-full max-w-xl aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl"
                style={{ boxShadow: "0 25px 50px -12px #0a9e8f55" }}
              >
                <Image
                  src="/images/solutions/telecom-carriers-hero.jpg"
                  alt="Business agent with headset reviewing carrier traffic on laptop and phone"
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
                One Network, Every Route, Margin You Can Actually Predict
              </h2>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-6">
                Stitching together vendors, juggling rate sheets, and chasing quality
                issues drains your team and your margins. MeraTalk gives carriers a single
                platform with direct interconnects, real-time routing decisions, and live
                quality metrics — so every minute of traffic earns more and breaks less.
              </p>
              <ul className="space-y-3">
                {[
                  "Direct Tier-1 interconnects across 200+ countries",
                  "Per-second LCR with quality and price guardrails",
                  "Live ASR, ACD, PDD, and MOS dashboards per route",
                  "Self-serve trunk, DID, and rate-deck provisioning",
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
                  alt="Carrier routing dashboard with live quality metrics"
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
              A Complete Voice Platform for Carriers
            </h2>
            <p className="text-lg text-[#5a6a7a]">
              Six core capabilities purpose-built for the economics and reliability
              demands of wholesale voice.
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
              <div
                className="relative w-full max-w-xl aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl"
                style={{ boxShadow: "0 25px 50px -12px #0a9e8f55" }}
              >
                <Image
                  src="/images/platform/omnichannel-contact-center-feature.jpg"
                  alt="Carrier interconnect and onboarding workflow"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] leading-tight mb-6">
                From Interconnect to Live Traffic in Days, Not Quarters
              </h2>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8">
                Onboarding a new wholesale partner usually takes weeks of paperwork,
                conference calls, and back-and-forth IP whitelisting. Our carrier team
                runs a structured three-step process that gets test traffic flowing fast
                and commercial volume ramping shortly after — with no surprises.
              </p>
              <div className="space-y-5">
                {[
                  {
                    num: "01",
                    title: "Interconnect",
                    text: "We exchange KYC, sign the agreement, and provision your SIP trunk or cross-connect.",
                  },
                  {
                    num: "02",
                    title: "Test & Tune",
                    text: "Pass test traffic against your destinations while we tune routes and quality policies.",
                  },
                  {
                    num: "03",
                    title: "Scale",
                    text: "Open the spigot. Real-time dashboards and your account team keep margins and quality in check.",
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
              Built for the Demands of Carrier Operations
            </h2>
            <p className="text-lg text-[#5a6a7a]">
              The infrastructure, support, and commercial flexibility serious operators
              expect from a wholesale partner.
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
              What carriers and operators ask before they connect to the MeraTalk network.
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
