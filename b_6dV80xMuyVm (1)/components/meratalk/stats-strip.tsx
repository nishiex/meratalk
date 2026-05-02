"use client"

const stats = [
  { value: "99.99%", label: "Uptime Guarantee" },
  { value: "5M+", label: "Calls Per Day" },
  { value: "180+", label: "Countries Covered" },
  { value: "24/7", label: "Customer Support" },
]

export function StatsStrip() {
  return (
    <section className="bg-white py-12 px-6 border-b border-[#eee]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i}>
            <h3 className="text-[2.4rem] font-extrabold text-[#0a9e8f]">{stat.value}</h3>
            <p className="text-[14px] text-[#666] mt-1.5">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
