"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Navbar } from "@/components/meratalk/navbar"
import { Footer } from "@/components/meratalk/footer"
import { CTABanner } from "@/components/meratalk/cta-banner"
import { Globe, Phone, Shield, Headphones, Check, ChevronDown, ChevronUp, Star, Users, Wifi, DollarSign, MessageCircle, PhoneCall, Signal, Zap, Radio, Activity } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Connect with anyone, anywhere. Our service ensures your calls are clear and reliable across all regions."
  },
  {
    icon: Phone,
    title: "Crystal-Clear Voice Quality",
    description: "Say goodbye to dropped calls and poor connections. Our advanced routing gives you high-quality, uninterrupted voice communication."
  },
  {
    icon: DollarSign,
    title: "Flexible Pricing",
    description: "We've got pricing plans to fit every business, whether you're handling a few calls or thousands. Get the best value based on your needs."
  },
  {
    icon: Shield,
    title: "Fraud Protection",
    description: "Keep your business safe with top-level fraud prevention, so you can focus on what matters without worrying about security."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Need help? We're here for you anytime with round-the-clock support, so you never have to face downtime alone."
  }
]

const pricingPlans = [
  {
    name: "Basic Plan",
    localRate: "$0.005",
    internationalRate: "$0.01",
    description: "Perfect for businesses with moderate call volumes.",
    features: ["Local calls from $0.005/min", "International from $0.01/min", "Basic support", "Standard routing"]
  },
  {
    name: "Standard Plan",
    localRate: "$0.003",
    internationalRate: "$0.008",
    description: "Ideal for businesses with higher call volumes.",
    features: ["Local calls from $0.003/min", "International from $0.008/min", "Priority support", "Optimized routing"],
    popular: true
  },
  {
    name: "Premium Plan",
    localRate: "$0.002",
    internationalRate: "$0.006",
    description: "Designed for large enterprises with substantial traffic.",
    features: ["Local calls from $0.002/min", "International from $0.006/min", "24/7 dedicated support", "Premium routing + SLA"]
  }
]

const industries = [
  {
    icon: Headphones,
    title: "Call Centers",
    description: "Manage large volumes of calls with clear, reliable communication, ensuring efficient customer service."
  },
  {
    icon: Phone,
    title: "VoIP Providers",
    description: "Offer international calling services with top-tier voice quality at competitive rates, expanding service offerings."
  },
  {
    icon: Globe,
    title: "International Businesses",
    description: "Maintain seamless global communication with clients and partners while keeping costs low and ensuring security."
  },
  {
    icon: Users,
    title: "Telecom Resellers",
    description: "Provide wholesale voice solutions to businesses, enhancing their offerings and improving customer satisfaction."
  }
]

const testimonials = [
  {
    quote: "The call quality is impeccable, and their support team is incredibly responsive. We've seen significant savings and improved efficiency for our call center operations with Mera Talk.",
    name: "Sarah J",
    role: "Operations Manager",
    rating: 5
  },
  {
    quote: "Switching to Mera Talk was one of the best decisions we've made. The flexible pricing and seamless integration with our existing systems have made managing our voice traffic a breeze.",
    name: "James L",
    role: "CTO",
    rating: 5
  },
  {
    quote: "As a VoIP provider, we needed a reliable partner for wholesale voice services. The global coverage and fraud protection have exceeded our expectations, helping us deliver top-notch service to our clients.",
    name: "Linda M",
    role: "Founder & CEO",
    rating: 5
  },
  {
    quote: "The transition was smooth and straightforward. The competitive pricing and 24/7 support have been invaluable, allowing us to focus on growing our international business.",
    name: "Mark T.",
    role: "Head of International Sales",
    rating: 5
  }
]

const faqs = [
  {
    question: "What is Wholesale Voice, and how does it benefit my business?",
    answer: "Wholesale Voice is the bulk purchase of voice services, enabling businesses to manage large volumes of voice traffic at competitive rates. It ensures high-quality, reliable communication and scales with business growth."
  },
  {
    question: "What are the key features of Wholesale Voice services?",
    answer: "Wholesale Voice services offer global coverage, crystal-clear voice quality, flexible pricing, fraud protection, and 24/7 support, ensuring seamless and secure communication."
  },
  {
    question: "What industries can benefit from Wholesale Voice services?",
    answer: "Wholesale Voice services are ideal for Call Centers, VoIP Providers, International Businesses, and Telecom Resellers, helping streamline communication, reduce costs, and enhance customer satisfaction."
  },
  {
    question: "Why choose Mera Talk for Wholesale Voice services?",
    answer: "Mera Talk offers competitive pricing, superior call quality, and exceptional 24/7 support, making it a reliable choice for businesses seeking seamless global connectivity."
  },
  {
    question: "What level of support can I expect from Wholesale Voice services?",
    answer: "Wholesale Voice services typically offer 24/7 dedicated support with rapid response times, ensuring quick issue resolution and minimal downtime for business communication needs."
  }
]

