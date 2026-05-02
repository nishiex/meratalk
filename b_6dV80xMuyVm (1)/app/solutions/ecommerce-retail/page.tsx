"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/meratalk/navbar"
import { Footer } from "@/components/meratalk/footer"
import { CTABanner } from "@/components/meratalk/cta-banner"
import {
  ShoppingCart, ShoppingBag, Phone, ArrowRight,
  Check, ChevronDown, ChevronUp,
  Bot, Truck, Tag, Gift, Sparkles,
  ShieldCheck, Zap, Globe2, Plug,
  TrendingUp
} from "lucide-react"

const coreCapabilities = [
  {
    icon: ShoppingCart,
    title: "Abandoned Cart Recovery Flows",
    description: "Trigger AI voice calls, SMS nudges, and personalized offers the moment shoppers leave items behind, recovering revenue that would otherwise vanish at checkout."
  },
  {
    icon: Bot,
    title: "Conversational Shopping Assistant",
    description: "An always-on AI agent answers product questions, checks inventory, and guides shoppers from discovery to purchase across voice, chat, SMS, and WhatsApp."
  },
  {
    icon: Truck,
    title: "Order, Returns & Tracking IVR",
    description: "Self-serve menus deflect order status and return requests from your support team, while live agents step in instantly for VIP shoppers and complex cases."
  },
  {
    icon: Tag,
    title: "Personalized Outbound Campaigns",
    description: "Launch flash sale, loyalty, and re-engagement campaigns segmented by browse history, lifetime value, and store location to lift open and conversion rates."
  },
  {
    icon: Gift,
    title: "VIP Concierge & Loyalty Lines",
    description: "Route top-tier shoppers to dedicated agents with full purchase history, preferences, and reward balance on screen so every conversation feels white-glove."
  },
  {
    icon: TrendingUp,
    title: "Unified Shopper Profile & Insights",
    description: "Every call, text, and chat is stitched to one shopper record across web, mobile, and store, giving merchandisers and CX leaders a clear conversion picture."
  }
]

const trustPillars = [
  {
    icon: ShieldCheck,
    title: "PCI DSS Secure Payments",
    description: "Take orders over the phone with encrypted DTMF capture, tokenized card data, and fully audited payment flows that keep PAN out of recordings and notes."
  },
  {
    icon: Zap,
    title: "Peak-Season Elastic Scale",
    description: "Auto-scale voice, chat, and SMS capacity through Black Friday, Cyber Monday, and holiday surges with zero queueing surprises and no infrastructure tickets."
  },
  {
    icon: Globe2,
    title: "Global Shoppers, Local Numbers",
    description: "Provision local caller IDs, SMS sender IDs, and toll-free numbers across 80+ countries so international shoppers connect to your brand without long-distance friction."
  },
  {
    icon: Plug,
    title: "Native E-Commerce Integrations",
    description: "Plug into Shopify, BigCommerce, Magento, WooCommerce, Salesforce Commerce Cloud, and Klaviyo so your storefront, CRM, and helpdesk speak one fluent language."
  }
]

const platformPillars = [
  "Unify voice, SMS, chat, and WhatsApp on one shopper-aware platform that grows from boutique to enterprise retail.",
  "Embed product, order, and inventory context inside every agent screen so reps answer in seconds, not minutes.",
  "Connect Shopify, BigCommerce, Magento, Klaviyo, and Zendesk natively to keep marketing, sales, and CX aligned.",
  "Rely on 99.999% uptime, geo-redundant infrastructure, and PCI-grade security through every retail peak season."
]

const journeySteps = [
  "Capture every shopper signal across web, mobile, and storefront with one unified customer profile.",
  "Engage proactively with personalized voice, SMS, and chat triggered by browsing, cart, and order events.",
  "Resolve faster with AI agent assist that surfaces order, refund, and product context on first contact.",
  "Measure CSAT, conversion, and revenue per conversation in real time so CX directly drives growth."
]

