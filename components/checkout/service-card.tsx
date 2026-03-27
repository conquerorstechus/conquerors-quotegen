'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus, Minus } from 'lucide-react'

interface ServiceCardProps {
  id: string
  name: string
  description: string
  priceRange: string
  priceLabel: string
  type: 'dropdown' | 'button'
  options?: string[]
  onAddService: (service: SelectedService) => void
}

export interface SelectedService {
  id: string
  name: string
  quantity?: string
  basePrice: number
  totalPrice: number
}

export function ServiceCard({
  id,
  name,
  description,
  priceRange,
  priceLabel,
  type,
  options = [],
  onAddService,
}: ServiceCardProps) {
  const [selectedOption, setSelectedOption] = useState(options[0] || '')
  const [quantity, setQuantity] = useState(1)

  const handleAddService = () => {
    const basePrice = parseInt(priceRange.split('–')[0].replace(/\$|,/g, ''))
    const totalPrice = basePrice * quantity

    onAddService({
      id,
      name,
      quantity: selectedOption || `${quantity}x`,
      basePrice,
      totalPrice,
    })
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-[#0B2A4A] mb-2">{name}</h3>
      <p className="text-sm text-[#6B7280] mb-4 leading-relaxed">{description}</p>

      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-lg font-bold text-[#1E5AA8]">{priceRange}</p>
          <p className="text-xs text-[#6B7280]">{priceLabel}</p>
        </div>
      </div>

      {type === 'dropdown' && options.length > 0 ? (
        <div className="mb-4">
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]"
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ) : type === 'dropdown' ? (
        <div className="mb-4 flex items-center gap-2">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-1 hover:bg-slate-100 rounded"
          >
            <Minus className="w-4 h-4 text-[#6B7280]" />
          </button>
          <span className="flex-1 text-center text-sm font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-1 hover:bg-slate-100 rounded"
          >
            <Plus className="w-4 h-4 text-[#6B7280]" />
          </button>
        </div>
      ) : null}

      <Button
        onClick={handleAddService}
        className="w-full bg-[#1E5AA8] text-white hover:bg-[#154080] rounded-lg font-semibold"
      >
        Add Service
      </Button>
    </div>
  )
}
