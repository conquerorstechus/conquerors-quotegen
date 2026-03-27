'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { ServiceCard, SelectedService } from '@/components/checkout/service-card'
import { OrderSummary } from '@/components/checkout/order-summary'

export default function CheckoutPage() {
  const router = useRouter()
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([])

  const services = [
    {
      id: 'social-posts',
      name: 'Social Media Posts',
      description: 'Static social media posts created and published monthly.',
      priceRange: '$199 – $499',
      priceLabel: '/ month',
      type: 'dropdown' as const,
      options: ['4 posts', '8 posts', '12 posts'],
    },
    {
      id: 'instagram-stories',
      name: 'Instagram Stories',
      description: 'Single-image Instagram stories.',
      priceRange: '$69 – $149',
      priceLabel: '/ month',
      type: 'dropdown' as const,
      options: ['10 stories', '20 stories', '30 stories'],
    },
    {
      id: 'carousel-posts',
      name: 'Carousel Posts',
      description: '3–5 slide carousel posts.',
      priceRange: '$10 – $150',
      priceLabel: '/ month',
      type: 'dropdown' as const,
    },
    {
      id: 'short-form-videos',
      name: 'Short Form Videos',
      description: '20–60 second TikTok, Reels, and Shorts videos.',
      priceRange: '$199 – $499',
      priceLabel: '/ month',
      type: 'dropdown' as const,
      options: ['4 videos', '8 videos', '12 videos'],
    },
    {
      id: 'instagram-growth',
      name: 'Instagram Growth',
      description: 'Real targeted Instagram followers through manual engagement.',
      priceRange: '$149',
      priceLabel: '/ month',
      type: 'button' as const,
    },
    {
      id: 'meta-ads',
      name: 'Meta Ads Management',
      description: 'Facebook & Instagram ads management for leads and sales.',
      priceRange: '$499',
      priceLabel: '/ month',
      type: 'button' as const,
    },
    {
      id: 'google-ads',
      name: 'Google Ads Management',
      description: 'Google ads management for lead generation.',
      priceRange: '$499',
      priceLabel: '/ month',
      type: 'button' as const,
    },
    {
      id: 'managed-seo',
      name: 'Managed SEO',
      description: 'Improve rankings, grow organic traffic, and manage SEO strategy.',
      priceRange: '$499 – $1,999',
      priceLabel: '/ month',
      type: 'dropdown' as const,
      options: ['$499', '$999', '$1,499', '$1,999'],
    },
    {
      id: 'conversion-tracking',
      name: 'Conversion Tracking',
      description: 'Meta Pixel & conversion tracking setup.',
      priceRange: '$249 – $349',
      priceLabel: 'one-time',
      type: 'dropdown' as const,
      options: ['$249', '$349'],
    },
    {
      id: 'landing-page',
      name: 'Landing Page Design',
      description: 'Conversion-focused landing page design and development.',
      priceRange: '$349',
      priceLabel: 'one-time',
      type: 'button' as const,
    },
    {
      id: 'static-ads',
      name: 'Static Ads',
      description: 'Static ads for paid social campaigns.',
      priceRange: '$99 – $379',
      priceLabel: '/ month',
      type: 'dropdown' as const,
      options: ['5 ads', '10 ads', '20 ads'],
    },
    {
      id: 'video-ads',
      name: 'Video Ads',
      description: 'High-performing video ads for paid campaigns.',
      priceRange: '$99 – $389',
      priceLabel: '/ month',
      type: 'dropdown' as const,
      options: ['2 videos', '4 videos', '6 videos'],
    },
    {
      id: 'ugc-videos',
      name: 'UGC Videos',
      description: 'User-generated videos created by real creators.',
      priceRange: '$599 – $1,799',
      priceLabel: '/ month',
      type: 'dropdown' as const,
      options: ['3 videos', '6 videos', '12 videos'],
    },
    {
      id: 'email-design',
      name: 'Email Design',
      description: 'Email campaigns and automation design.',
      priceRange: '$149 – $549',
      priceLabel: '/ month',
      type: 'dropdown' as const,
      options: ['2 emails', '4 emails', '6 emails'],
    },
    {
      id: 'seo-blog',
      name: 'SEO Blog Posts',
      description: 'SEO optimized 1000-word blog posts.',
      priceRange: '$99 – $379',
      priceLabel: '/ month',
      type: 'dropdown' as const,
      options: ['1 post', '2 posts', '4 posts'],
    },
    {
      id: 'seo-backlinks',
      name: 'SEO Backlinks',
      description: 'High-quality backlinks to improve rankings.',
      priceRange: '$249 – $1,399',
      priceLabel: '/ month',
      type: 'dropdown' as const,
      options: ['3 backlinks', '6 backlinks', '12 backlinks'],
    },
  ]

  const handleAddService = (service: SelectedService) => {
    setSelectedServices([...selectedServices, { ...service, id: `${service.id}-${Date.now()}` }])
  }

  const handleRemoveService = (id: string) => {
    setSelectedServices(selectedServices.filter((service) => service.id !== id))
  }

  const totalPrice = selectedServices.reduce((sum, service) => sum + service.totalPrice, 0)

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Link */}
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-[#1E5AA8] hover:text-[#154080] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Pricing
          </Link>

          {/* Main Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Service Selection */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-[#0B2A4A] mb-2">Select Services</h1>
                <p className="text-lg text-[#6B7280] mb-4">
                  Pick your services, cancel anytime.
                </p>
                <p className="text-sm text-[#6B7280] mb-6">
                  Onboarding call + monthly review meetings included with any plan.
                </p>

                {/* Benefits List */}
                <div className="space-y-2 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-[#1E5AA8] font-bold mt-1">•</span>
                    <span className="text-sm text-[#6B7280]">15+ marketing services in one platform</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#1E5AA8] font-bold mt-1">•</span>
                    <span className="text-sm text-[#6B7280]">Expert marketers and creatives</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#1E5AA8] font-bold mt-1">•</span>
                    <span className="text-sm text-[#6B7280]">Trusted digital marketing solutions</span>
                  </div>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                {services.map((service) => (
                  <ServiceCard
                    key={service.id}
                    {...service}
                    onAddService={handleAddService}
                  />
                ))}
              </div>

              {/* Next Button */}
              <Button
                onClick={() => router.push('/checkout/review-payment')}
                disabled={selectedServices.length === 0}
                className="w-full bg-[#1E5AA8] text-white hover:bg-[#154080] py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next: Review & Payment →
              </Button>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <OrderSummary
                selectedServices={selectedServices}
                onRemoveService={handleRemoveService}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
