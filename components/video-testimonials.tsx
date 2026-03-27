'use client'

import { Play, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { useRef, useState } from "react"

const testimonials = [
  {
    id: 1,
    caption: "They made beautiful posts",
    thumbnail: "/social-media-post-design-professional.jpg",
  },
  {
    id: 2,
    caption: "Fast and very responsive",
    thumbnail: "/instagram-post-business-marketing.jpg",
  },
  {
    id: 3,
    caption: "Content that actually converts",
    thumbnail: "/social-media-content-design.jpg",
  },
  {
    id: 4,
    caption: "Best investment for our brand",
    thumbnail: "/instagram-carousel-design.jpg",
  },
  {
    id: 5,
    caption: "Professional quality every time",
    thumbnail: "/social-media-post-design-professional.jpg",
  },
]

export function VideoTestimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return

    const scrollAmount = 400
    const newScrollPosition =
      scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)

    scrollContainerRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    })

    setTimeout(() => updateScrollButtons(), 300)
  }

  const updateScrollButtons = () => {
    if (!scrollContainerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-7xl mx-auto">
        {/* Main Testimonial Quote */}
        <div className="text-center mb-16">
          <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-10 text-pretty max-w-3xl mx-auto">
            "Hands down the best social media service. It's like Hootsuite, but they create amazing content for us and post to our socials after we approve"
          </blockquote>

          {/* Customer Info */}
          <div className="flex items-center justify-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop"
                alt="Filip N."
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">Filip N.</span>
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              </div>
              <p className="text-sm text-muted-foreground">CMO at Reflectly</p>
            </div>
          </div>
        </div>

        {/* Video Testimonial Cards */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="absolute -left-4 sm:left-0 top-1/2 -translate-y-1/2 z-10 bg-background border border-border rounded-full p-2 hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:border-primary/50"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="absolute -right-4 sm:right-0 top-1/2 -translate-y-1/2 z-10 bg-background border border-border rounded-full p-2 hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:border-primary/50"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Carousel Container */}
          <div className="testimonial-scroll-wrapper">
            <div
              ref={scrollContainerRef}
              onScroll={updateScrollButtons}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-72 sm:w-80 group snap-center"
                >
                  <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:border-primary/50 h-72 sm:h-80">
                    {/* Thumbnail */}
                    <Image
                      src={testimonial.thumbnail}
                      alt={testimonial.caption}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      {/* Play Button */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/30 rounded-full animate-pulse" />
                        <div className="relative bg-primary hover:bg-primary/90 rounded-full p-4 text-white transition-all group-hover:scale-110">
                          <Play className="w-6 h-6 fill-white" />
                        </div>
                      </div>
                    </div>

                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white font-medium text-sm">{testimonial.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
