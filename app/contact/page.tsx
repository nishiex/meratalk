"use client"

import { useState } from "react"
import { Navbar } from "@/components/meratalk/navbar"
import { Footer } from "@/components/meratalk/footer"
import {
  Mail, Phone, MapPin, ArrowRight, CheckCircle,
  Headphones, Zap, Globe2, Send
} from "lucide-react"

const whyPoints = [
  "Expert guidance on cloud-based voice, messaging, and AI communication solutions.",
  "Scalable platforms designed for startups, enterprises, BPOs, and contact centers.",
  "Secure, reliable infrastructure with 99.999% uptime and enterprise-grade compliance.",
  "Dedicated support tailored to your industry, team size, and communication goals.",
]

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 900)
  }

  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />
      <div className="h-[72px]" />

      {/* ── Top contact section ── */}
      <section className="bg-gradient-to-br from-[#f0fdfa] via-white to-[#e6f7f5] py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* LEFT — info */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#0a9e8f]/10 text-[#0a9e8f] text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full mb-5">
                <Headphones className="w-3.5 h-3.5" />
                We&rsquo;re Here to Help
              </div>
              <h1 className="text-[clamp(2rem,4vw,2.9rem)] font-bold text-[#0d4a4a] leading-[1.2] mb-4">
                Reach Out to MeraTalk
              </h1>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-10 max-w-[480px]">
                Have questions about voice, messaging, cloud telephony, or AI-powered contact center solutions? Our team is ready to help you design, deploy, and scale smarter communication.
              </p>

              {/* Contact cards */}
              <div className="space-y-5">
                {/* Email */}
                <a
                  href="mailto:info@meratalk.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#0a9e8f]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0a9e8f] transition-colors">
                    <Mail className="w-5 h-5 text-[#0a9e8f] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold uppercase tracking-wider text-[#0a9e8f] mb-0.5">
                      Email With Us
                    </p>
                    <p className="text-[15px] font-semibold text-[#0d4a4a]">
                      info@meratalk.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+19144495889"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#0a9e8f]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0a9e8f] transition-colors">
                    <Phone className="w-5 h-5 text-[#0a9e8f] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold uppercase tracking-wider text-[#0a9e8f] mb-0.5">
                      Call Us
                    </p>
                    <p className="text-[15px] font-semibold text-[#0d4a4a]">
                      +1 914 449 5889
                    </p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0a9e8f]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#0a9e8f]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold uppercase tracking-wider text-[#0a9e8f] mb-0.5">
                      Address
                    </p>
                    <p className="text-[15px] font-semibold text-[#0d4a4a] leading-[1.6]">
                      1500 SuiteWest TechPark, Premise 204,<br />
                      Link Road, Borivali West,<br />
                      Mumbai 400092, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — form */}
            <div className="bg-white rounded-2xl border border-[#e6f7f5] shadow-[0_8px_40px_rgba(10,158,143,0.08)] p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#0a9e8f]/10 flex items-center justify-center mb-5">
                    <CheckCircle className="w-8 h-8 text-[#0a9e8f]" />
                  </div>
                  <h3 className="text-[22px] font-bold text-[#0d4a4a] mb-3">
                    Message Received!
                  </h3>
                  <p className="text-[15px] text-[#5a6a7a] leading-[1.7] max-w-[320px]">
                    Thank you for reaching out. A MeraTalk specialist will get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-semibold text-[#0d4a4a] mb-1.5">
                        First Name <span className="text-[#0a9e8f]">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        placeholder="First"
                        value={form.firstName}
                        onChange={handleChange}
                        className="w-full border border-[#d4eae8] rounded-lg px-4 py-2.5 text-[14px] text-[#0d1b2a] placeholder-[#b0bec5] hover:border-[#0a9e8f] hover:shadow-[0_0_0_3px_rgba(10,158,143,0.08)] focus:outline-none focus:border-[#0a9e8f] focus:ring-2 focus:ring-[#0a9e8f]/15 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-semibold text-[#0d4a4a] mb-1.5">
                        Last Name <span className="text-[#0a9e8f]">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        placeholder="Last"
                        value={form.lastName}
                        onChange={handleChange}
                        className="w-full border border-[#d4eae8] rounded-lg px-4 py-2.5 text-[14px] text-[#0d1b2a] placeholder-[#b0bec5] hover:border-[#0a9e8f] hover:shadow-[0_0_0_3px_rgba(10,158,143,0.08)] focus:outline-none focus:border-[#0a9e8f] focus:ring-2 focus:ring-[#0a9e8f]/15 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#0d4a4a] mb-1.5">
                      Email <span className="text-[#0a9e8f]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter Your Email Address"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border border-[#d4eae8] rounded-lg px-4 py-2.5 text-[14px] text-[#0d1b2a] placeholder-[#b0bec5] hover:border-[#0a9e8f] hover:shadow-[0_0_0_3px_rgba(10,158,143,0.08)] focus:outline-none focus:border-[#0a9e8f] focus:ring-2 focus:ring-[#0a9e8f]/15 transition-all duration-200"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#0d4a4a] mb-1.5">
                      Phone <span className="text-[#0a9e8f]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Enter Your Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full border border-[#d4eae8] rounded-lg px-4 py-2.5 text-[14px] text-[#0d1b2a] placeholder-[#b0bec5] hover:border-[#0a9e8f] hover:shadow-[0_0_0_3px_rgba(10,158,143,0.08)] focus:outline-none focus:border-[#0a9e8f] focus:ring-2 focus:ring-[#0a9e8f]/15 transition-all duration-200"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#0d4a4a] mb-1.5">
                      Description
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Your requirement or message in brief"
                      value={form.message}
                      onChange={handleChange}
                      className="w-full border border-[#d4eae8] rounded-lg px-4 py-2.5 text-[14px] text-[#0d1b2a] placeholder-[#b0bec5] hover:border-[#0a9e8f] hover:shadow-[0_0_0_3px_rgba(10,158,143,0.08)] focus:outline-none focus:border-[#0a9e8f] focus:ring-2 focus:ring-[#0a9e8f]/15 transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-[#0a9e8f] hover:bg-[#0d4a4a] text-white font-semibold text-[15px] py-3.5 rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-70"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending…
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom cards section ── */}
      <section className="bg-white py-14">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">

            {/* Left card — green */}
            <div className="bg-[#dcfce7] rounded-2xl p-8 border border-[#86efac] relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-[#16a34a] to-[#22c55e] rounded-l-2xl" />
              <div className="absolute top-4 right-4 w-36 h-36 bg-[#22c55e]/15 rounded-full blur-3xl" />

              <div className="w-11 h-11 rounded-xl bg-[#16a34a]/15 flex items-center justify-center mb-5">
                <Zap className="w-5 h-5 text-[#16a34a]" />
              </div>
              <h2 className="text-[clamp(1.4rem,2.5vw,1.9rem)] font-bold text-[#14532d] leading-[1.25] mb-4">
                Start the Conversation Today
              </h2>
              <p className="text-[14px] text-[#166534] leading-[1.8] mb-6">
                Tell us about your business needs, and our specialists will help you build a smarter, more connected communication experience — from first call to full deployment.
              </p>
              <a
                href="mailto:info@meratalk.com"
                className="inline-flex items-center gap-2 text-[#16a34a] text-[14px] font-semibold hover:text-[#14532d] transition-colors group"
              >
                info@meratalk.com
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right card — sky blue */}
            <div className="bg-[#e0f2fe] rounded-2xl p-8 border border-[#7dd3fc] relative overflow-hidden">
              <div className="absolute top-4 right-4 w-36 h-36 bg-[#38bdf8]/20 rounded-full blur-3xl" />

              <div className="w-11 h-11 rounded-xl bg-[#0284c7]/15 flex items-center justify-center mb-5">
                <Globe2 className="w-5 h-5 text-[#0284c7]" />
              </div>
              <h2 className="text-[clamp(1.4rem,2.5vw,1.9rem)] font-bold text-[#0c4a6e] leading-[1.25] mb-5">
                Why Contact MeraTalk?
              </h2>
              <ul className="space-y-3.5">
                {whyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0284c7]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" />
                    </div>
                    <span className="text-[13.5px] text-[#075985] leading-[1.7]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
