"use client"

import { ArrowRight, Play, Star, Phone, MessageCircle, Mail, Mic, Video, Bot, Headphones, Wifi } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

interface Bubble {
  id: number
  x: number
  y: number
  baseX: number
  baseY: number
  icon: React.ReactNode
  size: number
  floatOffsetX: number
  floatOffsetY: number
  floatSpeed: number
  color: string
  borderColor: string
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  // Mouse position relative to the hero container, captured at mousemove time.
  // Using viewport coords + reading rect every frame would make bubbles dance
  // during vertical scroll (rect.top changes → fake "mouse moved").
  const relMouseRef = useRef({ x: -10000, y: -10000 })
  const animationRef = useRef<number | undefined>(undefined)
  const timeRef = useRef(0)

  useEffect(() => {
    const icons = [
      { icon: <Phone size={20} />, color: "rgba(8, 172, 242, 0.08)", borderColor: "rgba(8, 172, 242, 0.3)" },
      { icon: <MessageCircle size={20} />, color: "rgba(15, 127, 139, 0.08)", borderColor: "rgba(15, 127, 139, 0.3)" },
      { icon: <Mail size={20} />, color: "rgba(8, 172, 242, 0.08)", borderColor: "rgba(8, 172, 242, 0.3)" },
      { icon: <Mic size={20} />, color: "rgba(245, 158, 11, 0.08)", borderColor: "rgba(245, 158, 11, 0.3)" },
      { icon: <Video size={20} />, color: "rgba(15, 127, 139, 0.08)", borderColor: "rgba(15, 127, 139, 0.3)" },
      { icon: <Bot size={20} />, color: "rgba(8, 172, 242, 0.08)", borderColor: "rgba(8, 172, 242, 0.3)" },
      { icon: <Headphones size={20} />, color: "rgba(245, 158, 11, 0.08)", borderColor: "rgba(245, 158, 11, 0.3)" },
      { icon: <Wifi size={20} />, color: "rgba(15, 127, 139, 0.08)", borderColor: "rgba(15, 127, 139, 0.3)" },
    ]

    const positions = [
      { x: 8, y: 15 },
      { x: 88, y: 20 },
      { x: 5, y: 45 },
      { x: 92, y: 50 },
      { x: 10, y: 75 },
      { x: 85, y: 80 },
      { x: 3, y: 60 },
      { x: 95, y: 35 },
    ]

    const initialBubbles: Bubble[] = positions.map((pos, i) => ({
      id: i,
      x: pos.x,
      y: pos.y,
      baseX: pos.x,
      baseY: pos.y,
      icon: icons[i % icons.length].icon,
      size: 48 + Math.random() * 12,
      floatOffsetX: 0,
      floatOffsetY: 0,
      floatSpeed: 0.5 + Math.random() * 0.5,
      color: icons[i % icons.length].color,
      borderColor: icons[i % icons.length].borderColor,
    }))

    setBubbles(initialBubbles)
  }, [])

  useEffect(() => {
    const animate = () => {
      timeRef.current += 0.02
      const container = containerRef.current
      const containerWidth = container?.clientWidth ?? 0
      const containerHeight = container?.clientHeight ?? 0
      const relMouse = relMouseRef.current

      setBubbles(prev => prev.map(bubble => {
        // Floating animation
        const floatX = Math.sin(timeRef.current * bubble.floatSpeed + bubble.id) * 8
        const floatY = Math.cos(timeRef.current * bubble.floatSpeed * 0.7 + bubble.id) * 6

        // Mouse repulsion (uses stored relative coords so vertical scroll doesn't
        // trigger phantom movement)
        if (containerWidth > 0) {
          const bubbleAbsX = (bubble.baseX / 100) * containerWidth
          const bubbleAbsY = (bubble.baseY / 100) * containerHeight

          const dx = bubbleAbsX - relMouse.x
          const dy = bubbleAbsY - relMouse.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const repulsionRadius = 150

          let repelX = 0
          let repelY = 0

          if (distance < repulsionRadius && distance > 0) {
            const force = (1 - distance / repulsionRadius) * 40
            repelX = (dx / distance) * force
            repelY = (dy / distance) * force
          }

          return {
            ...bubble,
            floatOffsetX: floatX + repelX,
            floatOffsetY: floatY + repelY,
          }
        }

        return {
          ...bubble,
          floatOffsetX: floatX,
          floatOffsetY: floatY,
        }
      }))

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    relMouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
  }

  const handleMouseLeave = () => {
    relMouseRef.current = { x: -10000, y: -10000 }
  }

  return (
    <section 
      ref={containerRef}
      className="relative bg-[#f5fcff] pt-[30px] pb-[30px] overflow-hidden flex items-center min-h-[700px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[55%] h-[60%] top-[35%] left-[75%] -translate-x-1/2 -translate-y-1/2 bg-[#08acf2]/8 rounded-full blur-3xl" />
        <div className="absolute w-[45%] h-[55%] top-[75%] left-[15%] -translate-x-1/2 -translate-y-1/2 bg-[#0f7f8b]/6 rounded-full blur-3xl" />
        <div className="absolute w-[40%] h-[45%] top-[90%] left-[90%] -translate-x-1/2 -translate-y-1/2 bg-[#dbeafe]/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Bubbles */}
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="absolute z-[2] rounded-2xl flex items-center justify-center transition-transform duration-100 ease-out pointer-events-none"
          style={{
            left: `${bubble.baseX}%`,
            top: `${bubble.baseY}%`,
            width: bubble.size,
            height: bubble.size,
            backgroundColor: bubble.color,
            border: `1.5px solid ${bubble.borderColor}`,
            transform: `translate(-50%, -50%) translate(${bubble.floatOffsetX}px, ${bubble.floatOffsetY}px)`,
            backdropFilter: 'blur(8px)',
          }}
        >
          <span style={{ color: bubble.borderColor.replace('0.3', '1') }}>
            {bubble.icon}
          </span>
        </div>
      ))}