const faqs = [
  {
    question: "How does MeraTalk help recover abandoned carts and lift conversion across high-traffic seasonal retail campaigns?",
    answer: "MeraTalk listens to checkout, browse, and cart events from Shopify, BigCommerce, Magento, and other platforms in real time, then triggers personalized AI voice calls, SMS, and WhatsApp follow-ups within minutes. Workflows segment shoppers by cart value, loyalty tier, and product category, then test offer copy, channel, and timing. Most retail brands recover 15-30% of abandoned carts and lift peak-season revenue without expanding their support teams."
  },
  {
    question: "Can MeraTalk integrate with Shopify, Magento, BigCommerce, and other e-commerce platforms used by retail brands?",
    answer: "Yes. MeraTalk ships with native integrations for Shopify, Shopify Plus, BigCommerce, Magento, WooCommerce, Salesforce Commerce Cloud, Klaviyo, Zendesk, Gorgias, HubSpot, and Salesforce Service Cloud. Open REST APIs and webhooks pipe orders, refunds, customer profiles, and product catalog data into agent screens, IVRs, and AI bots so every interaction is informed by the latest commerce context with zero copy-paste between systems."
  },
  {
    question: "What does MeraTalk offer to handle holiday peak traffic without dropping calls or chats from impatient shoppers?",
    answer: "MeraTalk runs on geo-redundant cloud infrastructure with auto-scaling voice, SMS, and chat capacity engineered for Black Friday, Cyber Monday, and Boxing Day spikes. Predictive routing, virtual hold, callback offers, and AI deflection cut wait times dramatically. Real-time wallboards alert supervisors before SLA risks become escalations, while overflow routes traffic to outsourced partners or after-hours teams in seconds."
  },
  {
    question: "How does MeraTalk personalize outbound voice and SMS campaigns based on shopper purchase history and behavior?",
    answer: "Campaign builder uses shopper attributes such as lifetime value, last purchase date, abandoned categories, loyalty tier, and store location to segment audiences down to a single buyer. AI voice and SMS templates adapt offers, tone, and channel sequencing per segment. A/B testing, send-time optimization, and TCPA-aware pacing keep messaging compliant while lifting open, click-through, and repeat-purchase rates measurably."
  },
  {
    question: "Is MeraTalk PCI compliant and secure enough to handle payment over the phone for retail orders?",
    answer: "MeraTalk is PCI DSS Level 1 compliant and supports secure DTMF capture, payment tokenization, and IVR-based card collection so cardholder data never enters call recordings, transcripts, or agent screens. Role-based access, encryption in transit and at rest, SOC 2 Type II controls, and configurable data residency satisfy retail security, legal, and compliance reviews across the US, UK, EU, and APAC markets."
  }
]

function EcomHeroImage() {
  return (
    <div className="relative w-full">
      <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(13,74,74,0.18)]">
        <Image
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1400&q=80"
          alt="Online shopper browsing an e-commerce store on a laptop with shopping bags nearby"
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#3b8dd6] to-[#0a9e8f] rounded-full opacity-30 -z-10" />
      <div className="absolute -top-6 -left-6 w-14 h-14 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-full opacity-30 -z-10" />
    </div>
  )
}

function EcomEngagementImage() {
  return (
    <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(13,74,74,0.18)]">
      <Image
        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
        alt="Retail store associate helping a customer with a tablet at checkout"
        fill
        sizes="(max-width: 1024px) 100vw, 600px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0d4a4a]/55 via-[#0d4a4a]/15 to-transparent" />

      <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] flex items-center justify-center">
          <ShoppingBag className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-[11px] text-[#5a6a7a] leading-none mb-1">Cart recovered</div>
          <div className="text-[14px] font-bold text-[#0d4a4a] leading-none">+27% revenue lift</div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#3b8dd6] to-[#0a9e8f] flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-[11px] text-[#5a6a7a] leading-none mb-1">CSAT score</div>
          <div className="text-[14px] font-bold text-[#0d4a4a] leading-none">4.8 / 5 across stores</div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0">
        <div className="bg-[#0d4a4a]/90 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg">
          <span className="text-[12px] font-semibold text-white tracking-wide">Retail &amp; E-Commerce CX Platform</span>
        </div>
      </div>
    </div>
  )
}

