"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const steps = [
  {
    num: "01",
    title: "Apply & Verify",
    text: "Submit your reseller application and complete KYC — usually approved in 24–48 hours.",
    image: "/images/platform/business-phone-feature.jpg",
    alt: "Reseller application and KYC verification",
  },
  {
    num: "02",
    title: "Brand & Configure",
    text: "Set your domain, logo, currency, rate plans, and downstream tiers in the partner console.",
    image: "/images/platform/website-chatbot-feature.jpg",
    alt: "Branding and partner console configuration",
  },
  {
    num: "03",
    title: "Provision & Test",
    text: "Spin up your first SIP trunk, DIDs, and test customer in minutes via portal or API.",
    image: "/images/platform/hosted-phone-feature.jpg",
    alt: "SIP trunk and DID provisioning",
  },
  {
    num: "04",
    title: "Launch & Scale",
    text: "Open the doors, onboard customers, and watch live margin and quality dashboards as you grow.",
    image: "/images/platform/ai-contact-center-feature.jpg",
    alt: "Live margin and quality dashboards",
  },
]

export function OnboardingAccordion() {
  const [openIndex, setOpenIndex] = useState(0)
  const activeStep = steps[openIndex]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <div
              className="relative w-full max-w-xl aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl"
              style={{ boxShadow: "0 25px 50px -12px #0a9e8f55" }}
            >
              <Image
                key={activeStep.image}
                src={activeStep.image}
                alt={activeStep.alt}
                width={800}
                height={500}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] leading-tight mb-6">
              Your Four-Step Path to a Live Reseller Business
            </h2>
            <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8">
              Skip the carrier paperwork, billing-tool stitching, and switch-room
              headaches. Click each step below to see exactly what happens — and the
              tooling you get — from sign-up to your first paying customer.
            </p>
            <div className="space-y-3">
              {steps.map((step, index) => {
                const isOpen = openIndex === index
                return (
                  <div
                    key={step.num}
                    className={`rounded-xl border transition-colors ${
                      isOpen ? "border-[#0a9e8f] bg-[#f8fffe]" : "border-[#e6f0ee] bg-white"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(index)}
                      className="w-full flex items-center gap-4 p-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <div
                        className={`w-12 h-12 rounded-full font-bold flex items-center justify-center shrink-0 transition-colors ${
                          isOpen ? "bg-[#0a9e8f] text-white" : "bg-[#e0f2f1] text-[#0a9e8f]"
                        }`}
                      >
                        {step.num}
                      </div>
                      <h3 className="flex-1 font-semibold text-[#0d4a4a]">{step.title}</h3>
                      <ChevronDown
                        className={`w-5 h-5 text-[#0a9e8f] transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-4 pb-4 pl-20 text-[#5a6a7a] leading-relaxed">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
