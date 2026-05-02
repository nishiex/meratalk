"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronDown, Globe, Layers, Phone, Activity,
  ShoppingCart, GraduationCap, Star, Home, Building, Users,
  Headphones, Menu, X, FileText, BookOpen, Briefcase,
  Code, MessageSquare,
  Lock, Shield, ArrowRight, Smartphone, PhoneIncoming, PhoneOutgoing,
  Megaphone, Timer, UserCheck, Landmark, Quote, UserCircle, Presentation,
  FileSpreadsheet, Box, History, CheckCircle, Scale, FileCheck, Heart, Bot, Mic,
  Brain, Sparkles, Lightbulb, MessagesSquare, VideoIcon, Send, Monitor,
  Workflow, CircleDot
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

type MenuLink = {
  icon: LucideIcon
  title: string
  desc: string
  href?: string
}

type MenuSection = {
  heading: string
  items: MenuLink[]
}

type MenuConfig = {
  sections: MenuSection[]
}

const platformMenu: MenuConfig = {
  sections: [
    {
      heading: "Core Products",
      items: [
        { icon: Layers, title: "Unified Communications", desc: "One platform, every channel", href: "/platform/unified-communications" },
        { icon: Phone, title: "Business Phone + AI Receptionist", desc: "Cloud PBX with AI answer", href: "/platform/business-phone" },
        { icon: Heart, title: "Customer Engagement", desc: "Campaigns & journeys", href: "/platform/customer-engagement" },
        { icon: Sparkles, title: "AI Assistant", desc: "Copilot for every call", href: "/platform/ai-assistant" },
        { icon: Headphones, title: "AI Contact Center Platform", desc: "Voice-first contact center", href: "/platform/ai-contact-center" },
        { icon: Globe, title: "AI Omnichannel Contact Center", desc: "Voice · Chat · Email · SMS", href: "/platform/omnichannel-contact-center" },
      ],
    },
    {
      heading: "Communication Features",
      items: [
        { icon: MessageSquare, title: "Business SMS & MMS", desc: "Text customers from your number", href: "/platform/business-sms-mms" },
        { icon: MessagesSquare, title: "Team Chat", desc: "Built-in messaging for teams", href: "/platform/team-chat" },
        { icon: VideoIcon, title: "HD Video Meetings", desc: "Crystal-clear face-to-face", href: "/platform/video-meetings" },
        { icon: Send, title: "Online Fax", desc: "Send & receive faxes digitally", href: "/platform/online-fax" },
        { icon: Monitor, title: "Website Chatbot", desc: "24/7 automated site replies", href: "/platform/website-chatbot" },
        { icon: Phone, title: "Hosted Phone System", desc: "Cloud PBX without hardware", href: "/platform/hosted-phone-system" },
        { icon: PhoneOutgoing, title: "Outbound Dialer", desc: "Power through call lists fast", href: "/platform/outbound-dialer" },
      ],
    },
    {
      heading: "AI & Features",
      items: [
        { icon: Bot, title: "AI Agent Assist", desc: "Real-time agent suggestions", href: "/platform/ai-agent-assist" },
        { icon: Lightbulb, title: "Conversation Intelligence", desc: "Insights from every call", href: "/platform/conversation-intelligence" },
        { icon: Brain, title: "Conversational Context", desc: "Memory across every channel", href: "/platform/conversational-context" },
        { icon: Mic, title: "Call Recording", desc: "Capture and review every call", href: "/platform/call-recording" },
        { icon: Workflow, title: "Auto-attendant & IVR Builder", desc: "Route callers without agents", href: "/platform/auto-attendant-ivr-builder" },
        { icon: CircleDot, title: "AI Sentiment Analysis", desc: "Detect caller emotion live", href: "/solutions/ai-sentiment-analysis" },
      ],
    },
  ],
}