function EcomFulfillmentImage() {
  return (
    <div className="relative w-full">
      <div className="relative w-full aspect-square rounded-3xl overflow-hidden border border-[#e6f7f5]">
        <Image
          src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80"
          alt="Warehouse worker scanning packages on a fulfillment line for online orders"
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-cover"
        />
      </div>
      <div className="mt-6 flex items-center gap-4">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#0a9e8f]/40 to-transparent" />
        <span className="text-[12px] font-bold tracking-[1.4px] uppercase text-[#0a9e8f] whitespace-nowrap">
          From cart to doorstep, on one platform
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#0a9e8f]/40 to-transparent" />
      </div>
    </div>
  )
}

export default function EcommerceRetailPage() {
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
                <ShoppingCart className="w-3.5 h-3.5" />
                For E-Commerce &amp; Retail
              </div>
              <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#0d4a4a] leading-[1.2] mb-6">
                Conversation Commerce Built for Modern{" "}
                <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">
                  Retail &amp; E-Commerce Brands
                </span>
              </h1>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                Recover abandoned carts, guide shoppers in real time, and turn every order question into a loyalty moment. MeraTalk unifies voice, SMS, chat, and WhatsApp on one shopper-aware platform — so retail teams convert browsers into buyers, scale through Black Friday, and deliver white-glove service across every store, app, and storefront.
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
              <EcomHeroImage />
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <EcomEngagementImage />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-6">
                Turn Every Shopper Touchpoint Into a Revenue Moment
              </h2>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                Modern retail buyers move between Instagram, marketplaces, your storefront, and physical stores in a single afternoon. Disconnected phone systems, helpdesks, and SMS tools leave gaps that cost conversions and CSAT. MeraTalk replaces that fragmented stack with one shopper-aware platform — so marketing, sales, and support work from the same live profile and every interaction is a chance to grow basket, lift NPS, and earn the next purchase.
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

      {/* Third Section - 6 icon boxes */}
      <section id="capabilities" className="py-20 bg-gradient-to-b from-white to-[#f8fffe]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-4">
              Capabilities That Drive Conversion &amp; Loyalty
            </h2>
            <p className="text-[16px] text-[#5a6a7a] max-w-[700px] mx-auto leading-[1.7]">
              From abandoned cart recovery to VIP concierge lines, every feature is engineered for retail brands that compete on speed, service, and shopper experience.
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
                <p className="text-[14px] text-[#5a6a7a] leading-[1.7] line-clamp-3">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fourth Section - Process / journey */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-6">
                A Connected Shopper Journey, From First Click to Repeat Purchase
              </h2>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                Retail success is no longer a single transaction — it is a conversation that spans every channel, every season, and every order. MeraTalk gives growth and CX leaders a clean blueprint for orchestrating that journey end to end, with the data, automation, and human touch your brand is known for.
              </p>
              <div className="space-y-4">
                {journeySteps.map((item, i) => (
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
              <EcomFulfillmentImage />
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section - 4 icon boxes (no buttons) */}
      <section className="py-20 bg-gradient-to-b from-[#f8fffe] to-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-4">
              Trusted By Fast-Growing Retail &amp; E-Commerce Brands
            </h2>
            <p className="text-[16px] text-[#5a6a7a] max-w-[640px] mx-auto leading-[1.7]">
              Security, scale, and integration depth make MeraTalk the long-term communication partner for DTC challengers and global retail leaders alike.
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
                <p className="text-[14px] text-[#5a6a7a] leading-[1.7] line-clamp-3">{item.description}</p>
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
              Answers to the questions e-commerce and retail leaders ask us most often.
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