      <div className="max-w-[780px] mx-auto px-8 flex flex-col items-center text-center relative z-[5] w-full">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-br from-[#e0f7ff] to-[#e8fff4] border border-[#08acf2]/16 text-[#0f7f8b] text-[11.5px] font-bold tracking-[1.3px] uppercase px-4 py-1.5 rounded-full mb-6">
          <span className="w-[7px] h-[7px] bg-[#08acf2] rounded-full shadow-[0_0_0_3px_rgba(8,172,242,0.16)] animate-[pillPulse_2s_ease-in-out_infinite]" />
          AI-Powered Contact Center
        </div>

        {/* Title */}
        <h1 className="font-['Josefin_Sans',sans-serif] text-[clamp(2.6rem,4vw,4rem)] font-bold text-[#101218] leading-[1.1] mb-[22px] tracking-[-1px]">
          Business VoIP & Telecom Services
          <span className="block bg-gradient-to-r from-[#08acf2] to-[#0f7f8b] bg-clip-text text-transparent">
            From a Licensed US Carrier
          </span>
        </h1>

        {/* Description */}
        <p className="text-[18px] text-[#667085] leading-[1.82] max-w-[560px] mb-9 text-center">
          MeraTalk unifies voice, messaging, and AI to streamline customer interactions, empowering teams to engage smarter, faster, and at scale.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3 flex-wrap mb-9 justify-center">
          <Link
            href="/contact"
            className="bg-[#101218] text-white px-[30px] py-[13px] rounded-full font-bold text-[15px] inline-flex items-center gap-2 shadow-[0_4px_18px_rgba(16,18,24,0.22)] hover:bg-[#08acf2] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(8,172,242,0.3)] transition-all"
          >
            Start Free Trial
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="bg-transparent text-[#0f7f8b] px-7 py-[13px] rounded-full font-semibold text-[15px] border-[1.5px] border-[#08acf2]/22 inline-flex items-center gap-2 hover:bg-[#08acf2] hover:text-white hover:border-[#08acf2] hover:-translate-y-0.5 transition-all"
          >
            <Play size={14} fill="currentColor" />
            Watch Demo
          </Link>
        </div>

        {/* Social Proof */}
        <div className="flex items-center gap-3.5 justify-center">
          <div className="flex">
            {[
              { gradient: 'from-[#08acf2] to-[#0f7f8b]', initials: 'AS' },
              { gradient: 'from-[#302e2e] to-[#666]', initials: 'RK' },
              { gradient: 'from-[#0f7f8b] to-[#08acf2]', initials: 'MJ' },
              { gradient: 'from-[#f59e0b] to-[#d97706]', initials: 'PD' }
            ].map((avatar, i) => (
              <div
                key={i}
                className={`w-[34px] h-[34px] rounded-full border-[2.5px] border-white text-white text-[11px] font-bold flex items-center justify-center shadow-[0_2px_6px_rgba(0,0,0,0.12)] bg-gradient-to-br ${avatar.gradient} ${i > 0 ? '-ml-[9px]' : ''}`}
              >
                {avatar.initials}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="text-[#f59e0b] text-[13px] tracking-[1px]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} fill="currentColor" className="inline" />
              ))}
            </div>
            <span className="text-[12.5px] text-[#667085]">
              <strong className="text-[#101218]">2,500+</strong> happy customers
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pillPulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(8,172,242,0.16); }
          50% { box-shadow: 0 0 0 7px rgba(8,172,242,0.06); }
        }
      `}</style>
    </section>
  )
}