const whyChooseUs = [
  "Reliable service with high uptime.",
  "Competitive pricing for all business sizes.",
  "24/7 expert support.",
  "Scalable solutions for business growth."
]

const connectionBenefits = [
  "Easy integration with existing systems.",
  "Clear and reliable international call routing.",
  "Scales to fit your business needs.",
  "Strong security and fraud protection."
]

// Animated Hero Image Component - Network Operations Center
function AnimatedHeroImage() {
  const [latency, setLatency] = useState(180)
  const [showNotification, setShowNotification] = useState(false)
  const [barHeights, setBarHeights] = useState([70, 80, 75, 85, 90, 88, 92, 95])
  
  useEffect(() => {
    // Simulate latency fluctuation
    const latencyInterval = setInterval(() => {
      setLatency(prev => {
        const change = Math.floor(Math.random() * 20) - 10
        return Math.max(150, Math.min(200, prev + change))
      })
    }, 2000)

    // Show notification periodically
    const notifInterval = setInterval(() => {
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
    }, 5000)

    // Animate bar heights
    const barInterval = setInterval(() => {
      setBarHeights(prev => prev.map(() => 60 + Math.floor(Math.random() * 40)))
    }, 1500)

    return () => {
      clearInterval(latencyInterval)
      clearInterval(notifInterval)
      clearInterval(barInterval)
    }
  }, [])

  return (
    <div className="relative w-full">
      {/* Main card */}
      <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0d4a4a] to-[#0a9e8f] px-6 py-5">
          <h3 className="text-white font-bold text-lg">Network Operations Center</h3>
          <p className="text-white/70 text-sm mt-1">Real-time monitoring</p>
        </div>

        {/* Notification badge */}
        <div 
          className={`absolute top-4 right-4 transition-all duration-500 ${showNotification ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
        >
          <div className="bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-700">New route optimized</span>
          </div>
        </div>

        {/* Stats cards */}
        <div className="p-6">
          <div className="grid grid-cols-3 gap-4 mb-6">
            {/* Uptime */}
            <div className="bg-gradient-to-br from-[#e6f7f5] to-[#f0fdfa] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-[#0a9e8f]">99.99%</div>
              <div className="text-sm text-[#5a6a7a] mt-1">Uptime</div>
            </div>
            {/* Latency */}
            <div className="bg-gradient-to-br from-[#f3e8ff] to-[#faf5ff] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-[#8b5cf6]">{latency}ms</div>
              <div className="text-sm text-[#5a6a7a] mt-1">Latency</div>
            </div>
            {/* Support */}
            <div className="bg-gradient-to-br from-[#ede9fe] to-[#f5f3ff] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-[#a78bfa]">24/7</div>
              <div className="text-sm text-[#5a6a7a] mt-1">Support</div>
            </div>
          </div>

          {/* Call Quality Section */}
          <div className="bg-gray-50 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-gray-800 text-lg">Call Quality</h4>
              <span className="text-green-500 font-semibold text-sm">Excellent</span>
            </div>

            {/* MOS Score indicator */}
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#0a9e8f] text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                Typical MOS score {'>'}4.2
              </div>
            </div>

            {/* Animated bar chart */}
            <div className="flex items-end gap-2 h-20">
              {barHeights.map((height, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md transition-all duration-700 ease-out"
                  style={{
                    height: `${height}%`,
                    background: `linear-gradient(to top, #0d4a4a, ${i > 5 ? '#0a9e8f' : '#3b8dd6'})`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative circle */}
      <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-full opacity-80" />
    </div>
  )
}

// Animated What Is Section Image
function AnimatedWhatIsImage() {
  return (
    <div className="relative w-full aspect-square bg-[#e8f5f3] rounded-3xl overflow-hidden">
      {/* Large decorative background circles */}
      <div className="absolute inset-0">
        {/* Large circle top-left */}
        <div 
          className="absolute w-[300px] h-[300px] border border-[#0a9e8f]/15 rounded-full"
          style={{ top: '-10%', left: '-15%' }}
        />
        {/* Large circle bottom-right */}
        <div 
          className="absolute w-[350px] h-[350px] border border-[#0a9e8f]/15 rounded-full"
          style={{ bottom: '-20%', right: '-20%' }}
        />
        {/* Medium circle center-right */}
        <div 
          className="absolute w-[200px] h-[200px] border border-[#0a9e8f]/10 rounded-full"
          style={{ top: '30%', right: '-5%' }}
        />
        {/* Small circle bottom-left */}
        <div 
          className="absolute w-[150px] h-[150px] border border-[#0a9e8f]/10 rounded-full"
          style={{ bottom: '10%', left: '-5%' }}
        />
      </div>

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Floating icon - Phone (top-left) */}
          <div 
            className="absolute animate-[float_3s_ease-in-out_infinite]" 
            style={{ top: '-70px', left: '-80px' }}
          >
            <div className="w-12 h-12 bg-white rounded-xl shadow-md border border-[#0a9e8f]/20 flex items-center justify-center">
              <Phone className="w-5 h-5 text-[#0a9e8f]" />
            </div>
          </div>

          {/* Floating icon - Headphones (top-right) */}
          <div 
            className="absolute animate-[float_3.5s_ease-in-out_infinite_0.5s]" 
            style={{ top: '-40px', right: '-90px' }}
          >
            <div className="w-10 h-10 bg-white rounded-xl shadow-md border border-[#0a9e8f]/20 flex items-center justify-center">
              <Headphones className="w-4 h-4 text-[#0a9e8f]" />
            </div>
          </div>

          {/* Floating icon - Wifi (bottom-left) */}
          <div 
            className="absolute animate-[float_2.8s_ease-in-out_infinite_0.3s]" 
            style={{ bottom: '-50px', left: '-70px' }}
          >
            <div className="w-10 h-10 bg-white rounded-xl shadow-md border border-[#0a9e8f]/20 flex items-center justify-center">
              <Wifi className="w-4 h-4 text-[#0a9e8f]" />
            </div>
          </div>

          {/* Floating icon - Globe (bottom-right) */}
          <div 
            className="absolute animate-[float_3.2s_ease-in-out_infinite_0.7s]" 
            style={{ bottom: '-30px', right: '-80px' }}
          >
            <div className="w-11 h-11 bg-white rounded-xl shadow-md border border-[#0a9e8f]/20 flex items-center justify-center">
              <Globe className="w-5 h-5 text-[#0a9e8f]" />
            </div>
          </div>

          {/* Main central icon */}
          <div className="w-28 h-28 bg-[#0d4a4a] rounded-2xl shadow-xl flex items-center justify-center">
            <Phone className="w-12 h-12 text-white" />
          </div>
        </div>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="bg-white rounded-full px-6 py-2.5 shadow-md border border-gray-100">
          <span className="text-sm font-semibold text-[#1a1a2e]">Wholesale Voice Services</span>
        </div>
      </div>

      {/* Float animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  )
}

// Animated Connection Image
function AnimatedConnectionImage() {
  const [pulseIndex, setPulseIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIndex(prev => (prev + 1) % 5)
    }, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full aspect-square bg-gradient-to-br from-[#f0fdfa] to-[#e6f7f5] rounded-3xl overflow-hidden p-8">
      {/* Network nodes */}
      <div className="relative w-full h-full">
        {/* Center hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] rounded-full shadow-xl flex items-center justify-center z-10">
          <Radio className="w-10 h-10 text-white" />
        </div>

        {/* Connection lines and nodes */}
        {[
          { x: '20%', y: '20%', icon: Phone, label: 'VoIP' },
          { x: '75%', y: '15%', icon: Globe, label: 'Global' },
          { x: '85%', y: '60%', icon: Users, label: 'Teams' },
          { x: '70%', y: '85%', icon: Headphones, label: 'Support' },
          { x: '15%', y: '75%', icon: Shield, label: 'Secure' },
        ].map((node, i) => (
          <div key={i}>
            {/* Connection line */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
              <line
                x1="50%"
                y1="50%"
                x2={node.x}
                y2={node.y}
                stroke={pulseIndex === i ? '#0a9e8f' : '#0a9e8f40'}
                strokeWidth={pulseIndex === i ? 3 : 2}
                strokeDasharray={pulseIndex === i ? '0' : '5,5'}
                className="transition-all duration-300"
              />
            </svg>
            
            {/* Node */}
            <div 
              className={`absolute transition-all duration-300 ${pulseIndex === i ? 'scale-110' : 'scale-100'}`}
              style={{ left: node.x, top: node.y, transform: 'translate(-50%, -50%)' }}
            >
              <div className={`w-14 h-14 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center gap-1 ${pulseIndex === i ? 'ring-2 ring-[#0a9e8f]' : ''}`}>
                <node.icon className={`w-6 h-6 ${pulseIndex === i ? 'text-[#0a9e8f]' : 'text-[#5a6a7a]'}`} />
                <span className="text-[8px] font-medium text-[#5a6a7a]">{node.label}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Pulse rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-2 border-[#0a9e8f]/30 animate-ping" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-[#0a9e8f]/20 animate-ping" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg">
        <div className="text-[12px] font-bold text-[#0d4a4a]">Global Network Connectivity</div>
      </div>
    </div>
  )
}

// Animated Why Choose Us Image
function AnimatedWhyChooseImage() {
  return (
    <div className="relative w-full aspect-square bg-gradient-to-br from-[#f0fdfa] to-[#e6f7f5] rounded-3xl overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#0a9e8f]/10 rounded-full animate-pulse" />
        <div className="absolute top-20 right-16 w-16 h-16 bg-[#3b8dd6]/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-20 left-16 w-24 h-24 bg-[#0d4a4a]/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-10 right-10 w-14 h-14 bg-[#0a9e8f]/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Shield with checkmark */}
          <div className="w-36 h-36 bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] rounded-3xl shadow-2xl flex items-center justify-center relative">
            <Shield className="w-20 h-20 text-white" />
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
              <Check className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -top-6 -left-10 bg-white rounded-lg px-3 py-2 shadow-lg animate-bounce" style={{ animationDuration: '2s' }}>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span className="text-[11px] font-bold text-[#1a1a2e]">99.99% Uptime</span>
            </div>
          </div>
          <div className="absolute -top-4 -right-14 bg-white rounded-lg px-3 py-2 shadow-lg animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#0a9e8f]" />
              <span className="text-[11px] font-bold text-[#1a1a2e]">24/7 Support</span>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-8 bg-white rounded-lg px-3 py-2 shadow-lg animate-bounce" style={{ animationDuration: '2.2s', animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-green-500" />
              <span className="text-[11px] font-bold text-[#1a1a2e]">Best Rates</span>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-12 bg-white rounded-lg px-3 py-2 shadow-lg animate-bounce" style={{ animationDuration: '2.8s', animationDelay: '0.9s' }}>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#3b8dd6]" />
              <span className="text-[11px] font-bold text-[#1a1a2e]">Global</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg">
        <div className="text-[13px] font-bold text-[#0d4a4a]">Why Choose Us?</div>
      </div>
    </div>
  )
}

export default function WholesaleVoicePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />
      <div className="h-[72px]" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#f0fdfa] via-white to-[#e6f7f5] py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#0a9e8f]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#3b8dd6]/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#0d4a4a] leading-[1.2] mb-6">
                Wholesale Voice Makes Global Communication Simple
              </h1>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                Effortlessly connect with clients and partners around the world. With Wholesale Voice, you get crystal-clear calls, reliable service, and cost-effective solutions tailored to your needs. Whether you&apos;re a call center, VoIP provider, or international business, our flexible service scales with your growth, ensuring seamless communication wherever you are.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-[#0a9e8f] text-white px-7 py-3.5 rounded-lg font-semibold text-[15px] hover:bg-[#0d4a4a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                Book A Demo
              </Link>
            </div>
            <div className="relative">
              <AnimatedHeroImage />
            </div>
          </div>
        </div>
      </section>

      {/* What Is Wholesale Voice */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <AnimatedWhatIsImage />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-6">
                What Is Wholesale Voice?
              </h2>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8]">
                Wholesale Voice refers to the bulk purchase of voice services from a provider, allowing businesses to resell these services to their customers or integrate them into their operations. This model enables companies to handle large volumes of voice traffic at competitive rates, ensuring high-quality and reliable communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f8fffe]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-4">
              Key Features of Our Wholesale Voice Services
            </h2>
            <p className="text-[16px] text-[#5a6a7a] max-w-[700px] mx-auto leading-[1.7]">
              Our Wholesale Voice services are built to make your business communication smoother, more secure, and affordable, no matter where you are in the world. Here&apos;s what we offer:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div 
                key={i}
                className="bg-white rounded-2xl p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#e6f7f5] hover:shadow-[0_8px_40px_rgba(10,158,143,0.12)] hover:border-[#0a9e8f]/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0a9e8f]/10 to-[#3b8dd6]/10 flex items-center justify-center mb-5 group-hover:from-[#0a9e8f] group-hover:to-[#0d4a4a] transition-all">
                  <feature.icon className="w-7 h-7 text-[#0a9e8f] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-[18px] font-bold text-[#0d4a4a] mb-3">{feature.title}:</h3>
                <p className="text-[14px] text-[#5a6a7a] leading-[1.7]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Keeps You Connected */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-6">
                How Wholesale Voice Keeps Your Business Connected Worldwide
              </h2>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                Wholesale Voice lets businesses manage large volumes of voice traffic at competitive rates, seamlessly integrating with VoIP and traditional systems. It ensures smooth, high-quality international calls, scales with your business, and offers robust fraud protection while keeping communication costs low.
              </p>
              <div className="space-y-4">
                {connectionBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#0a9e8f] flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[15px] text-[#1a1a2e] font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <AnimatedConnectionImage />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-[#f8fffe] to-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-4">
              Affordable and Flexible Pricing for Every Business
            </h2>
            <p className="text-[16px] text-[#5a6a7a] max-w-[700px] mx-auto leading-[1.7]">
              Our pricing plans are structured to offer flexibility and value, tailored to the needs of businesses of all sizes. We provide tiered pricing based on your call volume and regions, ensuring you get the most cost-effective solution for your communication needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, i) => (
              <div 
                key={i}
                className={`relative bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border-2 ${plan.popular ? 'border-[#0a9e8f] shadow-[0_8px_40px_rgba(10,158,143,0.15)]' : 'border-transparent'} hover:border-[#0a9e8f]/50 transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0a9e8f] to-[#0d4a4a] text-white text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0a9e8f]/10 to-[#3b8dd6]/10 flex items-center justify-center mb-5">
                  <DollarSign className="w-6 h-6 text-[#0a9e8f]" />
                </div>
                <h3 className="text-[20px] font-bold text-[#0d4a4a] mb-2">{plan.name}:</h3>
                <p className="text-[14px] text-[#5a6a7a] mb-4">
                  Starting at <strong className="text-[#0a9e8f]">{plan.localRate}</strong> per minute for local and <strong className="text-[#0a9e8f]">{plan.internationalRate}</strong> per minute for international calls, {plan.description.toLowerCase()}
                </p>
                <Link 
                  href="/contact"
                  className={`block text-center py-3 rounded-xl font-semibold text-[15px] transition-all ${plan.popular ? 'bg-[#0d4a4a] text-white hover:bg-[#0a9e8f]' : 'bg-[#f0fdfa] text-[#0d4a4a] hover:bg-[#0a9e8f] hover:text-white'}`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-4">
              Industries That Benefit from Wholesale Voice
            </h2>
            <p className="text-[16px] text-[#5a6a7a] max-w-[600px] mx-auto leading-[1.7]">
              Wholesale Voice services are ideal for various industries, helping streamline communication and reduce costs. Here&apos;s how different sectors benefit:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, i) => (
              <div 
                key={i}
                className="bg-gradient-to-br from-[#f0fdfa] to-white rounded-2xl p-7 border border-[#e6f7f5] hover:shadow-lg hover:border-[#0a9e8f]/30 transition-all group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5 group-hover:bg-[#0a9e8f] transition-all">
                  <industry.icon className="w-7 h-7 text-[#0a9e8f] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-[17px] font-bold text-[#0d4a4a] mb-3">{industry.title}:</h3>
                <p className="text-[14px] text-[#5a6a7a] leading-[1.7]">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-6">
                Why Choose Us?
              </h2>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                At Mera Talk, we provide a dependable and cost-effective wholesale voice solution that grows with your business. Our high uptime ensures your communication remains uninterrupted, while our competitive pricing fits businesses of all sizes. We offer 24/7 expert support to resolve issues swiftly and scalable services that adapt to your evolving needs.
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#0a9e8f] flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[15px] text-[#1a1a2e] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <AnimatedWhyChooseImage />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f8fffe]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-4">
              What Our Customers Say About Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, i) => (
              <div 
                key={i}
                className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#e6f7f5] hover:shadow-lg transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-[14px] text-[#5a6a7a] leading-[1.7] mb-6 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] flex items-center justify-center text-white font-bold text-[14px]">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-[14px] text-[#1a1a2e]">{testimonial.name}</div>
                    <div className="text-[12px] text-[#5a6a7a]">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i}
                className="bg-[#f8fffe] rounded-xl border border-[#e6f7f5] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#f0fdfa] transition-colors"
                >
                  <span className="font-semibold text-[15px] text-[#0d4a4a] pr-4">{faq.question}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-[#0a9e8f] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#0a9e8f] shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-[14px] text-[#5a6a7a] leading-[1.7]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