const solutionsMenu: MenuConfig = {
  sections: [
    {
      heading: "By Customer Type",
      items: [
        { icon: Globe, title: "Telecom Carriers", desc: "Wholesale voice for carriers.", href: "/solutions/telecom-carriers" },
        { icon: Users, title: "VoIP Sellers", desc: "White-label solutions.", href: "/solutions/voip-seller" },
        { icon: Headphones, title: "Call Centers", desc: "High-volume voice solutions." },
        { icon: Smartphone, title: "MVNOs", desc: "Mobile virtual network ops.", href: "/solutions/mvno" },
        { icon: Building, title: "Enterprises", desc: "Enterprise-grade VoIP.", href: "/solutions/enterprises" },
        { icon: Star, title: "Startups", desc: "Scalable voice for startups.", href: "/solutions/startups" },
      ],
    },
    {
      heading: "By Industry",
      items: [
        { icon: Activity, title: "Healthcare", desc: "HIPAA-compliant voice.", href: "/solutions/healthcare" },
        { icon: Landmark, title: "Financial Services", desc: "Secure financial comms.", href: "/solutions/financial-services" },
        { icon: Briefcase, title: "BPO + Outsourcing", desc: "Outsourced call solutions.", href: "/solutions/bpo-outsourcing" },
        { icon: ShoppingCart, title: "E-commerce + Retail", desc: "Customer engagement.", href: "/solutions/ecommerce-retail" },
        { icon: Home, title: "Real Estate", desc: "Agent communication tools.", href: "/solutions/real-estate" },
        { icon: GraduationCap, title: "Education", desc: "Campus connectivity.", href: "/solutions/education" },
      ],
    },
    {
      heading: "By Use Case",
      items: [
        { icon: PhoneIncoming, title: "Inbound Voice", desc: "Receive calls efficiently.", href: "/solutions/inbound-voice" },
        { icon: PhoneOutgoing, title: "Outbound Sales", desc: "Power up sales dialers.", href: "/solutions/outbound-sales" },
        { icon: Headphones, title: "Customer Support", desc: "Faster, friendlier help.", href: "/solutions/customer-support" },
        { icon: Megaphone, title: "High-Volume Campaigns", desc: "Mass calling solutions.", href: "/solutions/high-volume-campaigns" },
        { icon: Timer, title: "Short-Duration Traffic", desc: "Optimized short calls.", href: "/solutions/short-duration-traffic" },
        { icon: UserCheck, title: "Remote Agent Teams", desc: "Work-from-anywhere voice.", href: "/solutions/remote-agent-teams" },
      ],
    },
  ],
}

