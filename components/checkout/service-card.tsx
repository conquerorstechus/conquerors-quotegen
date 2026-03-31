'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  ChevronDown,
  FileText,
  Film,
  ImageIcon,
  Instagram,
  Layers,
  LayoutGrid,
  Link2,
  Mail,
  Minus,
  Plus,
  Search,
  Target,
  TrendingUp,
  Video,
  type LucideIcon,
} from 'lucide-react'

interface ServiceCardProps {
  id: string
  name: string
  description: string
  /** Shown when `optionPrices` is not set (static range or single price). */
  priceRange: string
  priceLabel: string
  type: 'dropdown' | 'button'
  options?: string[]
  /** When set, price line follows the dropdown: `{option} — ${price}/mo`. */
  optionPrices?: Record<string, number>
  onAddService: (service: SelectedService) => void
}

export interface SelectedService {
  id: string
  name: string
  quantity?: string
  basePrice: number
  totalPrice: number
}

/** Presentation-only icons keyed by service id (no change to service data). */
const SERVICE_ICONS: Record<string, LucideIcon> = {
  'social-posts': ImageIcon,
  'instagram-stories': Instagram,
  'carousel-posts': Layers,
  'short-form-videos': Video,
  'instagram-growth': TrendingUp,
  'meta-ads': Target,
  'google-ads': Search,
  'managed-seo': Search,
  'static-ads': LayoutGrid,
  'video-ads': Film,
  'ugc-videos': Video,
  'email-design': Mail,
  'seo-blog': FileText,
  'seo-backlinks': Link2,
}

function parseLegacyBasePrice(priceRange: string): number {
  const normalized = priceRange.replace(/\$/g, '').replace(/,/g, '')
  if (normalized.includes('–')) {
    return Number.parseInt(normalized.split('–')[0].trim(), 10) || 0
  }
  return Number.parseInt(normalized.trim(), 10) || 0
}

export function ServiceCard({
  id,
  name,
  description,
  priceRange,
  priceLabel,
  type,
  options = [],
  optionPrices,
  onAddService,
}: ServiceCardProps) {
  const [selectedOption, setSelectedOption] = useState(options[0] || '')
  const [quantity, setQuantity] = useState(1)
  const [priceFlash, setPriceFlash] = useState(false)
  const isFirstPriceRender = useRef(true)

  const tierPrice =
    optionPrices && selectedOption && optionPrices[selectedOption] !== undefined
      ? optionPrices[selectedOption]
      : optionPrices && options[0] !== undefined && optionPrices[options[0]] !== undefined
        ? optionPrices[options[0]]
        : null

  useEffect(() => {
    if (!optionPrices) return
    if (isFirstPriceRender.current) {
      isFirstPriceRender.current = false
      return
    }
    setPriceFlash(true)
    const t = window.setTimeout(() => setPriceFlash(false), 400)
    return () => window.clearTimeout(t)
  }, [selectedOption, optionPrices])

  const handleAddService = () => {
    const basePrice =
      tierPrice !== null ? tierPrice : parseLegacyBasePrice(priceRange)
    const totalPrice = basePrice * quantity

    onAddService({
      id,
      name,
      quantity: selectedOption || `${quantity}x`,
      basePrice,
      totalPrice,
    })
  }

  const showTierPricing = optionPrices != null && tierPrice !== null && selectedOption
  const CardIcon = SERVICE_ICONS[id] ?? FileText

  return (
    <div
      className={[
        'group flex h-full min-h-[22rem] flex-col rounded-2xl border border-slate-200/90 bg-white p-6',
        'shadow-[0_1px_3px_rgba(15,23,42,0.06)] transition-all duration-200',
        'hover:border-slate-300/90 hover:shadow-[0_8px_28px_rgba(15,23,42,0.08)]',
      ].join(' ')}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-colors group-hover:bg-[#1E5AA8]/10 group-hover:text-[#1E5AA8]">
          <CardIcon className="h-5 w-5" aria-hidden />
        </div>
      </div>

      <h3 className="text-base font-semibold leading-snug tracking-tight text-[#0B2A4A]">
        {name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">{description}</p>

      <div className="mt-auto flex flex-col gap-4 pt-6">
        <div className="min-h-[4.25rem]" aria-live="polite">
          <p className="text-xs font-medium uppercase tracking-wide text-[#94A3B8]">
            Pricing from
          </p>
          {showTierPricing ? (
            <>
              <p
                className={[
                  'mt-1 flex flex-wrap items-baseline gap-x-1 transition-all duration-200',
                  priceFlash ? 'scale-[1.02] text-[#154080]' : 'text-[#1E5AA8]',
                ].join(' ')}
              >
                <span className="text-3xl font-bold tracking-tight">${tierPrice}</span>
                <span className="text-base font-medium text-[#64748B]">/mo</span>
              </p>
              <p className="mt-1 text-sm text-[#64748B]">{selectedOption}</p>
            </>
          ) : (
            <>
              <p className="mt-1 text-2xl font-bold tracking-tight text-[#1E5AA8]">
                {priceRange}
              </p>
              <p className="mt-0.5 text-sm text-[#64748B]">{priceLabel}</p>
            </>
          )}
        </div>

        {type === 'dropdown' && options.length > 0 ? (
          <div className="relative">
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-white py-3 pl-4 pr-11 text-sm font-medium text-[#0B2A4A] shadow-sm transition-colors hover:border-slate-300 focus:border-[#1E5AA8] focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]/20"
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden
            />
          </div>
        ) : type === 'dropdown' ? (
          <div className="flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-50/80 p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-[#64748B] transition-colors hover:bg-white hover:text-[#0B2A4A]"
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="flex-1 select-none text-center text-sm font-semibold text-[#0B2A4A]">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-[#64748B] transition-colors hover:bg-white hover:text-[#0B2A4A]"
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        ) : null}

        <Button
          onClick={handleAddService}
          className="h-11 w-full rounded-xl bg-[#1E5AA8] text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-[#154080] hover:shadow-md"
        >
          Add Service
        </Button>
      </div>
    </div>
  )
}
