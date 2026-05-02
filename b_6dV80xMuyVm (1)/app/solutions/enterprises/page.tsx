"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/meratalk/navbar"
import { Footer } from "@/components/meratalk/footer"
import { CTABanner } from "@/components/meratalk/cta-banner"
import {
  Building, Globe, Shield, Headphones, Check, ChevronDown, ChevronUp,
  BarChart3, Lock, Layers, Cloud, Settings, Phone,
  Award, Briefcase, ArrowRight, Activity, Network, Workflow
} from "lucide-react"

const coreCapabilities = [
  {
    icon: Globe,
    title: "Global Connectivity",
    description: "Connect offices, teams, and customers across continents with reliable, low-latency voice infrastructure built for scale."
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "End-to-end encryption, role-based access, and continuous monitoring keep sensitive enterprise communication secure."
  },
  {
    icon: Layers,
    title: "Scalable Infrastructure",
    description: "Add thousands of users or new regions in minutes without compromising call quality or system performance."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time dashboards and detailed reporting give leaders full visibility into voice usage, quality, and ROI."
  },
  {
    icon: Settings,
    title: "Seamless Integrations",
    description: "Native connectors for Salesforce, Microsoft Teams, ServiceNow, and 200+ tools keep workflows uninterrupted."
  },
  {
    icon: Headphones,
    title: "Dedicated 24/7 Support",
    description: "Named account managers and a global support team ensure mission-critical issues are resolved fast, around the clock."
  }
]

const trustPillars = [
  {
    icon: Award,
    title: "99.999% Uptime",
    description: "Carrier-grade reliability backed by SLAs your enterprise can build on."
  },
  {
    icon: Lock,
    title: "Compliance Ready",
    description: "SOC 2, HIPAA, GDPR, and PCI standards baked into every layer of the platform."
  },
  {
    icon: Network,
    title: "Global Coverage",
    description: "Direct routes in 200+ countries deliver consistent quality wherever your teams operate."
  },
  {
    icon: Briefcase,
    title: "Dedicated Account Team",
    description: "Strategic onboarding, quarterly reviews, and proactive optimization for every account."
  }
]

const platformPillars = [
  "Unified voice, video, and messaging across the enterprise.",
  "Centralized administration with granular role-based controls.",
  "AI-powered call routing, transcription, and quality scoring.",
  "Open APIs to embed communication into any enterprise workflow."
]

const faqs = [
  {
    question: "What enterprise-grade features and capabilities does MeraTalk provide to support large multinational communication operations?",
    answer: "MeraTalk delivers carrier-grade voice, unified messaging, AI-powered analytics, and centralized administration designed specifically for enterprises. You get global call routing, granular user management, custom integrations, and dedicated infrastructure that scales with your organization."
  },
  {
    question: "How does MeraTalk ensure security and regulatory compliance for enterprise customers across multiple industry verticals?",
    answer: "Our platform is built on a zero-trust architecture with end-to-end encryption, SOC 2 Type II, HIPAA, GDPR, and PCI DSS compliance. We provide audit logs, single sign-on, role-based access controls, and data residency options for regulated industries like healthcare, finance, and government."
  },
  {
    question: "Can MeraTalk integrate seamlessly with our existing CRM, ERP, and other enterprise software systems?",
    answer: "Yes. MeraTalk offers native integrations with Salesforce, Microsoft Teams, HubSpot, ServiceNow, Zendesk, SAP, and 200+ business tools. Our open REST APIs and webhooks let your teams build custom workflows without disrupting existing systems."
  },
  {
    question: "What level of customer support and service-level agreements do enterprise customers receive with MeraTalk?",
    answer: "Enterprise customers get a named technical account manager, 24/7 priority support, guaranteed 99.999% uptime SLAs, and proactive monitoring. We also provide quarterly business reviews, dedicated onboarding specialists, and emergency response within 15 minutes for critical incidents."
  },
  {
    question: "How quickly can we deploy MeraTalk's enterprise communication platform across our global offices and remote teams?",
    answer: "Most enterprise deployments go live within 4 to 6 weeks, including discovery, integration, user provisioning, and training. Our migration team handles porting, configuration, and rollout in phases so your business operations stay uninterrupted throughout the transition."
  }
]

