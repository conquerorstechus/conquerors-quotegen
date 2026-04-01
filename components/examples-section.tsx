"use client"

import { useState } from "react"
import Image from "next/image"
import { FlyerModal } from "@/components/flyer-modal"
import { CategorySlider } from "@/components/category-slider"
import { portfolioExamples } from "@/data/portfolio-examples"

const businessCategories = [
  "All",
  "Health & Wellness",
  "Products",
  "Professional Services",
  "Real Estate",
  "SaaS & Tech",
  "Food & Beverages",
  
]

export function ExamplesSection() {
  const [activeBusinessCategory, setActiveBusinessCategory] = useState("All")
  const [selectedFlyerId, setSelectedFlyerId] = useState<number | null>(null)

  const filteredExamples = portfolioExamples.filter((ex) => {
    // "All" means show every category; other values match the example's businessCategory.
    const businessMatch = activeBusinessCategory === "All" || ex.businessCategory === activeBusinessCategory
    return businessMatch
  })

  const selectedFlyer = selectedFlyerId 
    ? portfolioExamples.find(ex => ex.id === selectedFlyerId)
    : null

  return (
    <section id="examples" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F5F9FF]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B2A4A] mb-4">Our Work</h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto text-lg">
            Explore our portfolio of professional social media posts, marketing campaigns, and digital content created for leading brands and businesses across various industries.
          </p>
        </div>

        {/* Business Category Slider */}
        <CategorySlider
          categories={businessCategories}
          activeCategory={activeBusinessCategory}
          onCategoryChange={setActiveBusinessCategory}
        />

        {/* Examples Grid - Feedbird Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredExamples.length > 0 ? (
          filteredExamples.map((example) => (
            <div
              key={example.id}
              className="bg-white rounded-2xl border border-blue-100 overflow-hidden hover:border-[#1E5AA8] transition-all hover:shadow-xl group cursor-pointer"
              onClick={() => setSelectedFlyerId(example.id)}
            >
              {/* Card Header with Logo */}
              <div className="px-4 py-4 border-b border-blue-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center">
                    <Image
                      src="/logo-conquerors-dark.png"
                      alt="Conquerors"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-semibold text-[#0B2A4A] text-sm">Conquerors</span>
                </div>
                <button className="text-[#6B7280] hover:text-[#0B2A4A]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </button>
              </div>

              {/* Image Container */}
              <div className="relative aspect-square bg-[#F5F9FF] overflow-hidden">
                <Image
                  src={example.image}
                  alt={example.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Card Footer with Engagement Icons */}
              <div className="px-4 py-3 flex items-center gap-4">
                <button className="text-red-500 hover:text-red-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
                <button className="text-[#6B7280] hover:text-[#0B2A4A] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </button>
                <button className="text-[#6B7280] hover:text-[#0B2A4A] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </button>
                <div className="ml-auto">
                  <button className="text-[#6B7280] hover:text-[#0B2A4A] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 19V5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))
          ) : (
            <div className="col-span-full py-16 text-center">
              <p className="text-lg font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
  🚀 Coming Soon
</p>
            </div>
          )}
        </div>

      </div>

      {/* Flyer Modal */}
      <FlyerModal 
        isOpen={selectedFlyerId !== null} 
        onClose={() => setSelectedFlyerId(null)}
        flyer={selectedFlyer || null}
      />
    </section>
  )
}
