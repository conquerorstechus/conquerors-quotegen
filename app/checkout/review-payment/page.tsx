'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft, Send, Trash2, User } from 'lucide-react'
import { usePersistedCheckoutCart } from '@/hooks/use-persisted-checkout-cart'
import {
  CHECKOUT_REVIEW_FORM_STORAGE_KEY,
  ORDER_DATA_STORAGE_KEY,
  lineItemTotal,
  type StoredOrderData,
} from '@/components/checkout/checkout-cart-storage'

type ReviewFormState = {
  fullName: string
  email: string
  phoneNumber: string
  message: string
}

const defaultForm: ReviewFormState = {
  fullName: '',
  email: '',
  phoneNumber: '',
  message: '',
}

export default function ReviewPaymentPage() {
  const router = useRouter()
  const { lines, removeLine, hydrated: cartHydrated } = usePersistedCheckoutCart()
  const [formData, setFormData] = useState<ReviewFormState>(defaultForm)
  const [formHydrated, setFormHydrated] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      const raw = localStorage.getItem(CHECKOUT_REVIEW_FORM_STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<ReviewFormState>
        setFormData((prev) => ({
          ...prev,
          ...parsed,
          fullName: typeof parsed.fullName === 'string' ? parsed.fullName : prev.fullName,
          email: typeof parsed.email === 'string' ? parsed.email : prev.email,
          phoneNumber: typeof parsed.phoneNumber === 'string' ? parsed.phoneNumber : prev.phoneNumber,
          message: typeof parsed.message === 'string' ? parsed.message : prev.message,
        }))
      }
    } catch {
      /* ignore */
    }
    setFormHydrated(true)
  }, [])

  useEffect(() => {
    if (!formHydrated || typeof window === 'undefined') return
    try {
      localStorage.setItem(CHECKOUT_REVIEW_FORM_STORAGE_KEY, JSON.stringify(formData))
    } catch {
      /* ignore */
    }
  }, [formData, formHydrated])

  const subtotal = useMemo(() => lines.reduce((sum, s) => sum + lineItemTotal(s), 0), [lines])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phoneNumber.trim()) return
    if (lines.length === 0) return

    setIsSubmitting(true)

    const submittedAtIso = new Date().toISOString()
    const submissionDate = new Date().toLocaleDateString()

    const orderData: StoredOrderData = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phoneNumber: formData.phoneNumber.trim(),
      message: formData.message.trim() || undefined,
      submissionDate,
      submittedAtIso,
      selectedServices: lines.map((s) => ({
        name: s.name,
        selectedPackage: s.quantity
          ? `${s.quantity}${(s.lineQty ?? 1) > 1 ? ` × ${s.lineQty}` : ''}`
          : undefined,
        price: lineItemTotal(s),
      })),
      totalPrice: subtotal,
    }

    try {
      localStorage.setItem(ORDER_DATA_STORAGE_KEY, JSON.stringify(orderData))
    } catch (e) {
      console.error('Failed to save order confirmation:', e)
      setIsSubmitting(false)
      return
    }

    try {
      const webhookUrl =
        process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL || process.env.NEXT_PUBLIC_WEBHOOK_URL || ''

      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            cartLines: lines.map((s) => ({
              id: s.id,
              name: s.name,
              package: s.quantity,
              basePrice: s.basePrice,
              lineQty: s.lineQty ?? 1,
              lineTotal: lineItemTotal(s),
            })),
            subtotal,
            source: 'checkout/review-payment',
            submittedAt: submittedAtIso,
          }),
        })
      }
    } catch (err) {
      console.error('Webhook submit failed:', err)
    } finally {
      setIsSubmitting(false)
      router.push('/checkout/success')
    }
  }

  const formReady = cartHydrated && formHydrated
  const canSubmit =
    formReady &&
    lines.length > 0 &&
    formData.fullName.trim() &&
    formData.email.trim() &&
    formData.phoneNumber.trim() &&
    !isSubmitting

  return (
    <main className="min-h-screen bg-slate-50 transition-colors duration-200">
      <Header />
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/checkout"
            className="inline-flex items-center gap-2 text-[#1E5AA8] hover:text-[#154080] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* 1 — User details */}
            <section className="order-1 h-full">
              <form
                id="checkout-review-form"
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-7 h-full flex flex-col transition-shadow duration-200 hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-6">
                  <User className="w-5 h-5 text-[#1E5AA8]" aria-hidden />
                  <h2 className="text-lg font-bold text-[#0B2A4A]">Your Details</h2>
                </div>

                <div className="space-y-5 flex-1">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-[#0B2A4A] mb-2">
                      Full Name
                    </label>
                    <Input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="w-full"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#0B2A4A] mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-[#0B2A4A] mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      required
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#0B2A4A] mb-2">
                      Message <span className="text-[#6B7280] font-normal">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us what you’re looking for, any goals, and your timeline."
                      rows={5}
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]"
                    />
                  </div>
                </div>
              </form>
            </section>

            {/* 2 — Selected services (editable) */}
            <section className="order-2 h-full">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-7 h-full flex flex-col transition-shadow duration-200 hover:shadow-md">
                <h2 className="text-lg font-bold text-[#0B2A4A] mb-6">Selected services</h2>
                <div className="flex-1 min-h-[12rem] space-y-3">
                  {lines.length === 0 ? (
                    <p className="text-sm text-[#6B7280] text-center py-10">No services selected</p>
                  ) : (
                    lines.map((s) => {
                      const total = lineItemTotal(s)
                      const pkg = s.quantity
                      return (
                        <div
                          key={s.id}
                          className="flex gap-3 items-start justify-between rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3"
                        >
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-semibold text-[#0B2A4A]">{s.name}</p>
                            {pkg ? (
                              <p className="text-xs text-[#6B7280] mt-1">
                                Package: {pkg}
                                {(s.lineQty ?? 1) > 1 ? ` × ${s.lineQty}` : ''}
                              </p>
                            ) : null}
                            <p className="text-sm font-semibold text-[#1E5AA8] mt-2 tabular-nums">${total.toFixed(2)}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeLine(s.id)}
                            className="shrink-0 rounded-lg p-2 text-[#6B7280] hover:bg-red-50 hover:text-red-600 transition-colors"
                            aria-label={`Remove ${s.name}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      )
                    })
                  )}
                </div>
              </div>
            </section>

            {/* 3 — Summary + CTA (sticky on desktop) */}
            <section className="order-3 md:col-span-2 xl:col-span-1 md:order-3 h-full">
              <div className="xl:sticky xl:top-24 flex flex-col gap-4 h-full">
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-7 flex flex-col transition-shadow duration-200 hover:shadow-md">
                  <h2 className="text-lg font-bold text-[#0B2A4A] mb-6">Summary</h2>

                  <div className="mb-4 max-h-48 overflow-y-auto space-y-2 pr-1">
                    {lines.length === 0 ? (
                      <p className="text-sm text-[#6B7280]">No items in summary</p>
                    ) : (
                      lines.map((s) => (
                        <div key={s.id} className="flex justify-between gap-2 text-sm">
                          <span className="text-[#6B7280] truncate" title={s.name}>
                            {s.name}
                          </span>
                          <span className="font-medium text-[#0B2A4A] tabular-nums shrink-0">
                            ${lineItemTotal(s).toFixed(2)}
                          </span>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="border-t border-slate-200 pt-4 space-y-3">
                    <div className="flex justify-between text-sm text-[#0B2A4A]">
                      <span>Subtotal</span>
                      <span className="font-semibold tabular-nums">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-baseline gap-4 pt-2 border-t border-slate-100">
                      <span className="text-base font-bold text-[#0B2A4A]">Total</span>
                      <span className="text-2xl font-bold text-[#1E5AA8] tabular-nums">${subtotal.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-[#6B7280]">USD</p>
                  </div>


                  <Button
                    type="submit"
                    form="checkout-review-form"
                    disabled={!canSubmit}
                    className="mt-6 w-full bg-[#1E5AA8] text-white hover:bg-[#154080] py-3.5 rounded-lg font-semibold text-base transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? 'Submitting...' : 'Submit Request →'}
                  </Button>

                  {lines.length === 0 && formReady && (
                    <p className="mt-3 text-center text-xs text-amber-700">
                      Add at least one service on the previous step to continue.
                    </p>
                  )}

                  <p className="mt-4 text-xs text-[#6B7280] leading-relaxed">
                    By submitting, you’re requesting a consultation. No payment will be processed.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
