'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { CheckCircle2 } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import {
  ORDER_DATA_STORAGE_KEY,
  parseOrderData,
  type StoredOrderData,
} from '@/components/checkout/checkout-cart-storage'

export default function CheckoutSuccessPage() {
  const router = useRouter()
  const [order, setOrder] = useState<StoredOrderData | null>(null)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const parsed = parseOrderData(localStorage.getItem(ORDER_DATA_STORAGE_KEY))
    setChecked(true)
    if (!parsed) {
      router.replace('/pricing')
      return
    }
    setOrder(parsed)
  }, [router])

  if (!checked || !order) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-sm text-[#6B7280]">Loading…</p>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <CheckCircle2 className="h-9 w-9" strokeWidth={2} aria-hidden />
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0B2A4A] mb-3">Order Submitted Successfully!</h1>
          <p className="text-base text-[#6B7280] mb-10">Thank you! Our agent will reach out to you shortly.</p>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm text-left p-6 sm:p-8 space-y-6">
            <div className="space-y-3 text-sm">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-[#64748B]">Your details</h2>
              <dl className="space-y-2 text-[#0B2A4A]">
                <div className="flex justify-between gap-4">
                  <dt className="text-[#6B7280]">Name</dt>
                  <dd className="font-medium text-right">{order.fullName}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#6B7280]">Email</dt>
                  <dd className="font-medium text-right break-all">{order.email}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#6B7280]">Phone</dt>
                  <dd className="font-medium text-right">{order.phoneNumber}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#6B7280]">Submission Date</dt>
                  <dd className="font-medium text-right">{order.submissionDate}</dd>
                </div>
                {order.serviceInterestedIn ? (
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#6B7280]">Service interested in</dt>
                    <dd className="font-medium text-right">{order.serviceInterestedIn}</dd>
                  </div>
                ) : null}
              </dl>
            </div>

            <div className="border-t border-slate-100 pt-6 space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-[#64748B]">Selected services</h2>
              <ul className="space-y-3">
                {order.selectedServices.map((item, i) => (
                  <li key={`${item.name}-${i}`} className="text-sm">
                    <p className="font-semibold text-[#0B2A4A]">
                      {item.name}
                      <span className="text-[#1E5AA8] tabular-nums"> – ${item.price.toFixed(2)}</span>
                    </p>
                    {item.selectedPackage ? (
                      <p className="text-xs text-[#6B7280] mt-1">Selected package: {item.selectedPackage}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <div className="flex justify-between items-baseline gap-4">
                <span className="text-base font-bold text-[#0B2A4A]">Total Price</span>
                <span className="text-xl font-bold text-[#1E5AA8] tabular-nums">${order.totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-[#6B7280] mt-1">USD</p>
            </div>

            {order.message?.trim() ? (
              <div className="border-t border-slate-100 pt-6 text-sm text-left">
                <h2 className="text-xs font-semibold uppercase tracking-wide text-[#64748B] mb-2">
                  Additional Notes
                </h2>
                <p className="text-[#0B2A4A] whitespace-pre-wrap leading-relaxed">{order.message.trim()}</p>
              </div>
            ) : null}
          </div>

          <Link
            href="/"
            className="inline-flex mt-10 w-full sm:w-auto justify-center rounded-lg bg-[#1E5AA8] px-8 py-3 font-semibold text-white hover:bg-[#154080] transition-colors shadow-sm"
          >
            Return Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
