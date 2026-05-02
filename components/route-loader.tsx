'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export function RouteLoader({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      {loading && (
        <div
          aria-live="polite"
          aria-busy="true"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#1a1a2e]/20 border-t-[#1a1a2e]" />
        </div>
      )}
      {children}
    </>
  )
}
