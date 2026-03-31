'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft, User, Send, MessageSquare } from 'lucide-react'

export default function ReviewPaymentPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  })

  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesDropdownRef = useRef<HTMLDivElement | null>(null)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const serviceOptions = useMemo(() => {
    const base = [
      'Static Ads',
      'Video Ads',
      'Meta Ads Management',
      'Google Ads Management',
      'SEO',
      'Short-Form Videos',
      'Instagram Growth',
      'Email Design',
      'Landing Page Design',
    ]
    return Array.from(new Set(base))
  }, [])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service],
    )
  }

  const removeService = (service: string) => {
    setSelectedServices((prev) => prev.filter((s) => s !== service))
  }

  useEffect(() => {
    if (!servicesOpen) return
    const onMouseDown = (event: MouseEvent) => {
      const target = event.target as Node
      if (!servicesDropdownRef.current) return
      if (!servicesDropdownRef.current.contains(target)) setServicesOpen(false)
    }
    document.addEventListener('mousedown', onMouseDown)
    return () => document.removeEventListener('mousedown', onMouseDown)
  }, [servicesOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phoneNumber.trim()) return

    setIsSubmitting(true)
    try {
      const webhookUrl =
        process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL ||
        process.env.NEXT_PUBLIC_WEBHOOK_URL ||
        ''

      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            selectedServices,
            source: 'checkout/review-payment',
            submittedAt: new Date().toISOString(),
          }),
        })
      }
    } catch (err) {
      // Webhook is optional; still show success to the user.
      console.error('Webhook submit failed:', err)
    } finally {
      setIsSubmitting(false)
      setIsSuccess(true)
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Link */}
          <Link
            href="/checkout"
            className="inline-flex items-center gap-2 text-[#1E5AA8] hover:text-[#154080] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          {/* Main Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Lead Capture Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {isSuccess && (
                  <div className="bg-green-50 border border-green-100 rounded-2xl p-5 shadow-sm">
                    <p className="text-[#0B2A4A] font-semibold text-lg">
                      Thank you! Our agent will reach out to you shortly.
                    </p>
                  </div>
                )}

                {/* Full Name */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center gap-3 mb-6">
                    <User className="w-5 h-5 text-[#1E5AA8]" />
                    <h2 className="text-lg font-bold text-[#0B2A4A]">Your Details</h2>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0B2A4A] mb-2">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#0B2A4A] mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0B2A4A] mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Service Interested In */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Send className="w-5 h-5 text-[#1E5AA8]" />
                    <h2 className="text-lg font-bold text-[#0B2A4A]">Service Interested In</h2>
                  </div>
                  <label className="block text-sm font-medium text-[#0B2A4A] mb-2">
                    Optional
                  </label>

                  <div className="relative" ref={servicesDropdownRef}>
                    <div
                      role="button"
                      tabIndex={0}
                      aria-expanded={servicesOpen}
                      aria-haspopup="listbox"
                      aria-label="Select services"
                      onClick={() => setServicesOpen((v) => !v)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          setServicesOpen((v) => !v)
                        }
                      }}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-[#1E5AA8] flex flex-wrap gap-2 items-center cursor-pointer"
                    >
                      {selectedServices.length === 0 ? (
                        <span className="text-sm text-[#6B7280]">Select services (optional)</span>
                      ) : (
                        selectedServices.map((s) => (
                          <span
                            key={s}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E5AA8]/10 text-[#0B2A4A] text-sm"
                          >
                            {s}
                            <button
                              type="button"
                              aria-label={`Remove ${s}`}
                              onClick={(ev) => {
                                ev.stopPropagation()
                                removeService(s)
                              }}
                              className="text-[#1E5AA8] hover:text-[#154080] font-bold leading-none"
                            >
                              ×
                            </button>
                          </span>
                        ))
                      )}
                    </div>

                    {servicesOpen && (
                      <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-300 rounded-lg shadow-sm z-10 p-3">
                        <div className="space-y-2 max-h-56 overflow-auto pr-1">
                          {serviceOptions.map((opt) => {
                            const checked = selectedServices.includes(opt)
                            return (
                              <label
                                key={opt}
                                className="flex items-center gap-3 cursor-pointer text-sm text-[#0B2A4A]"
                              >
                                <input
                                  type="checkbox"
                                  checked={checked}
                                  onChange={() => toggleService(opt)}
                                suppressHydrationWarning
                                  className="w-4 h-4 rounded border-slate-300 text-[#1E5AA8]"
                                />
                                <span className="leading-tight">{opt}</span>
                              </label>
                            )
                          })}
                        </div>
                        {selectedServices.length > 0 && (
                          <div className="pt-3">
                            <button
                              type="button"
                              onClick={() => setSelectedServices([])}
                              suppressHydrationWarning
                              className="text-sm font-medium text-[#1E5AA8] hover:text-[#154080]"
                            >
                              Clear selection
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="w-5 h-5 text-[#1E5AA8]" />
                    <h2 className="text-lg font-bold text-[#0B2A4A]">Message</h2>
                  </div>
                  <label className="block text-sm font-medium text-[#0B2A4A] mb-2">
                    Optional
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us what you’re looking for, any goals, and your timeline."
                    className="w-full min-h-[120px] px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1E5AA8] text-white hover:bg-[#154080] py-4 rounded-lg font-semibold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Submitting...' : 'Submit Request →'}
                </Button>
              </form>
            </div>

            {/* Right Column - Selected Services (No Pricing) */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 sticky top-24">
                <h2 className="text-lg font-bold text-[#0B2A4A] mb-6">Selected Services</h2>

                <div className="space-y-3">
                  {selectedServices.length === 0 ? (
                    <p className="text-sm text-[#6B7280]">No services selected.</p>
                  ) : (
                    selectedServices.map((service) => (
                      <div key={service} className="flex justify-between items-start gap-3">
                        <span className="text-sm text-[#6B7280]">{service}</span>
                      </div>
                    ))
                  )}
                </div>

                <div className="pt-6">
                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    By submitting, you’re requesting a consultation. No payment will be processed.
                  </p>
                </div>

                {/* Testimonial Card */}
                <div className="mt-6 bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100 rounded-lg p-4">
                  <div className="mb-3">
                    <p className="text-sm text-[#0B2A4A] italic font-medium">
                      "Conquerors creates marketing content that is better and more cost effective than doing it in-house."
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#1E5AA8]" />
                    <div>
                      <p className="text-xs font-semibold text-[#0B2A4A]">Happy Customer</p>
                      <p className="text-xs text-[#6B7280]">✓ Verified Review</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
