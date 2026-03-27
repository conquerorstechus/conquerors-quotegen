import Link from 'next/link'

export function MetaAdsHero() {
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
                #1 MARKETING DELIVERABLES PLATFORM
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-[#0B2A4A] leading-tight">
              Meta Ads Management from only <span className="text-[#1E5AA8]">$499/mo</span>
            </h1>

            <p className="text-xl text-[#6B7280] leading-relaxed">
              Maximize your Facebook and Instagram ad performance with expert strategy, data-driven optimization, and continuous testing to grow your business efficiently.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[#0B2A4A]">
                <div className="w-5 h-5 rounded-full bg-[#1E5AA8] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Maximize your ad performance with expert strategy</span>
              </li>
              <li className="flex items-center gap-3 text-[#0B2A4A]">
                <div className="w-5 h-5 rounded-full bg-[#1E5AA8] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Improve results while reducing wasted spend</span>
              </li>
              <li className="flex items-center gap-3 text-[#0B2A4A]">
                <div className="w-5 h-5 rounded-full bg-[#1E5AA8] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Scale your business with data-driven advertising</span>
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

          </div>

          {/* Right - Dashboard Mockup */}
          <div className="hidden lg:block">
            <div className="bg-white border border-blue-200 rounded-xl p-6 shadow-lg space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-blue-100">
                <h3 className="font-semibold text-[#0B2A4A]">Monday - May 18</h3>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <div className="w-8 h-8 rounded-full bg-blue-200" />
                  <span>Hi, Carina</span>
                </div>
              </div>

              {/* Ad Examples Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#F5F9FF] rounded-lg h-24" />
                <div className="bg-[#F5F9FF] rounded-lg h-24" />
                <div className="bg-[#F5F9FF] rounded-lg h-24" />
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <p className="text-xs text-[#6B7280] mb-1">ROAS</p>
                  <p className="text-lg font-semibold text-[#0B2A4A]">4:3</p>
                  <p className="text-xs text-[#6B7280]">Last month</p>
                </div>
                <div>
                  <p className="text-xs text-[#6B7280] mb-1">Sales</p>
                  <p className="text-lg font-semibold text-[#0B2A4A]">1,242</p>
                </div>
              </div>

              {/* Revenue Section */}
              <div className="bg-gradient-to-r from-blue-50 to-[#F5F9FF] rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-[#0B2A4A]">Revenue</span>
                  <span className="text-xs text-green-600 font-medium">12.4% ↑</span>
                </div>
                <p className="text-2xl font-bold text-[#1E5AA8]">$53,135</p>
                <p className="text-xs text-[#6B7280]">May 18 - 26, 2025</p>
                <div className="mt-3 h-12 bg-white rounded-lg flex items-end gap-1 px-2">
                  {[3, 4, 5, 6, 8, 10, 9, 7, 8, 9].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-[#1E5AA8] to-[#2E7AC4] rounded-t" style={{ height: `${h * 4}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
