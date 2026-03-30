'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft, Check, Lock, CreditCard, Building2, User } from 'lucide-react'

export default function ReviewPaymentPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'United States',
    state: '',
    postalCode: '',
    isCompanyPurchase: false,
    paymentMethod: 'card',
    cardNumber: '',
    expiry: '',
    cvc: '',
    bankName: '',
    termsAccepted: false,
  })

  const [promoCode, setPromoCode] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.termsAccepted) {
      alert('Please accept the Terms & Conditions')
      return
    }
    setIsProcessing(true)
    setTimeout(() => {
      alert('Payment processing - Demo mode')
      setIsProcessing(false)
    }, 2000)
  }

  // Mock selected services
  const selectedServices = [
    { name: 'Landing Page Design', price: 349 },
    { name: 'Email Design', price: 249 },
    { name: 'UGC Videos', price: 699 },
    { name: 'SEO Backlinks', price: 499 },
    { name: 'Social Media Posts', price: 299 },
  ]

  const subtotal = selectedServices.reduce((sum, s) => sum + s.price, 0)
  const discount = promoCode === 'SAVE10' ? Math.round(subtotal * 0.1) : 0
  const total = subtotal - discount

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
            {/* Left Column - Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company Information */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center gap-3 mb-6">
                    <Building2 className="w-5 h-5 text-[#1E5AA8]" />
                    <h2 className="text-lg font-bold text-[#0B2A4A]">Company Information</h2>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0B2A4A] mb-2">
                      Company Name
                    </label>
                    <Input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Your Company Inc."
                      className="w-full"
                    />
                    <p className="text-xs text-[#6B7280] mt-1">
                      Write it exactly how you want us to mention it in your content.
                    </p>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center gap-3 mb-6">
                    <User className="w-5 h-5 text-[#1E5AA8]" />
                    <h2 className="text-lg font-bold text-[#0B2A4A]">Personal Information</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-[#0B2A4A] mb-2">
                        First Name
                      </label>
                      <Input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0B2A4A] mb-2">
                        Last Name
                      </label>
                      <Input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
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
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Billing Address */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <h2 className="text-lg font-bold text-[#0B2A4A] mb-6">Billing Address</h2>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-[#0B2A4A] mb-2">
                      Address
                    </label>
                    <Input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="123 Main Street"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-[#0B2A4A] mb-2">
                        City
                      </label>
                      <Input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="New York"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0B2A4A] mb-2">
                        Country
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                        <option>Australia</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-[#0B2A4A] mb-2">
                        State / Region
                      </label>
                      <Input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="NY"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0B2A4A] mb-2">
                        Postal / Zip Code
                      </label>
                      <Input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        placeholder="10001"
                        required
                      />
                    </div>
                  </div>
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="isCompanyPurchase"
                      checked={formData.isCompanyPurchase}
                      onChange={handleInputChange}
                      className="w-4 h-4 rounded border-slate-300 text-[#1E5AA8]"
                    />
                    <span className="text-sm text-[#6B7280]">I'm purchasing for a company</span>
                  </label>
                </div>

                {/* Payment Section */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center gap-3 mb-6">
                    <CreditCard className="w-5 h-5 text-[#1E5AA8]" />
                    <h2 className="text-lg font-bold text-[#0B2A4A]">Payment Method</h2>
                  </div>

                  {/* Payment Method Tabs */}
                  <div className="flex gap-4 mb-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleInputChange}
                        className="w-4 h-4"
                      />
                      <span className="text-sm font-medium text-[#0B2A4A]">Credit / Debit Card</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="bank"
                        checked={formData.paymentMethod === 'bank'}
                        onChange={handleInputChange}
                        className="w-4 h-4"
                      />
                      <span className="text-sm font-medium text-[#0B2A4A]">US Bank Account</span>
                    </label>
                  </div>

                  {formData.paymentMethod === 'card' ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-[#0B2A4A] mb-2">
                          Card Number
                        </label>
                        <Input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="4242 4242 4242 4242"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-[#0B2A4A] mb-2">
                            Expiration Date
                          </label>
                          <Input
                            type="text"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#0B2A4A] mb-2">
                            Security Code (CVC)
                          </label>
                          <Input
                            type="text"
                            name="cvc"
                            value={formData.cvc}
                            onChange={handleInputChange}
                            placeholder="123"
                            required
                          />
                        </div>
                      </div>
                      {/* Accepted Cards */}
                      <div className="pt-4 border-t border-slate-200">
                        <p className="text-xs text-[#6B7280] mb-3 font-medium">Accepted Cards:</p>
                        <div className="flex gap-3">
                          <span className="px-3 py-1 bg-slate-100 rounded text-xs font-medium text-[#0B2A4A]">Visa</span>
                          <span className="px-3 py-1 bg-slate-100 rounded text-xs font-medium text-[#0B2A4A]">Mastercard</span>
                          <span className="px-3 py-1 bg-slate-100 rounded text-xs font-medium text-[#0B2A4A]">Amex</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-sm font-medium text-[#0B2A4A] mb-3">
                        Select Your Bank
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {['Chase', 'Bank of America', 'Wells Fargo', 'Citibank', 'US Bank', 'Other'].map((bank) => (
                          <button
                            key={bank}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, bankName: bank }))}
                            className={`p-3 border-2 rounded-lg text-sm font-medium transition-all ${
                              formData.bankName === bank
                                ? 'border-[#1E5AA8] bg-blue-50 text-[#1E5AA8]'
                                : 'border-slate-200 text-[#6B7280] hover:border-slate-300'
                            }`}
                          >
                            {bank}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Terms Agreement */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleInputChange}
                      className="w-4 h-4 mt-1 rounded border-slate-300 text-[#1E5AA8]"
                      required
                    />
                    <span className="text-sm text-[#6B7280]">
                      By signing up I accept the{' '}
                      <Link href="/terms" className="text-[#1E5AA8] font-medium hover:underline">
                        Terms & Conditions
                      </Link>
                      {' '}and{' '}
                      <Link href="/refund" className="text-[#1E5AA8] font-medium hover:underline">
                        Refund Policy
                      </Link>
                      .
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-[#1E5AA8] text-white hover:bg-[#154080] py-4 rounded-lg font-semibold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  {isProcessing ? 'Processing...' : 'Complete Purchase →'}
                </Button>

                {/* Security Notice */}
                <div className="text-center pt-4">
                  <p className="text-xs text-[#6B7280] flex items-center justify-center gap-2">
                    <Lock className="w-3 h-3" />
                    Your payment information is secure and encrypted
                  </p>
                </div>
              </form>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 sticky top-24">
                {/* Header */}
                <h2 className="text-lg font-bold text-[#0B2A4A] mb-6">Summary</h2>

                {/* Promo Code */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-[#0B2A4A] mb-2">
                    Promo Code
                  </label>
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                      placeholder="Enter promo code"
                      className="flex-1"
                    />
                    <Button
                      type="button"
                      className="bg-slate-200 text-[#0B2A4A] hover:bg-slate-300 px-4"
                    >
                      Apply
                    </Button>
                  </div>
                </div>

                {/* Services List */}
                <div className="mb-6 pb-6 border-b border-slate-200">
                  <div className="space-y-3">
                    {selectedServices.map((service, idx) => (
                      <div key={idx} className="flex justify-between items-start">
                        <span className="text-sm text-[#6B7280]">{service.name}</span>
                        <span className="text-sm font-medium text-[#0B2A4A]">${service.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing Breakdown */}
                <div className="space-y-2 mb-6 pb-6 border-b border-slate-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#6B7280]">Subtotal</span>
                    <span className="text-[#0B2A4A] font-medium">${subtotal}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-green-600">Discount</span>
                      <span className="text-green-600 font-medium">-${discount}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="font-semibold text-[#0B2A4A]">Total (USD)</span>
                    <span className="text-2xl font-bold text-[#1E5AA8]">${total}</span>
                  </div>
                </div>

                {/* Testimonial Card */}
                <div className="bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100 rounded-lg p-4">
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
