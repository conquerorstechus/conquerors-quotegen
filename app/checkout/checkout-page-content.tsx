'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { ServiceCard, type SelectedService } from '@/components/checkout/service-card'
import { OrderSummary } from '@/components/checkout/order-summary'
import { usePersistedCheckoutCart } from '@/hooks/use-persisted-checkout-cart'

type CheckoutServiceConfig = {
  id: string
  name: string
  description: string
  priceRange: string
  priceLabel: string
  type: 'dropdown' | 'button'
  options?: string[]
  optionPrices?: Record<string, number>
}

const CHECKOUT_PLAN_ALIASES: Record<string, string> = {
  'SEO Services': 'SEO',
}

const CHECKOUT_PAGE_SERVICES: CheckoutServiceConfig[] = [
  {
    id: 'social-posts',
    name: 'Social Media Posts',
    description: 'Static social media posts created and published monthly.',
    priceRange: '$99 – $199',
    priceLabel: '/ month',
    type: 'dropdown',
    options: ['4 posts', '8 posts', '12 posts'],
    optionPrices: { '4 posts': 99, '8 posts': 149, '12 posts': 199 },
  },
  {
    id: 'instagram-stories',
    name: 'Instagram Stories',
    description: 'Single-image Instagram stories.',
    priceRange: '$69 – $149',
    priceLabel: '/ month',
    type: 'dropdown',
    options: ['10 stories', '20 stories', '30 stories'],
    optionPrices: { '10 stories': 69, '20 stories': 109, '30 stories': 149 },
  },
  {
    id: 'carousel-posts',
    name: 'Carousel Posts',
    description: '3–5 slide carousel posts.',
    priceRange: '$10 – $150',
    priceLabel: '/ month',
    type: 'dropdown',
    options: ['1 carousel', '5 carousels', '15 carousels'],
    optionPrices: { '1 carousel': 10, '5 carousels': 50, '15 carousels': 150 },
  },
  {
    id: 'short-form-videos',
    name: 'Videos',
    description: '20–60 second TikTok, Reels, and Shorts videos.',
    priceRange: '$199 – $499',
    priceLabel: '/ month',
    type: 'dropdown',
    options: ['4 videos', '8 videos', '12 videos'],
    optionPrices: { '4 videos': 199, '8 videos': 349, '12 videos': 499 },
  },
  {
    id: 'instagram-growth',
    name: 'Instagram Growth',
    description: 'Real targeted Instagram followers through manual engagement.',
    priceRange: '$149',
    priceLabel: '/ month',
    type: 'dropdown',
    options: ['1 package'],
    optionPrices: { '1 package': 149 },
  },
  {
    id: 'meta-ads',
    name: 'Meta Ads Management',
    description: 'Facebook & Instagram ads management for leads and sales.',
    priceRange: '$499',
    priceLabel: '/ month',
    type: 'dropdown',
    options: ['1 campaign'],
    optionPrices: { '1 campaign': 499 },
  },
  {
    id: 'google-ads',
    name: 'Google Ads Management',
    description: 'Google ads management for lead generation.',
    priceRange: '$499',
    priceLabel: '/ month',
    type: 'dropdown',
    options: ['1 campaign'],
    optionPrices: { '1 campaign': 499 },
  },
  {
    id: 'managed-seo',
    name: 'SEO',
    description: 'Improve rankings, grow organic traffic, and execute SEO strategy.',
    priceRange: '$499 – $1,999',
    priceLabel: '/ month',
    type: 'dropdown',
    options: ['$499', '$999', '$1,499', '$1,999'],
    optionPrices: { '$499': 499, '$999': 999, '$1,499': 1499, '$1,999': 1999 },
  },
  {
    id: 'email-design',
    name: 'Email Design',
    description: 'Email campaigns and automation design.',
    priceRange: '$149 – $549',
    priceLabel: '/ month',
    type: 'dropdown',
    options: ['2 emails', '4 emails', '6 emails'],
    optionPrices: { '2 emails': 149, '4 emails': 349, '6 emails': 549 },
  },
  {
    id: 'seo-blog',
    name: 'SEO Blog Posts',
    description: 'SEO optimized 1000-word blog posts.',
    priceRange: '$99 – $379',
    priceLabel: '/ month',
    type: 'dropdown',
    options: ['1 post', '2 posts', '4 posts'],
    optionPrices: { '1 post': 99, '2 posts': 199, '4 posts': 379 },
  },
  {
    id: 'seo-backlinks',
    name: 'SEO Backlinks',
    description: 'High-quality backlinks to improve rankings.',
    priceRange: '$249 – $1,399',
    priceLabel: '/ month',
    type: 'dropdown',
    options: ['3 backlinks', '6 backlinks', '12 backlinks'],
    optionPrices: { '3 backlinks': 249, '6 backlinks': 699, '12 backlinks': 1399 },
  },
]

