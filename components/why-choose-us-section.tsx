'use client'

import { Check, AlertCircle, Lightbulb, Workflow } from "lucide-react"

export function WhyChooseUsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B2A4A] mb-4 text-balance">
            Why Businesses Choose Our Social Media Service
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Discover how we transform your social media presence
          </p>
        </div>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* Card 1: The Problem */}
          <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-10 border border-slate-100">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>

            <h3 className="text-sm font-bold tracking-widest text-[#1E5AA8] mb-3 uppercase">
              THE PROBLEM
            </h3>
            <h4 className="text-2xl font-bold text-[#0B2A4A] mb-8 leading-tight">
              Social Media Is Time-Consuming and Hard to Maintain
            </h4>

            <div className="space-y-4 mb-8">
              <p className="font-semibold text-[#0B2A4A] text-sm">Most businesses struggle with:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#1E5AA8] font-bold text-lg mt-0.5">•</span>
                  <span className="text-[#6B7280]">Posting consistently</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1E5AA8] font-bold text-lg mt-0.5">•</span>
                  <span className="text-[#6B7280]">Creating engaging designs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1E5AA8] font-bold text-lg mt-0.5">•</span>
                  <span className="text-[#6B7280]">Writing captions that convert</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1E5AA8] font-bold text-lg mt-0.5">•</span>
                  <span className="text-[#6B7280]">Keeping up with trends and algorithms</span>
                </li>
              </ul>
            </div>

            {/* Highlighted Warning Box */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-4 mt-8">
              <p className="text-[#0B2A4A] font-bold text-sm">
                Hiring a full-time marketer can cost <span className="text-black-600">$999 / month.</span>
              </p>
            </div>
          </div>

          {/* Card 2: The Solution */}
          <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-10 border border-slate-100">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Lightbulb className="w-8 h-8 text-emerald-600" />
            </div>

            <h3 className="text-sm font-bold tracking-widest text-[#1E5AA8] mb-3 uppercase">
              THE SOLUTION
            </h3>
            <h4 className="text-2xl font-bold text-[#0B2A4A] mb-6 leading-tight">
              Your Complete Social Media Team — For Less Than the Cost of a Coffee Per Day
            </h4>

            <p className="text-[#6B7280] mb-8 font-medium text-sm">
              We handle everything so you can focus on running your business.
            </p>

            <div className="space-y-3 mb-10">
              {[
                'Social media content design',
                'Carousel post creation',
                'Short-form video editing',
                'Caption writing & hashtags',
                'Scheduling and posting',
                'Monthly performance insights'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1 font-bold" />
                  <span className="text-[#0B2A4A] font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Highlighted Quote */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-4">
              <p className="text-[#0B2A4A] font-semibold italic text-sm">
                "You approve the content — we handle the rest @ Just $99/month"
              </p>
            </div>
          </div>

          {/* Card 3: How It Works */}
          <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-10 border border-slate-100">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Workflow className="w-8 h-8 text-blue-600" />
            </div>

            <h3 className="text-sm font-bold tracking-widest text-[#1E5AA8] mb-3 uppercase">
              HOW IT WORKS
            </h3>
            <h4 className="text-2xl font-bold text-[#0B2A4A] mb-10 leading-tight">
              Simple 3-Step Process
            </h4>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                    1
                  </div>
                  <div className="flex-1 pt-1">
                    <h5 className="font-bold text-[#0B2A4A] mb-1 text-lg">
                      Tell Us About Your Brand
                    </h5>
                    <p className="text-[#6B7280] text-sm leading-relaxed">
                      Share your brand details, audience, and goals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                    2
                  </div>
                  <div className="flex-1 pt-1">
                    <h5 className="font-bold text-[#0B2A4A] mb-1 text-lg">
                      We Create Your Content
                    </h5>
                    <p className="text-[#6B7280] text-sm leading-relaxed">
                      Our designers and strategists prepare your monthly posts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                    3
                  </div>
                  <div className="flex-1 pt-1">
                    <h5 className="font-bold text-[#0B2A4A] mb-1 text-lg">
                      You Approve & We Publish
                    </h5>
                    <p className="text-[#6B7280] text-sm leading-relaxed">
                      We schedule and publish content consistently so your social media stays active.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
