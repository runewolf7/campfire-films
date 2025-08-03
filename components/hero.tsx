"use client"

import { useEffect, useState } from "react"
import { Flame } from "lucide-react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay">
        <div className="w-full h-full bg-gradient-to-br from-transparent via-orange-500/10 to-transparent animate-pulse" />
      </div>

      {/* VHS scanlines effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-white/[0.02] to-transparent bg-[length:100%_4px] animate-pulse" />
      </div>

      {/* Radial glow background behind CAMPFIRE - repositioned and enhanced */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <div
          className="w-[800px] h-[600px] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(ellipse, rgba(251, 146, 60, 0.4) 0%, rgba(239, 68, 68, 0.3) 40%, rgba(251, 146, 60, 0.2) 70%, transparent 100%)",
            filter: "blur(60px)",
            animation: "subtle-glow 4s ease-in-out infinite alternate",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Company name with retro styling and fire glow */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-wider mb-4 relative font-heading">
            <span
              className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent relative campfire-pulse"
              style={{
                filter:
                  "drop-shadow(0 0 30px rgba(251, 146, 60, 0.5)) drop-shadow(0 0 60px rgba(239, 68, 68, 0.3)) drop-shadow(0 0 90px rgba(251, 146, 60, 0.2))",
              }}
            >
              CAMPFIRE
            </span>
            <br />
            <span className="text-white/90 text-5xl md:text-7xl lg:text-8xl">FILMS</span>
          </h1>

          {/* Campfire icon - removed pulse */}
          <div className="flex justify-center mb-6">
            <Flame
              className="w-12 h-12 text-orange-400"
              style={{
                filter: "drop-shadow(0 0 10px rgba(251, 146, 60, 0.6)) drop-shadow(0 0 20px rgba(239, 68, 68, 0.4))",
              }}
            />
          </div>

          {/* Retro underline */}
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-8" />
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light tracking-wide mb-12 leading-relaxed">
          All Great Stories Begin with a Spark.
        </p>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          We create bold & impactful films that spark conversation, ignite emotion, and fuel our imaginations.
        </p>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black -z-10" />
    </section>
  )
}
