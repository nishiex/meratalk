"use client"

const steps = [
  {
    num: 1,
    title: "Sign Up & Set Up",
    desc: "Create your account and configure your team in minutes with our intuitive onboarding wizard.",
  },
  {
    num: 2,
    title: "Connect Your Tools",
    desc: "Integrate MeraTalk with your existing CRM, ATS, or helpdesk — no coding required.",
  },
  {
    num: 3,
    title: "Launch Campaigns",
    desc: "Deploy AI-powered calling and messaging campaigns to reach prospects at scale.",
  },
  {
    num: 4,
    title: "Track & Optimize",
    desc: "Monitor live dashboards, get AI insights, and continuously improve your team's performance.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-gradient-to-br from-[#0a9e8f]/13 to-[#3b8dd6]/13 border border-[#0a9e8f]/27 text-[#0a9e8f] text-[11px] font-bold tracking-[1.5px] uppercase px-[18px] py-1.5 rounded-full mb-[18px]">
            Simple Process
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-[#0d4a4a]">
            Get Up and Running in Minutes
          </h2>
          <p className="text-[16px] text-[#666] mt-3 max-w-[580px] mx-auto leading-[1.7]">
            From signup to your first call — it&apos;s simple, fast, and powerful.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-[1]">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] text-white text-[22px] font-extrabold flex items-center justify-center mx-auto mb-5 shadow-[0_4px_20px_rgba(10,158,143,0.3)] relative">
                  {step.num}
                  {/* Pulse ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#0a9e8f]/30 animate-[stepPulse_2s_ease-in-out_infinite]" />
                </div>
                <h3 className="text-[17px] font-bold text-[#1a1a2e] mb-2.5">{step.title}</h3>
                <p className="text-[14px] text-[#666] leading-[1.7] max-w-[240px] mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes stepPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.15); opacity: 0; }
        }
      `}</style>
    </section>
  )
}
