'use client'

import { useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { X, ArrowRight } from 'lucide-react'
import type { SelectedService } from './service-card'

interface OrderSummaryProps {
  selectedServices: SelectedService[]
  onRemoveService: (id: string) => void
}

function lineTotal(service: SelectedService): number {
  const qty = service.lineQty ?? 1
  return service.basePrice * qty
}

export function OrderSummary({ selectedServices, onRemoveService }: OrderSummaryProps) {
  const router = useRouter()
  const computedTotal = useMemo(
    () => selectedServices.reduce((sum, s) => sum + lineTotal(s), 0),
    [selectedServices],
  )
  const uniqueServicesCount = selectedServices.length
  const selectedItemsCount = useMemo(
    () => selectedServices.reduce((sum, s) => sum + (s.lineQty ?? 1), 0),
    [selectedServices],
  )

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm h-fit w-full">
      <h2 className="text-xl font-bold text-[#0B2A4A] mb-6">Summary</h2>
      <div className="mb-4 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
        <p className="text-xs text-[#64748B]">
          Selected services: <span className="font-semibold text-[#0B2A4A]">{uniqueServicesCount}</span> | Items:{' '}
          <span className="font-semibold text-[#0B2A4A]">{selectedItemsCount}</span>
        </p>
      </div>


      <div className="space-y-3 mb-6 max-h-96 overflow-y-auto min-h-[4.5rem]">
        {selectedServices.length === 0 ? (
          <p className="text-sm text-[#6B7280] text-center py-6">No services selected yet</p>
        ) : (
          selectedServices.map((service) => {
            const qty = service.lineQty ?? 1
            const total = lineTotal(service)
            return (
              <div
                key={service.id}
                className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100 last:border-b-0"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#0B2A4A]">{service.name}</p>
                  {service.quantity ? (
                    <p className="text-xs text-[#6B7280] mt-0.5">
                      <span className="font-medium text-[#64748B]">Package: </span>
                      {service.quantity}
                      {qty > 1 ? ` × ${qty}` : ''}
                    </p>
                  ) : qty > 1 ? (
                    <p className="text-xs text-[#6B7280] mt-0.5">Quantity: {qty}</p>
                  ) : null}
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <p className="text-sm font-semibold text-[#0B2A4A] tabular-nums">${total.toFixed(2)}</p>
                  <button
                    type="button"
                    onClick={() => onRemoveService(service.id)}
                    className="text-[#6B7280] hover:text-red-600 transition-colors p-0.5"
                    aria-label={`Remove ${service.name}`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )
          })
        )}
      </div>

      <div className="border-t border-slate-200 pt-4 mb-4">
        <div className="flex justify-between items-center gap-4">
          <span className="font-semibold text-[#0B2A4A]">Total</span>
          <span className="text-2xl font-bold text-[#1E5AA8] tabular-nums">${computedTotal.toFixed(2)}</span>
        </div>
        <p className="text-xs text-[#6B7280] mt-1">USD</p>
      </div>

      <button
        type="button"
        disabled={selectedServices.length === 0}
        onClick={() => router.push('/checkout/review-payment')}
        className={[
          'w-full flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-sm font-semibold transition-all',
          selectedServices.length === 0
            ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
            : 'bg-[#1E5AA8] hover:bg-[#154080] text-white shadow-sm hover:shadow-md',
        ].join(' ')}
      >
        Submit Request
        <ArrowRight className="w-4 h-4" />
      </button>
      {selectedServices.length === 0 && (
        <p className="text-xs text-[#94A3B8] text-center mt-2">Add at least one service to continue</p>
      )}
    </div>
  )
}
