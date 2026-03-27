import Link from 'next/link'

export function InstagramGrowthHero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F9FF] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-[#1E5AA8] bg-blue-50 px-3 py-1 rounded-full flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                INSTAGRAM GROWTH EXPERTS
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-[#0B2A4A] leading-tight">
              Grow your Instagram with real & targeted followers
            </h1>

            <p className="text-xl text-[#6B7280] leading-relaxed">
              Get 100-400+ relevant followers every month through strategic, authentic engagement. No bots, no fake accounts—just real growth.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[#0B2A4A]">
                <div className="w-5 h-5 rounded-full bg-[#1E5AA8] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Gain 100-400+ relevant followers per month</span>
              </li>
              <li className="flex items-center gap-3 text-[#0B2A4A]">
                <div className="w-5 h-5 rounded-full bg-[#1E5AA8] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Strategic follow/unfollow by experts (not bots)</span>
              </li>
              <li className="flex items-center gap-3 text-[#0B2A4A]">
                <div className="w-5 h-5 rounded-full bg-[#1E5AA8] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>100% compliant with Instagram's terms of service</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/schedule-demo">
                <button className="bg-[#1E5AA8] hover:bg-[#154080] text-white px-8 py-3 text-lg rounded-lg font-semibold flex items-center gap-2 transition-colors">
                  Schedule a free demo call
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
            </div>

           

            <div className="pt-6">
              <p className="text-sm text-[#6B7280] mb-3">Supported social media channels</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FD5949] to-[#D6249F] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Instagram Mockup */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-80 bg-white rounded-3xl shadow-2xl border-8 border-gray-800 overflow-hidden">
              {/* Phone Status Bar */}
              <div className="bg-black text-white px-6 py-2 text-center text-xs font-semibold flex justify-between items-center">
                <span>9:41</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                </svg>
              </div>

              {/* Instagram Profile */}
              <div className="p-4 space-y-4">
                {/* Profile Header */}
                <div className="flex items-center justify-between">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5h18v2H3V5zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
                  </svg>
                  <span className="font-semibold text-sm">tastybites</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  </svg>
                </div>

                {/* Profile Image & Stats */}
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 to-red-500 flex-shrink-0"></div>
                  <div className="flex-1 space-y-1">
                    <p className="font-bold text-sm">tastybites</p>
                    <p className="text-xs text-gray-600">Food & Drink</p>
                    <p className="text-xs">🍰 Bringing flavors to life!</p>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="bg-red-500 text-white rounded-lg p-3 flex justify-around text-center text-xs font-bold">
                  <div>
                    <div>144</div>
                    <div className="text-red-100">likes</div>
                  </div>
                  <div>
                    <div>342</div>
                    <div className="text-red-100">shares</div>
                  </div>
                  <div>
                    <div>27</div>
                    <div className="text-red-100">comments</div>
                  </div>
                </div>

                {/* Follower Stats */}
                <div className="space-y-2 bg-gray-50 rounded-lg p-3">
                  <div className="flex justify-between text-xs">
                    <span>Stories views 34</span>
                    <span>9,237 Followers</span>
                    <span>124 Following</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">12,815</span>
                    <span className="text-xs text-green-600 font-semibold">52%</span>
                  </div>
                </div>

                {/* Posts Grid */}
                <div className="grid grid-cols-3 gap-1">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-square bg-gradient-to-br from-blue-300 to-pink-300 rounded"></div>
                  ))}
                </div>

                {/* Followers Gained Badge */}
                <div className="bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200 rounded-lg p-2 text-center text-xs">
                  <p className="font-bold text-blue-900">Followers gained</p>
                  <p className="text-blue-700 font-semibold">30 <span className="text-green-600">8.7%</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
