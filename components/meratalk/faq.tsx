"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "What is MeraTalk and how does it work?",
    a: "MeraTalk is an AI-powered cloud contact center solution that unifies voice, messaging, and analytics in one platform. It enables businesses to manage all customer communications efficiently, with features like intelligent call routing, automated messaging, and real-time performance insights.",
  },
  {
    q: "Can I keep my existing phone numbers?",
    a: "Yes! MeraTalk supports number porting, allowing you to transfer your existing business phone numbers seamlessly. Our team handles the entire porting process, ensuring zero downtime during the transition.",
  },
  {
    q: "What integrations does MeraTalk support?",
    a: "MeraTalk integrates with popular CRMs like Salesforce, HubSpot, and Zoho, as well as helpdesk tools like Zendesk and Freshdesk. We also offer APIs for custom integrations with your existing business tools.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes, we offer a 14-day free trial with full access to all features. No credit card required. You can explore the platform, set up your team, and experience the AI-powered features before committing.",
  },
  {
    q: "How secure is MeraTalk?",
    a: "Security is our top priority. MeraTalk is SOC 2 Type II compliant, HIPAA-ready, and uses end-to-end encryption for all communications. We maintain 99.99% uptime with geographically distributed data centers.",
  },
  {
    q: "What kind of support do you offer?",
    a: "We provide 24/7 customer support via phone, email, and live chat. Enterprise customers also get a dedicated account manager and priority support. Our comprehensive knowledge base and video tutorials help you get the most out of the platform.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-6 bg-white">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-[#0d4a4a]">
          Frequently Asked Questions
        </h2>
        <p className="text-[16px] text-[#666] mt-3 max-w-[580px] mx-auto">
          Everything you need to know about MeraTalk and how it can help your business.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-[760px] mx-auto mt-14">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-[#e8e8e8]">
            <button
              className="w-full bg-transparent border-none cursor-pointer text-left py-5 flex justify-between items-center text-[16px] font-semibold text-[#1a1a2e] hover:text-[#0a9e8f] transition-colors"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              {faq.q}
              <ChevronDown
                className={`w-5 h-5 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
              />
            </button>
            {openIndex === i && (
              <div className="text-[15px] text-[#555] leading-[1.75] pb-5 animate-in fade-in slide-in-from-top-2 duration-300">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
