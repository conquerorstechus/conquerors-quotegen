'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { SelectedService } from './service-card'

interface OrderSummaryProps {
  selectedServices: SelectedService[]
  onRemoveService: (id: string) => void
}

export function OrderSummary({
  selectedServices,
  onRemoveService,
}: OrderSummaryProps) {
  const [promoCode, setPromoCode] = useState('')
  const totalPrice = selectedServices.reduce((sum, service) => sum + service.totalPrice, 0)

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 sticky top-24 h-fit">
      <h2 className="text-xl font-bold text-[#0B2A4A] mb-6">Summary</h2>

      {/* Promo Code */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Enter promo code"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]"
        />
      </div>

      {/* Selected Services */}
      <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
        {selectedServices.length === 0 ? (
          <p className="text-sm text-[#6B7280] text-center py-4">No services selected yet</p>
        ) : (
          selectedServices.map((service) => (
            <div
              key={service.id}
              className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100 last:border-b-0"
            >
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#0B2A4A]">{service.name}</p>
                {service.quantity && (
                  <p className="text-xs text-[#6B7280]">{service.quantity}</p>
                )}
              </div>
              <div className="flex items-center gap-3">
                <p className="text-sm font-semibold text-[#0B2A4A]">
                  ${service.totalPrice}
                </p>
                <button
                  onClick={() => onRemoveService(service.id)}
                  className="text-[#6B7280] hover:text-red-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-slate-200 pt-4 mb-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-[#0B2A4A]">Total</span>
          <span className="text-2xl font-bold text-[#1E5AA8]">${totalPrice}</span>
        </div>
        <p className="text-xs text-[#6B7280] mt-1">USD</p>
      </div>

    </div>
  )
}
