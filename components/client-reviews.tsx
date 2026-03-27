'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Award, Users, Zap, Target, Lightbulb, TrendingUp, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote: "Conquerors Digital has transformed our business operations with their innovative solutions. The team's expertise and dedication to quality is unmatched. Highly recommended for any technology needs.",
    name: "Sandy",
    title: "Tech Lead",
    company: "TechFlow Solutions",
    icon: Award,
    color: "from-blue-400 to-cyan-400"
  },
  {
    id: 2,
    quote: "Working with Conquerors has been a game-changer for our startup. Their custom software development services helped us scale rapidly while maintaining quality and performance.",
    name: "Sam",
    title: "CEO",
    company: "Startup Solutions",
    icon: Users,
    color: "from-purple-400 to-pink-400"
  },
  {
    id: 3,
    quote: "The professionalism and attention to detail from the Conquerors team is exceptional. They delivered our project on time and exceeded all expectations. A true partner in success.",
    name: "Sai",
    title: "Marketing Head",
    company: "Digital Innovations Inc",
    icon: Lightbulb,
    color: "from-yellow-400 to-orange-400"
  },
  {
    id: 4,
    quote: "Outstanding service and support from Conquerors Digital. They understood our vision and brought it to life with precision. Would definitely work with them again.",
    name: "Michael",
    title: "Director of Operations",
    company: "Global Tech Partners",
    icon: Target,
    color: "from-green-400 to-teal-400"
  },
  {
    id: 5,
    quote: "The team at Conquerors Digital is highly skilled and professional. They provided solutions that were not just effective but also cost-efficient. Highly impressed with the results.",
    name: "Faisal Harbi Sheikh",
    title: "Product Manager",
    company: "Innovation Labs",
    icon: Zap,
    color: "from-indigo-400 to-blue-400"
  },
  {
    id: 6,
    quote: "Conquerors Digital's approach to problem-solving is refreshing. They took the time to understand our needs and delivered a solution that perfectly fit our requirements.",
    name: "Rafael Oliveira",
    title: "VP Technology",
    company: "Enterprise Solutions",
    icon: TrendingUp,
    color: "from-rose-400 to-red-400"
  },
  {
    id: 7,
    quote: "Working with the Conquerors team has been one of the best decisions for our company. Their commitment to excellence and innovation is truly commendable.",
    name: "Beauty",
    title: "Chief Strategy Officer",
    company: "Future Ventures",
    icon: Star,
    color: "from-violet-400 to-purple-400"
  }
]

export function ClientReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  const nextSlide = () => {
    setDirection('right')
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setDirection('left')
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getVisibleCards = () => {
    const cards = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      cards.push(testimonials[index])
    }
    return cards
  }

  const visibleCards = getVisibleCards()

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0B2A4A] via-[#1E5AA8] to-[#0B2A4A]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Better Assistance Begins Here</h2>
          
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 rounded-full bg-[#3FA9F5] hover:bg-[#2A8FD9] transition-colors flex items-center justify-center shadow-lg"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 rounded-full bg-[#3FA9F5] hover:bg-[#2A8FD9] transition-colors flex items-center justify-center shadow-lg"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
            {visibleCards.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                {/* Icon Circle */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <testimonial.icon className="w-8 h-8 text-white" />
                </div>

                {/* Quote */}
                <blockquote className="text-white mb-6 leading-relaxed text-sm sm:text-base">
                  "{testimonial.quote}"
                </blockquote>

                {/* Client Info */}
                <div className="border-t border-white/20 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-blue-100 text-sm">{testimonial.title}</p>
                  <p className="text-blue-200/70 text-xs mt-1">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-8' : 'bg-white/40 w-2 hover:bg-white/60'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
