'use client'

import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { PortfolioExample } from "@/data/portfolio-examples"
import { portfolioExamples } from "@/data/portfolio-examples"

/** Same items as Our Work default grid (all categories) */
const heroWorkItems = portfolioExamples

function splitIntoThree<T>(arr: T[]): [T[], T[], T[]] {
  const n = arr.length
  if (n === 0) return [[], [], []]
  const i1 = Math.ceil(n / 3)
  const i2 = Math.ceil((2 * n) / 3)
  return [arr.slice(0, i1), arr.slice(i1, i2), arr.slice(i2)]
}

function splitIntoTwo<T>(arr: T[]): [T[], T[]] {
  const mid = Math.ceil(arr.length / 2)
  return [arr.slice(0, mid), arr.slice(mid)]
}

type MarqueeSpeed = "normal" | "slow" | "slower"

function HeroOurWorkCardDesktop({ example }: { example: PortfolioExample }) {
  return (
    <div className="bg-white rounded-2xl border border-blue-100 overflow-hidden shadow-lg hover:shadow-xl transition-shadow hover:border-primary/50 flex-shrink-0 w-72 cursor-default">
      <div className="px-3 py-3 border-b border-blue-100 flex items-center justify-between">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
            <Image
              src="/logo-conquerors-dark.png"
              alt="Conquerors"
              width={44}
              height={44}
              className="object-contain"
            />
          </div>
          <span className="font-semibold text-[#0B2A4A] text-xs truncate">Conquerors</span>
        </div>
        <span className="text-[#6B7280] flex-shrink-0">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </span>
      </div>
      <div className="relative aspect-square bg-[#F5F9FF] overflow-hidden">
        <Image
          src={example.image}
          alt={example.title}
          fill
          className="object-cover"
          sizes="18rem"
        />
      </div>
      <div className="px-3 py-2 flex items-center gap-3">
        <span className="text-red-500">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </span>
        <span className="text-[#6B7280]">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </span>
        <span className="text-[#6B7280]">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        </span>
        <div className="ml-auto">
          <span className="text-[#6B7280]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 19V5z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

function HeroOurWorkCardMobile({ example }: { example: PortfolioExample }) {
  return (
    <div className="bg-white rounded-xl border border-blue-100 overflow-hidden shadow-md hover:shadow-lg transition-shadow hover:border-primary/50 flex-shrink-0 w-full cursor-default">
      <div className="px-2 py-2 border-b border-blue-100 flex items-center justify-between">
        <div className="flex items-center gap-1.5 min-w-0">
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
            <Image
              src="/logo-conquerors-dark.png"
              alt="Conquerors"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <span className="font-semibold text-[#0B2A4A] text-[10px] truncate">Conquerors</span>
        </div>
        <span className="text-[#6B7280] flex-shrink-0">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </span>
      </div>
      <div className="relative h-32 sm:h-40 bg-[#F5F9FF] overflow-hidden">
        <Image
          src={example.image}
          alt={example.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 45vw, 30vw"
        />
      </div>
      <div className="px-2 py-1.5 flex items-center gap-2">
        <span className="text-red-500">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </span>
        <span className="text-[#6B7280]">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </span>
        <span className="text-[#6B7280]">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        </span>
        <div className="ml-auto">
          <span className="text-[#6B7280]">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 19V5z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

function HeroWorkMarqueeDesktop({
  items,
  delay,
  speed,
}: {
  items: PortfolioExample[]
  delay: number
  speed: MarqueeSpeed
}) {
  const loop = [...items, ...items]
  return (
    <div
      className={`flex flex-col gap-4 carousel-column ${speed}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {loop.map((example, index) => (
        <HeroOurWorkCardDesktop key={`${example.id}-${index}`} example={example} />
      ))}
    </div>
  )
}

function HeroWorkMarqueeMobile({
  items,
  delay,
  speed,
}: {
  items: PortfolioExample[]
  delay: number
  speed: MarqueeSpeed
}) {
  const loop = [...items, ...items]
  return (
    <div
      className={`flex flex-col gap-4 carousel-column ${speed}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {loop.map((example, index) => (
        <HeroOurWorkCardMobile key={`m-${example.id}-${index}`} example={example} />
      ))}
    </div>
  )
}

const [heroCol1, heroCol2, heroCol3] = splitIntoThree(heroWorkItems)
const [heroMob1, heroMob2] = splitIntoTwo(heroWorkItems)

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0B2A4A] via-[#1E5AA8] to-[#0B2A4A] text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzEpIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzFfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iNjAiIHkyPSI2MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiMzRkE5RjUiIHN0b3Atb3BhY2l0eT0iMC4xIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMUU1QUE4IiBzdG9wLW9wYWNpdHk9IjAuMDUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=')] opacity-20"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section: Badge and Title */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side */}
          <div className="flex flex-col justify-start pt-4">
            {/* Badge */}
            <div className="inline-flex w-fit mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-300/50">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#3FA9F5] text-[#3FA9F5]" />
                  ))}
                </div>
                <span className="text-sm font-medium text-blue-100">TOP 1% OF GLOBAL CREATIVE TALENT</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white leading-tight mb-6 text-pretty">
              Expert social media management from{" "}
              <span className="text-[#3FA9F5]">only $99/mo</span>
            </h1>

            {/* Subheading and Description */}
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Stop struggling with social media. Get <strong>8+ high-quality posts every month</strong> — without hiring a marketing team. We create, design, and schedule your content so your brand stays active, visible, and growing.
            </p>

            {/* What You Get Section */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-white mb-4">What You Get</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#3FA9F5] flex-shrink-0 mt-0.5" />
                  <span className="text-blue-50">Done-for-you social media management</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#3FA9F5] flex-shrink-0 mt-0.5" />
                  <span className="text-blue-50">Professional designs & short-form videos</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#3FA9F5] flex-shrink-0 mt-0.5" />
                  <span className="text-blue-50">Fast delivery</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#3FA9F5] flex-shrink-0 mt-0.5" />
                  <span className="text-blue-50">Cancel anytime</span>
                </div>
              </div>
            </div>

           

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/schedule-demo">
                <Button size="lg" className="bg-[#3FA9F5] text-[#0B2A4A] hover:bg-white px-8 py-6 text-lg font-semibold">
                  Schedule a Free Demo Call
                </Button>
              </Link>
            </div>

            {/* Trust Line */}
            <div className="text-sm text-blue-100">
              <span>
                Trusted by <strong className="text-white"> Growing Brands & Businesses</strong>
              </span>
            </div>
          </div>

          {/* Right Side: Animated Carousel */}
          <div className="hidden lg:flex gap-6 h-screen overflow-hidden relative">
            {/* Gradient Overlays */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0B2A4A] to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0B2A4A] to-transparent z-20 pointer-events-none" />

            {/* Column 1 */}
            <div className="flex-1 overflow-hidden min-w-0">
              <HeroWorkMarqueeDesktop items={heroCol1} delay={0} speed="normal" />
            </div>

            {/* Column 2 */}
            <div className="flex-1 overflow-hidden min-w-0">
              <HeroWorkMarqueeDesktop items={heroCol2} delay={2} speed="slow" />
            </div>

            {/* Column 3 */}
            <div className="flex-1 overflow-hidden min-w-0">
              <HeroWorkMarqueeDesktop items={heroCol3} delay={4} speed="slower" />
            </div>
          </div>
        </div>

        {/* Mobile: auto-scrolling Our Work cards */}
        <div className="lg:hidden mt-12 relative h-[22rem] sm:h-[26rem] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#0B2A4A] to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0B2A4A] to-transparent z-20 pointer-events-none" />
          <div className="flex gap-4 h-full">
            <div className="flex-1 overflow-hidden min-w-0">
              <HeroWorkMarqueeMobile items={heroMob1} delay={0} speed="normal" />
            </div>
            <div className="flex-1 overflow-hidden min-w-0">
              <HeroWorkMarqueeMobile items={heroMob2} delay={2} speed="slow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
