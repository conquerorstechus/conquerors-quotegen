import Link from 'next/link'

export function VideoAdsHero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F9FF] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-[#1E5AA8] bg-blue-50 px-3 py-1 rounded-full flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                #1 MARKETING DELIVERABLES PLATFORM
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-[#0B2A4A] leading-tight">
              Video ads built to <span className="text-[#1E5AA8]">sell and scale</span>
            </h1>

            <p className="text-xl text-[#6B7280] leading-relaxed">
              We handle research, scripting, and video editing to deliver videos that grab attention and keep performing month after month.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[#0B2A4A]">
                <div className="w-5 h-5 rounded-full bg-[#1E5AA8] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Professional scriptwriting and concept development</span>
              </li>
              <li className="flex items-center gap-3 text-[#0B2A4A]">
                <div className="w-5 h-5 rounded-full bg-[#1E5AA8] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>High-quality video production and editing</span>
              </li>
              <li className="flex items-center gap-3 text-[#0B2A4A]">
                <div className="w-5 h-5 rounded-full bg-[#1E5AA8] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Platform-optimized videos for maximum performance</span>
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

          {/* Right - Video Performance Mockup */}
          <div className="hidden lg:block">
            <div className="bg-white border border-blue-200 rounded-xl p-6 shadow-lg">
              <div className="space-y-4">
                {/* Video Player */}
                <div className="bg-[#1E5AA8] rounded-lg h-40 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white opacity-80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#F5F9FF] rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-4 h-4 text-[#1E5AA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className="text-xs font-medium text-[#6B7280]">Sales</span>
                    </div>
                    <p className="text-2xl font-bold text-[#0B2A4A]">10,124</p>
                    <p className="text-xs text-green-600 font-medium">+8.5% vs. last week</p>
                  </div>

                  <div className="bg-[#F5F9FF] rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-[#6B7280]">Video Views</span>
                    </div>
                    <p className="text-2xl font-bold text-[#0B2A4A]">285K</p>
                    <p className="text-xs text-green-600 font-medium">+12.3% growth</p>
                  </div>
                </div>

                {/* Trending */}
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                  <p className="text-xs font-semibold text-[#0B2A4A] mb-2">Trending Videos</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#6B7280]">Product showcase</span>
                      <span className="font-semibold text-[#1E5AA8]">4.2x ROI</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#6B7280]">Customer testimonial</span>
                      <span className="font-semibold text-[#1E5AA8]">3.8x ROI</span>
                    </div>
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