function slugCatalogId(plan: string) {
  return `pricing-${plan
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')}`
}

function matchCheckoutService(planDecoded: string): CheckoutServiceConfig | undefined {
  const target = CHECKOUT_PLAN_ALIASES[planDecoded] ?? planDecoded
  return CHECKOUT_PAGE_SERVICES.find((s) => s.name === target || s.name === planDecoded)
}

function resolvePackageLabel(
  svc: CheckoutServiceConfig | undefined,
  price: number,
  optionDecoded: string | undefined,
): string {
  if (optionDecoded?.trim()) return optionDecoded.trim()
  if (svc?.optionPrices) {
    const entry = Object.entries(svc.optionPrices).find(([, p]) => p === price)
    if (entry) return entry[0]
  }
  return `$${price}/mo`
}

export function CheckoutPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { lines, removeLine: handleRemoveService, addOrMergeLine, hydrated } = usePersistedCheckoutCart()
  const [queryConsumed, setQueryConsumed] = useState(false)

  useEffect(() => {
    if (!hydrated || queryConsumed) return

    const plan = searchParams.get('plan')
    const priceStr = searchParams.get('price')
    if (plan == null || priceStr == null) return

    const price = Number(priceStr)
    if (!Number.isFinite(price)) return

    const decodedPlan = decodeURIComponent(plan).trim()
    const optionRaw = searchParams.get('option') ?? searchParams.get('package')
    const optionDecoded = optionRaw ? decodeURIComponent(optionRaw) : undefined
    const svc = matchCheckoutService(decodedPlan)
    let packageLabel = resolvePackageLabel(svc, price, optionDecoded)
    const qtyRaw = searchParams.get('qty')
    if (qtyRaw && !optionDecoded) {
      const q = Number.parseInt(qtyRaw, 10)
      if (Number.isFinite(q) && q > 0) {
        packageLabel = `${q} selected`
      }
    }

    if (svc) {
      addOrMergeLine({
        catalogId: svc.id,
        name: svc.name,
        quantity: packageLabel,
        basePrice: price,
        lineQty: 1,
      })
    } else {
      addOrMergeLine({
        catalogId: slugCatalogId(decodedPlan),
        name: decodedPlan,
        quantity: packageLabel,
        basePrice: price,
        lineQty: 1,
      })
    }

    setQueryConsumed(true)
    router.replace('/checkout', { scroll: false })
  }, [hydrated, queryConsumed, searchParams, router, addOrMergeLine])

  const handleAddService = (service: SelectedService) => {
    const catalogId = service.catalogId ?? service.id
    const lineQty = service.lineQty ?? 1
    addOrMergeLine({
      catalogId,
      name: service.name,
      quantity: service.quantity,
      basePrice: service.basePrice,
      lineQty,
    })
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-[#1E5AA8] hover:text-[#154080] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Pricing
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-[#0B2A4A] mb-2">Select Services</h1>
                <p className="text-lg text-[#6B7280] mb-4">Pick your services, cancel anytime.</p>

                <div className="space-y-2 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-[#1E5AA8] font-bold mt-1">•</span>
                    <span className="text-sm text-[#6B7280]">
                      Top Digital Marketing Services in one platform
                    </span>
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

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 mb-8">
                {CHECKOUT_PAGE_SERVICES.map((service) => (
                  <ServiceCard key={service.id} {...service} onAddService={handleAddService} />
                ))}
              </div>
            </div>

            <div className="lg:col-span-1 w-full">
              <div className="lg:sticky lg:top-24 flex flex-col gap-4">
                <OrderSummary selectedServices={lines} onRemoveService={handleRemoveService} />
                <Button
                  onClick={() => router.push('/checkout/review-payment')}
                  disabled={lines.length === 0}
                  className="w-full bg-[#1E5AA8] text-white hover:bg-[#154080] py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-sm border border-slate-200"
                >
                  Next: Review & Payment →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
