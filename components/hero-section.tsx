'use client'

import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const carouselCards = [
  {
    id: 1,
    title: "Carousel Post",
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    image: "/social-media-post-design-professional.jpg",
  },
  {
    id: 2,
    title: "Instagram Stories",
    color: "bg-gradient-to-br from-orange-500 to-red-500",
    image: "/instagram-post-business-marketing.jpg",
  },
  {
    id: 3,
    title: "Meta Ads",
    color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    image: "/social-media-content-design.jpg",
  },
  {
    id: 4,
    title: "Short Form Videos",
    color: "bg-gradient-to-br from-green-500 to-teal-500",
    image: "/instagram-carousel-design.jpg",
  },
  {
    id: 5,
    title: "SEO Blog Posts",
    color: "bg-gradient-to-br from-yellow-500 to-orange-500",
    image: "/social-media-post-design-professional.jpg",
  },
  {
    id: 6,
    title: "Email Design",
    color: "bg-gradient-to-br from-indigo-500 to-purple-500",
    image: "/instagram-post-business-marketing.jpg",
  },
]

function CarouselColumn({ items, delay, speed }: { items: any[]; delay: number; speed: "normal" | "slow" | "slower" }) {
  return (
    <div className={`flex flex-col gap-4 carousel-column ${speed}`} style={{ animationDelay: `${delay}s` }}>
      {[...items, ...items].map((card, index) => (
        <div
          key={`${card.id}-${index}`}
          className="group relative bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:border-primary/50 flex-shrink-0 w-72 h-96 flex flex-col"
        >
          <div className={`absolute inset-0 ${card.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
          <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-white/80 text-sm">Sample {card.title}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

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
              Stop struggling with social media. Get <strong>15+ high-quality posts every month</strong> — without hiring a marketing team. We create, design, and schedule your content so your brand stays active, visible, and growing.
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
            <div className="flex-1 overflow-hidden">
              <CarouselColumn items={carouselCards.slice(0, 2)} delay={0} speed="normal" />
            </div>

            {/* Column 2 */}
            <div className="flex-1 overflow-hidden">
              <CarouselColumn items={carouselCards.slice(2, 4)} delay={2} speed="slow" />
            </div>

            {/* Column 3 */}
            <div className="flex-1 overflow-hidden">
              <CarouselColumn items={carouselCards.slice(4, 6)} delay={4} speed="slower" />
            </div>
          </div>
        </div>

        {/* Mobile Carousel Preview */}
        <div className="lg:hidden mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {carouselCards.map((card) => (
            <div
              key={card.id}
              className="group relative bg-white border border-blue-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all h-40 sm:h-48"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <p className="text-white font-semibold text-center text-sm">{card.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
