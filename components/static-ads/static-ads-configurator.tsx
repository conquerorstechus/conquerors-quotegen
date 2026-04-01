'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, BadgeCheck, CalendarCheck, CopyCheck, FileSearch, LayoutGrid, Paintbrush } from 'lucide-react'

const STATIC_AD_QUANTITY_OPTIONS = [5, 10, 20, 30]
const STATIC_AD_PRICING_TIERS: Record<number, number> = {
  5: 99,
  10: 149,
  20: 249,
  30: 349,
}

export function StaticAdsConfigurator() {
  const [quantityIndex, setQuantityIndex] = useState(0)

  const quantity = STATIC_AD_QUANTITY_OPTIONS[quantityIndex] ?? STATIC_AD_QUANTITY_OPTIONS[0]
  const price = STATIC_AD_PRICING_TIERS[quantity] ?? STATIC_AD_PRICING_TIERS[5]

  return (
    <section className="pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white border border-blue-100 rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-blue-100">
                <div className="flex items-start justify-between gap-6 mb-4">
                  <div className="min-w-0">
                    <h2 className="text-xl font-bold text-[#0B2A4A] flex items-center gap-2">
                      <LayoutGrid className="w-5 h-5" />
                      Static Ads
                    </h2>
                    <p className="text-sm text-[#6B7280]">{quantity} static ads</p>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <span className="text-2xl font-bold text-[#0B2A4A]">${price}</span>
                    <span className="text-[#6B7280]">/mo</span>
                  </div>
                </div>

                <p className="text-sm text-[#6B7280] mb-6">
                  Performance-focused static ad creatives built to grab attention and convert. From research and
                  concept ideation to design, copy, and headlines, we handle it all.
                </p>

                <div className="mb-2 flex items-center justify-between text-sm">
                  <p className="font-semibold text-[#0B2A4A]">Select monthly number of static ads</p>
                  <p className="text-[#6B7280]">{quantity}</p>
                </div>

                <div className="py-4">
                  <input
                    aria-label="Monthly number of static ads"
                    type="range"
                    min={0}
                    max={STATIC_AD_QUANTITY_OPTIONS.length - 1}
                    step={1}
                    value={quantityIndex}
                    onChange={(e) => setQuantityIndex(Number(e.target.value))}
                    className="w-full accent-[#1E5AA8]"
                  />
                  <div className="mt-2 flex justify-between text-xs text-[#6B7280]">
                    {STATIC_AD_QUANTITY_OPTIONS.map((q) => (
                      <span key={q} className={q === quantity ? 'text-[#0B2A4A] font-semibold' : undefined}>
                        {q}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-[#6B7280]">
                  <strong>Pricing is in USD.</strong> Your selected plan renews automatically each month but you can{' '}
                  <strong>cancel anytime</strong>. By subscribing, you agree to our Terms & Conditions and Refund
                  Policy.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white border border-blue-100 rounded-2xl p-6 sticky top-28">
              <h3 className="text-lg font-bold text-[#0B2A4A] mb-4">Static Ads</h3>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-sm text-[#6B7280]">
                  <Paintbrush className="w-4 h-4 text-[#1E5AA8]" />
                  Static ads in your branding
                </li>
                <li className="flex items-center gap-3 text-sm text-[#6B7280]">
                  <FileSearch className="w-4 h-4 text-[#1E5AA8]" />
                  Fast, research-backed ideation & concepts
                </li>
                <li className="flex items-center gap-3 text-sm text-[#6B7280]">
                  <CalendarCheck className="w-4 h-4 text-[#1E5AA8]" />
                  Design & copywriting for performance
                </li>
                <li className="flex items-center gap-3 text-sm text-[#6B7280]">
                  <BadgeCheck className="w-4 h-4 text-[#1E5AA8]" />
                  Monthly delivery of fresh ad concepts
                </li>
                <li className="flex items-center gap-3 text-sm text-[#6B7280]">
                  <CopyCheck className="w-4 h-4 text-[#1E5AA8]" />
                  Ready-to-launch formats for paid social
                </li>
              </ul>

              <p className="text-xs text-[#6B7280] mb-6">Cancel anytime</p>

              <Link
                href={`/checkout?plan=${encodeURIComponent('Static Ads')}&price=${price}&option=${encodeURIComponent(`${quantity} static ads`)}`}
                className="block"
              >
                <Button className="w-full bg-[#1E5AA8] text-white hover:bg-[#154080] group">
                  Checkout
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <button className="w-full mt-3 text-sm text-[#6B7280] hover:text-[#0B2A4A] underline">
                How the service works
              </button>

              <div className="mt-4 pt-4 border-t border-blue-100 text-center">
                <Link href="/schedule-demo" className="text-sm text-[#1E5AA8] hover:underline">
                  Schedule a demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
