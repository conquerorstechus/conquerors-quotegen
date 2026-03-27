'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { ServiceTabs } from '@/components/pricing/service-tabs'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ArrowRight, Video, Users, Film, Info } from 'lucide-react'

const services = [
  {
    id: 'short-form',
    title: 'Short-Form Videos',
    description: 'Simple 20-60 second videos for TikTok, Reels, and Shorts.',
    icon: Video,
    category: 'SOCIAL MEDIA',
    basePrice: 199,
    options: [
      { label: '5 videos', price: 199 },
      { label: '10 videos', price: 349 },
      { label: '15 videos', price: 499 },
      { label: '20 videos', price: 649 },
    ],
    href: '/services/videos/short-form-videos',
  },
  {
    id: 'video-ads',
    title: 'Video Ads',
    description: 'High-performing video ads for paid social. Research, scripting, editing, copywriting. Using client-provided footage, premium stock, UGC-style, or AI assets.',
    icon: Film,
    category: 'PAID SOCIAL',
    basePrice: 99,
    options: [
      { label: '1 video', price: 99 },
      { label: '2 videos', price: 179 },
      { label: '3 videos', price: 249 },
      { label: '5 videos', price: 399 },
    ],
    href: '/video-ads',
  },
  {
    id: 'ugc',
    title: 'UGC Videos',
    description: 'Engaging video content created by real users for authentic brand promotion.',
    icon: Users,
    category: 'PAID SOCIAL',
    basePrice: 599,
    options: [
      { label: '1 video', price: 599 },
      { label: '2 videos', price: 1099 },
      { label: '3 videos', price: 1499 },
    ],
    href: '/services/videos/ugc-videos',
  },
]

export default function ShortFormVideosPage() {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, number>>({
    'short-form': 0,
    'video-ads': 0,
    'ugc': 0,
  })

  const handleOptionChange = (serviceId: string, optionIndex: number) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [serviceId]: optionIndex,
    }))
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <nav className="pt-32 px-4 sm:px-6 lg:px-8 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto mb-8">
          <Breadcrumb
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Videos', href: '/services/videos' },
              { label: 'Short-Form Videos' },
            ]}
          />
        </div>
      </nav>

      <ServiceTabs />

      {/* Hero Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1a1a2e] mb-3">
            Short-Form Videos
          </h1>
          <p className="text-[#6b7280] max-w-2xl mx-auto text-sm leading-relaxed">
            Get your creative &amp; marketing work done without the hassle of unreliable freelancers, costly agencies. Pay a fixed, monthly, and predictable rate, with no contracts or surprises.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#F8F9FB]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => {
              const Icon = service.icon
              const selectedIndex = selectedOptions[service.id] ?? 0
              const selectedOption = service.options[selectedIndex]
              const price = selectedOption?.price ?? service.basePrice

              return (
                <div
                  key={service.id}
                  className="bg-white border border-[#e5e7eb] rounded-lg p-5 flex flex-col hover:border-[#3b82f6] hover:shadow-md transition-all"
                >
                  {/* Header with icon and category badge */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-9 h-9 rounded-md bg-[#f3f4f6] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#6b7280]" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#f3f4f6] text-[#6b7280]">
                      {service.category}
                    </span>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-sm font-semibold text-[#1a1a2e] mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#6b7280] mb-4 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="mb-0.5">
                    <span className="text-xl font-bold text-[#1a1a2e]">${price}</span>
                  </div>
                  <p className="text-[11px] text-[#9ca3af] mb-3">Pricing from</p>

                  {/* Quantity Selector */}
                  <div className="mb-3">
                    <Select
                      value={String(selectedIndex)}
                      onValueChange={(value) => handleOptionChange(service.id, Number(value))}
                    >
                      <SelectTrigger className="w-full h-8 text-xs bg-[#f9fafb] border-[#e5e7eb] text-[#374151]">
                        <SelectValue>
                          {selectedOption?.label} - ${selectedOption?.price}/mo
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {service.options.map((option, index) => (
                          <SelectItem key={index} value={String(index)} className="text-xs">
                            {option.label} - ${option.price}/mo
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Checkout Button */}
                  <Link
                    href={`/checkout?plan=${encodeURIComponent(service.title)}&price=${price}&qty=${selectedOption?.label}`}
                    className="block mb-2"
                  >
                    <Button className="w-full h-8 text-xs font-medium bg-[#3b82f6] text-white hover:bg-[#2563eb]">
                      Checkout
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </Link>

                  {/* Learn More Link */}
                  <Link
                    href={service.href}
                    className="flex items-center justify-center gap-1 text-[11px] text-[#6b7280] hover:text-[#3b82f6] transition-colors"
                  >
                    Learn more
                    <Info className="w-3 h-3" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
