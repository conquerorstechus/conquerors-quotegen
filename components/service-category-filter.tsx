'use client'

import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const serviceCategories = [
  { id: 'posts', label: 'Posts', icon: '📱' },
  { id: 'videos', label: 'Videos', icon: '🎥' },
  { id: 'static-ads', label: 'Static Ads', icon: '📊' },
  { id: 'video-ads', label: 'Video Ads', icon: '📹' },
  { id: 'emails', label: 'Emails', icon: '✉️' },
  { id: 'blogs', label: 'Blogs', icon: '📄' },
  { id: 'backlinks', label: 'Backlinks', icon: '🔗' },
  { id: 'meta-ads', label: 'Meta Ads', icon: '👥' },
  { id: 'google-ads', label: 'Google Ads', icon: '🔍' },
  { id: 'instagram-growth', label: 'Instagram Growth', icon: '📈' },
]

interface ServiceCategoryFilterProps {
  activeCategory: string
  onCategoryChange: (categoryId: string) => void
}

export function ServiceCategoryFilter({ activeCategory, onCategoryChange }: ServiceCategoryFilterProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <div className="relative mb-8">
      {/* Left Arrow */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
        >
          <ChevronLeft className="w-5 h-5 text-[#1E5AA8]" />
        </button>
      )}

      {/* Scroll Container */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex gap-3 overflow-x-auto scrollbar-hide px-12 sm:px-0"
        style={{ scrollBehavior: 'smooth' }}
      >
        {serviceCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
              activeCategory === category.id
                ? 'bg-[#1E5AA8] text-white shadow-lg'
                : 'bg-white text-[#6B7280] border border-gray-200 hover:border-[#1E5AA8] hover:text-[#0B2A4A]'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Right Arrow */}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
        >
          <ChevronRight className="w-5 h-5 text-[#1E5AA8]" />
        </button>
      )}
    </div>
  )
}
