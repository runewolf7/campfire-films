"use client"

import type React from "react"

import { useState, useEffect } from "react"

export function EmailSignup() {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [clientIP, setClientIP] = useState<string | null>(null)
  const [referrer, setReferrer] = useState<string | null>(null)
  const [userAgent, setUserAgent] = useState<string | null>(null)

  // Fetch client IP, referrer, and user agent on component mount
  useEffect(() => {
    // Get referrer and user agent immediately (synchronous)
    const currentReferrer = document.referrer || null
    const currentUserAgent = navigator.userAgent || null
    setReferrer(currentReferrer)
    setUserAgent(currentUserAgent)

    // Fetch client IP asynchronously (non-blocking)
    const fetchClientIP = async () => {
      try {
        // Using ipify service (free, no API key required)
        const response = await fetch('https://api.ipify.org?format=json')
        const data = await response.json()
        setClientIP(data.ip)
      } catch (error) {
        console.log('Could not fetch client IP:', error)
        // Not critical - we can still proceed without it
        setClientIP(null)
      }
    }

    // Fire and forget - don't block anything
    fetchClientIP()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: firstName.trim(),
          email: email.trim(),
          clientIP: clientIP,
          referrer: referrer,
          userAgent: userAgent,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      // Success
      setIsSubmitted(true)
      setEmail("")
      setFirstName("")

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)

    } catch (err: any) {
      console.error('Signup error:', err)
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          Join the <span className="text-orange-400">Campfire</span>
        </h2>

        <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-8" />

        <p className="text-lg text-white/60 mb-12">
          Be the first to hear about our latest projects, behind-the-scenes content, and creative adventures.
        </p>

        {error && (
          <div className="p-6 bg-gradient-to-br from-red-900/30 to-red-800/30 border border-red-400/30 rounded-lg mb-6">
            <div className="text-red-400 mb-4">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-white text-center">{error}</p>
            <button
              onClick={() => setError("")}
              className="mt-4 text-red-400 hover:text-red-300 text-sm underline block mx-auto"
            >
              Try again
            </button>
          </div>
        )}

        {isSubmitted ? (
          <div className="p-8 bg-gradient-to-br from-green-900/30 to-green-800/30 border border-green-400/30 rounded-lg">
            <div className="text-green-400 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Welcome to the Campfire!</h3>
            <p className="text-white/60">Thanks for joining our creative community.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-white/40 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-white/40 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-all duration-300"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-orange-400 to-red-500 text-black font-semibold rounded-lg hover:from-orange-500 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-orange-400/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sparking...
                </span>
              ) : (
                "Gather Round the Fire"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
