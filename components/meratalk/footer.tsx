"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react"

const linkColumns = [
  {
    title: "Voice Services",
    links: [
      { label: "Voice Termination", href: "#" },
      { label: "SIP Trunking", href: "#" },
      { label: "Voice Wholesale", href: "#" },
      { label: "Wholesale Voice", href: "/products/voice/wholesale-voice" },
    ],
  },
  {
    title: "Phone Number",
    links: [
      { label: "Virtual Phone Number", href: "#" },
      { label: "Toll-Free Forwarding", href: "#" },
      { label: "Vanity Phone Number", href: "#" },
      { label: "Local Phone Number", href: "#" },
    ],
  },
  {
    title: "Contact Center",
    links: [
      { label: "Call Forwarding", href: "#" },
      { label: "Video Conferencing", href: "#" },
      { label: "Voice Mail", href: "#" },
    ],
  },
  {
    title: "Messaging",
    links: [
      { label: "Bulk SMS", href: "#" },
      { label: "SMS API", href: "#" },
      { label: "Omnichannel", href: "#" },
    ],
  },
  {
    title: "Solution",
    links: [
      { label: "SIP Trunking Provider", href: "#" },
      { label: "BPO Call Centers", href: "#" },
      { label: "Financial Service", href: "#" },
      { label: "Sales Marketing", href: "#" },
    ],
  },
  {
    title: "Insights",
    links: [
      { label: "About us", href: "#" },
      { label: "Contact us", href: "/contact" },
      { label: "Blog", href: "#" },
      { label: "USA area codes", href: "#" },
      { label: "Country code", href: "#" },
    ],
  },
  {
    title: "Voice Termination",
    links: [
      { label: "Voice Termination Solutions", href: "#" },
      { label: "Voip Termination Rates", href: "#" },
      { label: "NPA NXX Termination", href: "#" },
    ],
  },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "X" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-[#0b1424] text-[#cdd5e0]">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Brand Block */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <Image
                src="/images/meratalk-logo-white.png"
                alt="Meratalk"
                width={1610}
                height={558}
                className="h-10 w-auto"
              />
            </div>

            <div className="space-y-2 mb-5 text-[14px]">
              <a href="mailto:info@meratalk.com" className="flex items-center gap-2 text-[#cdd5e0] hover:text-[#2dd4bf] transition-colors">
                <Mail size={14} />
                <span>info@meratalk.com</span>
              </a>
              <a href="tel:+19144495889" className="flex items-center gap-2 text-[#cdd5e0] hover:text-[#2dd4bf] transition-colors">
                <Phone size={14} />
                <span>+1 914 449 5889</span>
              </a>
            </div>

            <p className="text-[13px] leading-[1.8] text-[#9aa6b8] mb-8">
              Meratalk is a trusted unified communications provider offering seamless VoIP, messaging, and collaboration solutions worldwide, specializing in premium wholesale voice termination with competitive rates and global connectivity.
            </p>

            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-md border border-[#2a3344] flex items-center justify-center text-[#9aa6b8] hover:text-[#2dd4bf] hover:border-[#2dd4bf] transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {linkColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-[15px] font-bold text-white mb-5">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#2dd4bf] flex-shrink-0" />
                      <Link
                        href={link.href}
                        className="text-[14px] text-[#cdd5e0] hover:text-[#2dd4bf] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-[#1c2536]">
        <div className="max-w-[1400px] mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-[13px]">
          <div className="text-[#cdd5e0] font-semibold">
            Copyright © 2026 Meratalk All Rights Reserved
          </div>
          <div className="flex items-center gap-4">
            <Link href="/legal/privacy" className="text-[#cdd5e0] hover:text-[#2dd4bf] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#2a3344]">|</span>
            <Link href="/legal/terms" className="text-[#cdd5e0] hover:text-[#2dd4bf] transition-colors">
              Terms and Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
