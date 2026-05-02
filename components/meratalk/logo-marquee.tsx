"use client"

const logos = [
  { name: "CallMama", color: "#0a9e8f" },
  { name: "VoipCall", color: "#3b8dd6" },
  { name: "YeVoip", color: "#f59e0b" },
  { name: "TalkPro", color: "#7c3aed" },
  { name: "CloudVox", color: "#0d4a4a" },
  { name: "NetCall", color: "#08acf2" },
  { name: "VoxLine", color: "#ef4444" },
  { name: "SkyTalk", color: "#22c55e" },
]

export function LogoMarquee() {
  return (
    <section className="bg-white border-y border-[#f0f4f8] py-7 overflow-hidden">
      <div className="text-center text-[12px] font-bold tracking-[1.4px] uppercase text-[#94a3b8] mb-5">
        Trusted by Leading Companies Worldwide
      </div>
      <div 
        className="overflow-hidden relative"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)'
        }}
      >
        <div className="marquee-track flex items-center gap-14 w-max">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 shrink-0 hover:scale-105 transition-transform cursor-default"
            >
              <div
                className="w-[34px] h-[34px] rounded-lg flex items-center justify-center text-[15px] font-extrabold text-white"
                style={{ backgroundColor: logo.color }}
              >
                {logo.name.slice(0, 2).toUpperCase()}
              </div>
              <span className="text-[14px] font-bold text-[#1a1a2e] whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 32s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