function EnterpriseHeroImage() {
  return (
    <div className="relative w-full">
      <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(13,74,74,0.18)]">
        <Image
          src="/images/platform/ai-contact-center-hero.jpg"
          alt="Enterprise customer support specialist with headset, ready to assist"
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-cover"
          priority
        />
      </div>

      {/* Floating stat card - top right */}
      <div className="hidden sm:flex absolute -top-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl items-center gap-3 border border-gray-100">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] flex items-center justify-center">
          <Headphones className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-[11px] text-[#5a6a7a] leading-none mb-1">Live support</div>
          <div className="text-[14px] font-bold text-[#0d4a4a] leading-none">24/7 enterprise team</div>
        </div>
      </div>

      {/* Floating stat card - bottom left */}
      <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-3 shadow-xl items-center gap-3 border border-gray-100">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0a9e8f] opacity-60" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0a9e8f]" />
        </span>
        <div>
          <div className="text-[11px] text-[#5a6a7a] leading-none mb-1">Uptime SLA</div>
          <div className="text-[14px] font-bold text-[#0d4a4a] leading-none">99.999% guaranteed</div>
        </div>
      </div>

      {/* Decorative accent circles */}
      <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#3b8dd6] to-[#0a9e8f] rounded-full opacity-30 -z-10" />
      <div className="absolute -top-6 -left-6 w-14 h-14 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-full opacity-30 -z-10" />
    </div>
  )
}

function EnterpriseHubImage() {
  return (
    <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(13,74,74,0.18)]">
      <Image
        src="/images/platform/unified-communications-feature.jpg"
        alt="Enterprise team collaborating across a unified communication platform"
        fill
        sizes="(max-width: 1024px) 100vw, 600px"
        className="object-cover"
        priority={false}
      />

      {/* Soft brand overlay for visual consistency */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0d4a4a]/55 via-[#0d4a4a]/15 to-transparent" />

      {/* Floating stat card - top left */}
      <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] flex items-center justify-center">
          <Globe className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-[11px] text-[#5a6a7a] leading-none mb-1">Global reach</div>
          <div className="text-[14px] font-bold text-[#0d4a4a] leading-none">200+ countries</div>
        </div>
      </div>

      {/* Floating stat card - bottom right */}
      <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#3b8dd6] to-[#0a9e8f] flex items-center justify-center">
          <Shield className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-[11px] text-[#5a6a7a] leading-none mb-1">Compliance</div>
          <div className="text-[14px] font-bold text-[#0d4a4a] leading-none">SOC 2 · HIPAA</div>
        </div>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0">
        <div className="bg-[#0d4a4a]/90 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg">
          <span className="text-[12px] font-semibold text-white tracking-wide">Enterprise Communication Hub</span>
        </div>
      </div>
    </div>
  )
}

function AnimatedProcessVisual() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setStep(prev => (prev + 1) % 4), 1400)
    return () => clearInterval(id)
  }, [])

  const steps = [
    { icon: Workflow, label: "Discover" },
    { icon: Settings, label: "Configure" },
    { icon: Cloud, label: "Deploy" },
    { icon: Activity, label: "Optimize" }
  ]

  return (
    <div className="relative w-full aspect-square bg-gradient-to-br from-[#f0fdfa] to-[#e6f7f5] rounded-3xl overflow-hidden p-8">
      <div className="relative w-full h-full flex flex-col items-center justify-center gap-6">
        <div className="text-[12px] font-bold tracking-[1.4px] uppercase text-[#0a9e8f]">
          Enterprise Rollout Flow
        </div>

        <div className="grid grid-cols-2 gap-5 w-full max-w-[300px]">
          {steps.map((s, i) => {
            const Icon = s.icon
            const isActive = step === i
            return (
              <div
                key={i}
                className={`bg-white rounded-2xl p-5 shadow-md flex flex-col items-center gap-2 transition-all duration-500 ${
                  isActive ? "scale-105 ring-2 ring-[#0a9e8f] shadow-xl" : ""
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                    isActive
                      ? "bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a]"
                      : "bg-[#f0fdfa]"
                  }`}
                >
                  <Icon className={`w-6 h-6 ${isActive ? "text-white" : "text-[#0a9e8f]"}`} />
                </div>
                <div className="text-[13px] font-bold text-[#0d4a4a]">{s.label}</div>
                <div className="text-[10px] text-[#5a6a7a]">Step {i + 1}</div>
              </div>
            )
          })}
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-full px-5 py-2 shadow-md">
          <span className="text-xs font-semibold text-[#0d4a4a]">
            Live in 4-6 weeks
          </span>
        </div>
      </div>
    </div>
  )
}

