'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Gift, Star, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react'

const AVAILABLE_TIMES = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']

const SERVICES = ['Social Media Posts', 'Videos', 'Instagram Growth', 'Meta Ads', 'Email Design', 'SEO Blog Posts']

export default function ScheduleDemoPage() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [timezone, setTimezone] = useState('EST')

  // Form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    expectations: '',
    services: [] as string[],
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const monthName = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })
  const daysInMonth = getDaysInMonth(currentMonth)
  const firstDay = getFirstDayOfMonth(currentMonth)

  const calendarDays = Array.from({ length: firstDay }).fill(null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  )

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const isAvailableDate = (day: number | null) => {
    if (!day) return false
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    const today = new Date()
    return date > today
  }

  const handleFormChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (formData.services.length === 0) newErrors.services = 'Select at least one service'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (step === 1 && !selectedDate) {
      setErrors({ date: 'Please select a date' })
      return
    }
    if (step === 2 && !selectedTime) {
      setErrors({ time: 'Please select a time' })
      return
    }
    if (step === 3) {
      if (!validateForm()) return
    }
    
    setErrors({})
    if (step < 4) {
      setStep((step + 1) as 1 | 2 | 3 | 4)
    }
  }

  const handleSubmit = async () => {
    if (!validateForm()) return
    try {
      const res = await fetch('https://n8n.srv1393511.hstgr.cloud/webhook/f5207162-9dad-4d57-b6b1-7aa616d73d01', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.expectations,
          services: formData.services,
          selectedDate: selectedDate ? selectedDate.toISOString() : null,
          selectedTime,
          timezone,
          source: 'schedule-demo',
          submittedAt: new Date().toISOString(),
        }),
      })
      if (!res.ok) throw new Error('Request failed')
    } catch (err) {
      console.error('Webhook error:', err)
      alert('Submission failed')
      return
    }
    setStep(4)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-blue-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-dark.png"
                alt="Conquerors Software Technologies"
                width={280}
                height={80}
                className="h-16 w-auto"
                priority
              />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-[#6B7280] hover:text-[#0B2A4A] transition-colors">
                Company
              </Link>
              <Link href="/pricing" className="text-[#6B7280] hover:text-[#0B2A4A] transition-colors">
                Services
              </Link>
              <Link href="/examples" className="text-[#6B7280] hover:text-[#0B2A4A] transition-colors">
                Examples
              </Link>
              <Link href="/pricing" className="text-[#6B7280] hover:text-[#0B2A4A] transition-colors">
                Pricing
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" className="text-[#6B7280] hover:text-[#0B2A4A]">
                Log in
              </Button>
              <Link href="/pricing">
                <Button className="bg-[#1E5AA8] text-white hover:bg-[#154080]">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-4">Schedule Your Demo</h1>
            <p className="text-lg text-[#6B7280]">
              {step === 1 && 'Select your preferred date'}
              {step === 2 && 'Choose your time slot'}
              {step === 3 && 'Tell us more about yourself'}
              {step === 4 && 'You\'re all set!'}
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mb-12">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`h-2 w-12 rounded-full transition-colors ${
                  s <= step ? 'bg-[#1E5AA8]' : 'bg-blue-100'
                }`}
              />
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Card - Info */}
            <div className="bg-white border border-blue-100 rounded-2xl p-8 h-fit">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#0B2A4A] mb-2">Conquerors Intro</h2>
                <p className="text-[#6B7280]">20 minutes</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Gift className="w-5 h-5 text-[#1E5AA8] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0B2A4A]">Join the demo to unlock a special bonus</span>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-[#1E5AA8] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0B2A4A]">700+ 5-star reviews</span>
                </div>
              </div>

              <p className="text-[#6B7280] mb-6 leading-relaxed">
                In this 20-minute introductory call, you'll learn how Conquerors Digital helps businesses like yours scale their social media presence with professional content from our top 1% creative talent. We'll discuss your specific needs and show you how our affordable, flexible plans work.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-[#6B7280]">
                  <strong>Note:</strong> Please join from a desktop or laptop device for the best experience.
                </p>
              </div>

              {step >= 2 && selectedDate && (
                <div className="mt-6 pt-6 border-t border-blue-100">
                  <p className="text-sm text-[#6B7280] mb-2">Selected Date & Time:</p>
                  <p className="text-lg font-semibold text-[#0B2A4A]">
                    {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    {selectedTime && ` at ${selectedTime}`}
                  </p>
                </div>
              )}
            </div>

            {/* Right Card - Dynamic Content */}
            <div className="bg-white border border-blue-100 rounded-2xl p-8">
              {/* Step 1: Date Selection */}
              {step === 1 && (
                <div>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-[#0B2A4A]">{monthName}</h3>
                      <div className="flex gap-2">
                        <button onClick={prevMonth} className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
                          <ChevronLeft className="w-5 h-5 text-[#1E5AA8]" />
                        </button>
                        <button onClick={nextMonth} className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
                          <ChevronRight className="w-5 h-5 text-[#1E5AA8]" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-7 gap-2 mb-6">
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                        <div key={day} className="text-center text-sm font-semibold text-[#6B7280] py-2">
                          {day}
                        </div>
                      ))}
                      {calendarDays.map((day, index) => (
                        <button
                          key={index}
                          disabled={!isAvailableDate(day)}
                          onClick={() => day && setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))}
                          className={`py-2 rounded-lg text-sm font-medium transition-all ${
                            !day || !isAvailableDate(day)
                              ? 'cursor-default text-[#D1D5DB] bg-gray-50'
                              : selectedDate?.getDate() === day && selectedDate?.getMonth() === currentMonth.getMonth()
                              ? 'bg-[#1E5AA8] text-white'
                              : 'bg-blue-50 text-[#0B2A4A] hover:bg-blue-100'
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>

                  {errors.date && <p className="text-sm text-red-600 mb-4">{errors.date}</p>}

                  <Button
                    onClick={handleNext}
                    disabled={!selectedDate}
                    className="w-full bg-[#1E5AA8] text-white hover:bg-[#154080] disabled:bg-gray-300"
                  >
                    Continue to Time Selection
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              )}

              {/* Step 2: Time Selection */}
              {step === 2 && (
                <div>
                  <h3 className="text-lg font-bold text-[#0B2A4A] mb-4">Available Times</h3>
                  <p className="text-sm text-[#6B7280] mb-4">
                    {selectedDate?.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {AVAILABLE_TIMES.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                          selectedTime === time
                            ? 'bg-[#1E5AA8] text-white'
                            : 'bg-blue-50 text-[#0B2A4A] hover:bg-blue-100'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-[#0B2A4A] mb-3">Time Zone</label>
                    <select
                      value={timezone}
                      onChange={(e) => setTimezone(e.target.value)}
                      className="w-full border border-blue-200 rounded-lg px-4 py-2 text-[#0B2A4A] bg-white focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]"
                    >
                      <option value="EST">Eastern Standard Time (EST)</option>
                      <option value="CST">Central Standard Time (CST)</option>
                      <option value="PST">Pacific Standard Time (PST)</option>
                      <option value="GMT">Greenwich Mean Time (GMT)</option>
                      <option value="CET">Central European Time (CET)</option>
                      <option value="IST">India Standard Time (IST)</option>
                      <option value="JST">Japan Standard Time (JST)</option>
                    </select>
                  </div>

                  {errors.time && <p className="text-sm text-red-600 mb-4">{errors.time}</p>}

                  <div className="flex gap-3">
                    <Button
                      onClick={() => setStep(1)}
                      variant="outline"
                      className="flex-1 border-[#1E5AA8] text-[#1E5AA8] hover:bg-blue-50"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleNext}
                      disabled={!selectedTime}
                      className="flex-1 bg-[#1E5AA8] text-white hover:bg-[#154080] disabled:bg-gray-300"
                    >
                      Continue
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Details Form */}
              {step === 3 && (
                <div>
                  <h3 className="text-lg font-bold text-[#0B2A4A] mb-6">Your Details</h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0B2A4A] mb-2">Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleFormChange('name', e.target.value)}
                        className="w-full border border-blue-200 rounded-lg px-4 py-2 text-[#0B2A4A] focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]"
                        placeholder="Your name"
                      />
                      {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0B2A4A] mb-2">Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleFormChange('email', e.target.value)}
                        className="w-full border border-blue-200 rounded-lg px-4 py-2 text-[#0B2A4A] focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]"
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0B2A4A] mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleFormChange('phone', e.target.value)}
                        className="w-full border border-blue-200 rounded-lg px-4 py-2 text-[#0B2A4A] focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]"
                        placeholder="+1 (555) 000-0000"
                      />
                      {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0B2A4A] mb-2">What results are you expecting?</label>
                      <textarea
                        value={formData.expectations}
                        onChange={(e) => handleFormChange('expectations', e.target.value)}
                        className="w-full border border-blue-200 rounded-lg px-4 py-2 text-[#0B2A4A] focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]"
                        placeholder="Tell us about your goals..."
                        rows={4}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0B2A4A] mb-3">Services Interested In *</label>
                      <div className="space-y-2">
                        {SERVICES.map((service) => (
                          <label key={service} className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.services.includes(service)}
                              onChange={() => handleServiceToggle(service)}
                              className="w-4 h-4 rounded border-blue-200 text-[#1E5AA8] focus:ring-[#1E5AA8]"
                            />
                            <span className="text-[#0B2A4A] text-sm">{service}</span>
                          </label>
                        ))}
                      </div>
                      {errors.services && <p className="text-sm text-red-600 mt-2">{errors.services}</p>}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={() => setStep(2)}
                      variant="outline"
                      className="flex-1 border-[#1E5AA8] text-[#1E5AA8] hover:bg-blue-50"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      className="flex-1 bg-[#1E5AA8] text-white hover:bg-[#154080]"
                    >
                      Schedule Event
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {step === 4 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B2A4A] mb-2">Demo Scheduled Successfully!</h3>
                  <p className="text-[#6B7280] mb-6">
                    We've sent a confirmation email to <strong>{formData.email}</strong>. You'll receive a calendar invite shortly.
                  </p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-left">
                    <p className="text-sm text-[#6B7280] mb-2"><strong>Demo Details:</strong></p>
                    <p className="text-sm text-[#0B2A4A]">
                      {selectedDate?.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} at {selectedTime} {timezone}
                    </p>
                  </div>

                  <Link href="/">
                    <Button className="w-full bg-[#1E5AA8] text-white hover:bg-[#154080]">
                      Back to Home
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="w-14 h-14 rounded-full bg-[#1E5AA8] text-white shadow-lg hover:bg-[#154080] transition-all flex items-center justify-center">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}
