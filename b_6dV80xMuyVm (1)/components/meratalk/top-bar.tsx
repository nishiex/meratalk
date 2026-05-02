"use client"

import { useState, useEffect } from "react"
import { Phone, Mail, MapPin } from "lucide-react"

export function TopBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div 
      className={`fixed top-0 left-0 right-0 bg-[#0d1b2a] text-[#ccc] text-[13px] py-2 transition-all duration-300 z-50 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-center gap-6 flex-wrap">
        <span className="flex items-center gap-1.5">
          <Phone size={14} />
          <a href="tel:+19142415226" className="hover:text-white transition-colors">
            +1 914-241-5226
          </a>
        </span>
        <span className="flex items-center gap-1.5">
          <Mail size={14} />
          <a href="mailto:info@meratalk.com" className="hover:text-white transition-colors">
            Contact Us
          </a>
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin size={14} />
          1027/4000 Chapel View Blvd Suite 300 Cranston, RI 02920, United States
        </span>
      </div>
    </div>
  )
}

export function useTopBarVisible() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return isVisible
}