const resourcesMenu: MenuConfig = {
  sections: [
    {
      heading: "Learn",
      items: [
        { icon: FileText, title: "Blog", desc: "Trends, tips, and deep-dives." },
        { icon: UserCircle, title: "Customer Stories", desc: "Real wins and outcomes." },
        { icon: BookOpen, title: "Guides", desc: "Step-by-step playbooks." },
        { icon: FileSpreadsheet, title: "Rate Sheets", desc: "Transparent pricing info." },
        { icon: Presentation, title: "Webinars", desc: "Live expert sessions." },
      ],
    },
    {
      heading: "Build",
      items: [
        { icon: Layers, title: "Docs", desc: "Setup guides & references." },
        { icon: Code, title: "API Reference", desc: "Build voice into products." },
        { icon: Box, title: "SDKs", desc: "Ready-to-use libraries." },
        { icon: History, title: "Changelog", desc: "Latest updates & fixes." },
      ],
    },
    {
      heading: "Trust",
      items: [
        { icon: CheckCircle, title: "Status Page", desc: "Real-time system status." },
        { icon: FileCheck, title: "FCC Licenses + RMD", desc: "Regulatory compliance." },
        { icon: Shield, title: "Security", desc: "Data protection & encryption." },
        { icon: Lock, title: "Privacy", desc: "Your data, protected." },
        { icon: Scale, title: "Terms", desc: "Service agreements." },
      ],
    },
  ],
}

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null)

  const closeMobile = () => {
    setMobileOpen(false)
    setMobileSubmenu(null)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.07)] z-40"
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-[72px] relative">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Meratalk home">
          <Image
            src="/images/meratalk-logo.png"
            alt="Meratalk"
            width={1114}
            height={265}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-9">
          {/* Platform */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu('platform')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="flex items-center gap-1 text-[15px] font-medium text-[#222] hover:text-[#0a9e8f] transition-colors">
              Platform
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openMenu === 'platform' ? 'rotate-180' : ''}`} />
            </button>
            {openMenu === 'platform' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <PlatformMegaMenu />
              </div>
            )}
          </div>

          {/* Solutions */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu('solutions')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="flex items-center gap-1 text-[15px] font-medium text-[#222] hover:text-[#0a9e8f] transition-colors">
              Solutions
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openMenu === 'solutions' ? 'rotate-180' : ''}`} />
            </button>
            {openMenu === 'solutions' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <MegaMenu type="solutions" />
              </div>
            )}
          </div>

          {/* Insights */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu('resources')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="flex items-center gap-1 text-[15px] font-medium text-[#222] hover:text-[#0a9e8f] transition-colors">
              Insights
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openMenu === 'resources' ? 'rotate-180' : ''}`} />
            </button>
            {openMenu === 'resources' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <MegaMenu type="resources" />
              </div>
            )}
          </div>

          {/* Pricing */}
          <Link href="#" className="text-[15px] font-medium text-[#222] hover:text-[#0a9e8f] transition-colors">
            Pricing
          </Link>

          {/* Contact */}
          <Link href="/contact" className="text-[15px] font-medium text-[#222] hover:text-[#0a9e8f] transition-colors">
            Contact
          </Link>

          {/* CTA */}
          <Link
            href="/contact"
            className="bg-[#0d4a4a] text-white px-6 py-2.5 rounded-lg font-semibold text-[15px] hover:bg-[#0a9e8f] transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => {
            setMobileOpen(!mobileOpen)
            if (mobileOpen) setMobileSubmenu(null)
          }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#eef0f3] max-h-[calc(100vh-72px)] overflow-y-auto">
          <div className="px-6 py-2">
            <MobileMenuGroup
              label="Platform"
              config={platformMenu}
              isOpen={mobileSubmenu === 'platform'}
              onToggle={() => setMobileSubmenu(mobileSubmenu === 'platform' ? null : 'platform')}
              onLinkClick={closeMobile}
            />
            <MobileMenuGroup
              label="Solutions"
              config={solutionsMenu}
              isOpen={mobileSubmenu === 'solutions'}
              onToggle={() => setMobileSubmenu(mobileSubmenu === 'solutions' ? null : 'solutions')}
              onLinkClick={closeMobile}
            />
            <MobileMenuGroup
              label="Insights"
              config={resourcesMenu}
              isOpen={mobileSubmenu === 'insights'}
              onToggle={() => setMobileSubmenu(mobileSubmenu === 'insights' ? null : 'insights')}
              onLinkClick={closeMobile}
            />
            <Link
              href="#"
              onClick={closeMobile}
              className="block py-3.5 text-[15px] font-medium text-[#222] border-b border-[#eef0f3]"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              onClick={closeMobile}
              className="block py-3.5 text-[15px] font-medium text-[#222] border-b border-[#eef0f3]"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              onClick={closeMobile}
              className="block bg-[#0d4a4a] text-white px-6 py-3 rounded-lg font-semibold text-[15px] text-center my-4"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

function MobileMenuGroup({
  label,
  config,
  isOpen,
  onToggle,
  onLinkClick,
}: {
  label: string
  config: MenuConfig
  isOpen: boolean
  onToggle: () => void
  onLinkClick: () => void
}) {
  return (
    <div className="border-b border-[#eef0f3]">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between py-3.5 text-[15px] font-medium text-[#222]"
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-4 space-y-4">
          {config.sections.map((section) => (
            <div key={section.heading}>
              <div className="text-[11px] font-bold tracking-[1.4px] uppercase text-[#0a9e8f] mb-2 mt-1">
                {section.heading}
              </div>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.title}
                      href={item.href ?? "#"}
                      onClick={onLinkClick}
                      className="flex items-start gap-3 py-2 px-2 -mx-2 rounded-lg hover:bg-[#f3fffe] active:bg-[#e6f7f5] transition-colors"
                    >
                      <div className="w-9 h-9 bg-[#e0f2f1] rounded-lg flex items-center justify-center text-[#0a9e8f] shrink-0">
                        <Icon className="w-[17px] h-[17px]" />
                      </div>
                      <div className="min-w-0 flex-1 pt-0.5">
                        <span className="block text-[13.5px] font-semibold text-[#1a1a2e] leading-tight">
                          {item.title}
                        </span>
                        <span className="block text-[11.5px] text-[#8a95a3] leading-snug mt-1">
                          {item.desc}
                        </span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function PlatformMegaMenu() {
  return (
    <div className="w-[1150px] bg-white rounded-2xl shadow-[0_16px_60px_rgba(0,0,0,0.15)] p-8 grid grid-cols-[1fr_1fr_1fr_280px] gap-0 relative before:absolute before:top-0 before:left-9 before:right-9 before:h-[3px] before:bg-gradient-to-r before:from-[#0a9e8f] before:to-[#3b8dd6] before:rounded-b">
      {platformMenu.sections.map((section, i) => (
        <div
          key={section.heading}
          className={i === 0 ? "pr-6" : "px-6 border-l border-[#eef0f3]"}
        >
          <div className="text-[11px] font-bold tracking-[1.4px] uppercase text-[#0a9e8f] mb-4 pb-2.5 border-b-2 border-[#e6f7f5]">
            {section.heading}
          </div>
          {section.items.map((item) => (
            <MegaMenuItem
              key={item.title}
              icon={<item.icon className="w-[19px] h-[19px]" />}
              title={item.title}
              desc={item.desc}
              href={item.href}
              iconBg="bg-[#e0f2f1]"
              iconColor="text-[#0a9e8f]"
            />
          ))}
        </div>
      ))}

      {/* Featured Card */}
      <div className="pl-6 border-l border-[#eef0f3]">
        <div className="bg-[#f8fffe] rounded-xl p-5 h-full flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-[#4caf50] rounded-full"></span>
            <span className="text-[11px] font-bold tracking-[1px] uppercase text-[#ff6b35]">Featured</span>
          </div>
          <h4 className="text-[20px] font-bold text-[#1a1a2e] leading-tight mb-3">
            Everything in one platform.<br />Built for the USA.
          </h4>
          <p className="text-[13px] text-[#5a6a7a] leading-relaxed mb-5">
            Calling · AI contact center · SMS · Video · 200+ integrations · 99.999% uptime
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1.5 bg-white border border-[#e0e0e0] rounded-full text-[12px] font-medium text-[#333]">
              99.999% <span className="text-[#5a6a7a] font-normal">uptime</span>
            </span>
            <span className="px-3 py-1.5 bg-white border border-[#e0e0e0] rounded-full text-[12px] font-medium text-[#333]">
              200+ <span className="text-[#5a6a7a] font-normal">integrations</span>
            </span>
            <span className="px-3 py-1.5 bg-white border border-[#e0e0e0] rounded-full text-[12px] font-medium text-[#333]">
              US <span className="text-[#5a6a7a] font-normal">built & hosted</span>
            </span>
          </div>
          <Link
            href="/contact"
            className="mt-auto inline-flex items-center justify-center gap-2 bg-[#0a9e8f] text-white px-5 py-3 rounded-lg text-[14px] font-semibold hover:bg-[#088a7d] transition-all group"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}

function MegaMenu({ type }: { type: 'products' | 'solutions' | 'resources' }) {
  if (type === 'resources') {
    return (
      <div className="w-[900px] bg-white rounded-2xl shadow-[0_16px_60px_rgba(0,0,0,0.15)] p-8 grid grid-cols-3 gap-0 relative before:absolute before:top-0 before:left-9 before:right-9 before:h-[3px] before:bg-gradient-to-r before:from-[#0a9e8f] before:to-[#3b8dd6] before:rounded-b">
        {resourcesMenu.sections.map((section) => (
          <div
            key={section.heading}
            className="px-7 first:pl-0 last:pr-0 border-l first:border-0 border-[#eef0f3]"
          >
            <div className="text-[11px] font-bold tracking-[1.4px] uppercase text-[#0a9e8f] mb-4 pb-2.5 border-b-2 border-[#e6f7f5]">
              {section.heading}
            </div>
            {section.items.map((item) => (
              <MegaMenuItem
                key={item.title}
                icon={<item.icon className="w-[19px] h-[19px]" />}
                title={item.title}
                desc={item.desc}
                href={item.href}
              />
            ))}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="w-[1100px] bg-white rounded-2xl shadow-[0_16px_60px_rgba(0,0,0,0.15)] p-8 grid grid-cols-4 gap-0 relative before:absolute before:top-0 before:left-9 before:right-9 before:h-[3px] before:bg-gradient-to-r before:from-[#0a9e8f] before:to-[#3b8dd6] before:rounded-b">
      {solutionsMenu.sections.map((section, i) => (
        <div
          key={section.heading}
          className={i === 0 ? "px-5 pl-0" : "px-5 border-l border-[#eef0f3]"}
        >
          <div className="text-[11px] font-bold tracking-[1.4px] uppercase text-[#0a9e8f] mb-4 pb-2.5 border-b-2 border-[#e6f7f5]">
            {section.heading}
          </div>
          {section.items.map((item) => (
            <MegaMenuItem
              key={item.title}
              icon={<item.icon className="w-[19px] h-[19px]" />}
              title={item.title}
              desc={item.desc}
              href={item.href}
            />
          ))}
        </div>
      ))}

      {/* Featured Customer Card */}
      <div className="px-5 border-l border-[#eef0f3]">
        <div className="bg-[#F0FDFA] rounded-xl p-5 h-full flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-[#0a9e8f]/10 flex items-center justify-center mb-4">
              <Quote className="w-5 h-5 text-[#0a9e8f]" />
            </div>
            <p className="text-[13px] text-[#1a1a2e] leading-relaxed italic mb-4">{`"We cut telecom spend by 50% after moving our call center to MeraTalk SIP trunking."`}</p>
            <p className="text-[12px] text-[#5a6a7a]">Operations Lead</p>
            <p className="text-[11px] text-[#8a95a3]">US Healthcare Provider</p>
          </div>
          <Link href="#" className="mt-4 inline-flex items-center gap-2 bg-[#0d4a4a] text-white px-4 py-2.5 rounded-lg text-[13px] font-semibold hover:bg-[#0a9e8f] transition-all group">
            Read the story
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}

function MegaMenuItem({
  icon,
  title,
  desc,
  href = "#",
  iconBg = "bg-[#e0f2f1]",
  iconColor = "text-[#0a9e8f]"
}: {
  icon: React.ReactNode
  title: string
  desc: string
  href?: string
  iconBg?: string
  iconColor?: string
}) {
  return (
    <Link href={href} className="flex items-start gap-3 p-2 rounded-lg hover:bg-[#f3fffe] transition-colors group">
      <div className={`w-[38px] h-[38px] ${iconBg} rounded-lg flex items-center justify-center ${iconColor} group-hover:scale-105 transition-transform shrink-0`}>
        {icon}
      </div>
      <div className="min-w-0">
        <strong className="block text-[13px] font-semibold text-[#1a1a2e] mb-0.5 truncate">{title}</strong>
        <span className="text-[11.5px] text-[#8a95a3] leading-[1.4] line-clamp-1">{desc}</span>
      </div>
    </Link>
  )
}