export default function EnterprisesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />
      <div className="h-[72px]" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#f0fdfa] via-white to-[#e6f7f5] py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#0a9e8f]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#3b8dd6]/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#0a9e8f]/10 text-[#0a9e8f] text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full mb-5">
                <Building className="w-3.5 h-3.5" />
                For Enterprises
              </div>
              <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#0d4a4a] leading-[1.2] mb-6">
                Enterprise Communication, Engineered for{" "}
                <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">
                  Global Scale
                </span>
              </h1>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                Power thousands of users, dozens of offices, and millions of customer conversations on a single, secure platform. MeraTalk gives enterprise teams unified voice, AI-driven insights, and the reliability your operations depend on, with the controls IT and compliance leaders demand.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0a9e8f] text-white px-7 py-3.5 rounded-lg font-semibold text-[15px] hover:bg-[#0d4a4a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5" />
                  Book A Demo
                </Link>
                <Link
                  href="#capabilities"
                  className="inline-flex items-center gap-2 bg-white text-[#0d4a4a] border border-[#0d4a4a]/15 px-7 py-3.5 rounded-lg font-semibold text-[15px] hover:bg-[#f0fdfa] transition-all"
                >
                  See Capabilities
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <EnterpriseHeroImage />
            </div>
          </div>
        </div>
      </section>

      {/* Why Enterprises Choose MeraTalk */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <EnterpriseHubImage />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-6">
                Why Enterprises Standardize on MeraTalk
              </h2>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                Modern enterprises need more than a phone system. They need a unified communication backbone that connects every region, every team, and every customer touchpoint without compromising on quality, governance, or cost. MeraTalk consolidates fragmented tools into one trusted platform built for scale.
              </p>
              <div className="space-y-4">
                {platformPillars.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#0a9e8f] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[15px] text-[#1a1a2e] font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities (6 icon boxes) */}
      <section id="capabilities" className="py-20 bg-gradient-to-b from-white to-[#f8fffe]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-4">
              Capabilities Built for Enterprise Demands
            </h2>
            <p className="text-[16px] text-[#5a6a7a] max-w-[700px] mx-auto leading-[1.7]">
              From multinational call routing to compliance-grade security, every feature is engineered for the complexity of enterprise operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCapabilities.map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#e6f7f5] hover:shadow-[0_8px_40px_rgba(10,158,143,0.12)] hover:border-[#0a9e8f]/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0a9e8f]/10 to-[#3b8dd6]/10 flex items-center justify-center mb-5 group-hover:from-[#0a9e8f] group-hover:to-[#0d4a4a] transition-all">
                  <feature.icon className="w-7 h-7 text-[#0a9e8f] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-[18px] font-bold text-[#0d4a4a] mb-3">{feature.title}</h3>
                <p className="text-[14px] text-[#5a6a7a] leading-[1.7]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fourth Section - Process / Deployment */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-6">
                A Proven Process for Enterprise Rollout
              </h2>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                Migrating an enterprise to a new communication platform shouldn&apos;t feel risky. Our deployment team partners with your IT, security, and operations leaders to plan, configure, and roll out MeraTalk in measured phases, so quality stays high and disruption stays at zero.
              </p>
              <div className="space-y-4">
                {[
                  "Dedicated migration architect from kickoff to go-live.",
                  "Phased rollout across regions and business units.",
                  "Pre-validated integrations with your core systems.",
                  "Training, change management, and adoption tracking."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#0a9e8f] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[15px] text-[#1a1a2e] font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <AnimatedProcessVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section - 4 icon boxes (no buttons) */}
      <section className="py-20 bg-gradient-to-b from-[#f8fffe] to-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-4">
              Trusted by Enterprises Worldwide
            </h2>
            <p className="text-[16px] text-[#5a6a7a] max-w-[640px] mx-auto leading-[1.7]">
              The fundamentals that make MeraTalk a long-term partner for the most demanding organizations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-[#e6f7f5] hover:shadow-lg hover:border-[#0a9e8f]/30 transition-all text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0a9e8f]/10 to-[#3b8dd6]/10 flex items-center justify-center mb-5 mx-auto">
                  <item.icon className="w-7 h-7 text-[#0a9e8f]" />
                </div>
                <h3 className="text-[17px] font-bold text-[#0d4a4a] mb-3">{item.title}</h3>
                <p className="text-[14px] text-[#5a6a7a] leading-[1.7]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f8fffe]">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[15px] text-[#5a6a7a]">
              Answers to the questions enterprise buyers ask us most often.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-[#f8fffe] rounded-xl border border-[#e6f7f5] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#f0fdfa] transition-colors"
                >
                  <span className="font-semibold text-[15px] text-[#0d4a4a] pr-4">{faq.question}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-[#0a9e8f] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#0a9e8f] shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-[14px] text-[#5a6a7a] leading-[1.7]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
