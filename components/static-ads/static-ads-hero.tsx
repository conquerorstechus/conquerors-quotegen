import Link from 'next/link'

export function StaticAdsHero() {
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
              High-performing static ads from only <span className="text-[#1E5AA8]">$99/mo</span>
            </h1>

            <p className="text-xl text-[#6B7280] leading-relaxed">
              We handle the research, concepts, copywriting, and design. You just approve, launch, and scale.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[#0B2A4A]">
                <div className="w-5 h-5 rounded-full bg-[#1E5AA8] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Professional research, concepts, and copywriting included</span>
              </li>
              <li className="flex items-center gap-3 text-[#0B2A4A]">
                <div className="w-5 h-5 rounded-full bg-[#1E5AA8] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Fast turnaround with unlimited revisions</span>
              </li>
              <li className="flex items-center gap-3 text-[#0B2A4A]">
                <div className="w-5 h-5 rounded-full bg-[#1E5AA8] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Used by top brands to drive conversions</span>
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

          {/* Right - Ad Gallery Preview */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-4">
              {[
                { bg: 'bg-red-500', title: '$150 billion' },
                { bg: 'bg-gray-700', title: 'Mission' },
                { bg: 'bg-red-500', title: 'Make a statement' },
                { bg: 'bg-gray-700', title: 'Cycling' },
                { bg: 'bg-red-500', title: 'Recognizing signs' },
                { bg: 'bg-gray-700', title: 'Make every mile' },
                { bg: 'bg-gray-700', title: 'Life is boring' },
                { bg: 'bg-red-500', title: 'Most affected' },
                { bg: 'bg-red-500', title: 'Women' },
              ].map((ad, i) => (
                null
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
