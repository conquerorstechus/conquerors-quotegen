import Link from 'next/link'

export function EmailDesignHero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F9FF] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-[#1E5AA8] bg-blue-50 px-3 py-1 rounded-full flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                US & EU BASED TEAM
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-[#0B2A4A] leading-tight">
              Email Design Services from <span className="text-blue-600">only $149/mo</span>
            </h1>

            <p className="text-xl text-[#6B7280] leading-relaxed">
              Take your email marketing to the next level with stunning emails that convert. Made by our team of copywriters, designers, and email experts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/schedule-demo">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-lg font-semibold flex items-center gap-2 transition-colors">
                  Get started
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
              <Link href="/schedule-demo">
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg rounded-lg font-semibold flex items-center gap-2 transition-colors">
                  Schedule demo
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#6B7280]">Made by experts</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#6B7280]">Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Right - Email Templates Preview */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-4 h-48 flex items-end justify-between border border-purple-200">
                <div className="text-sm font-semibold text-purple-900">89%</div>
                <div className="text-xs text-purple-800">Beauty Collection</div>
              </div>
              <div className="bg-white rounded-lg p-4 h-32 border border-gray-200 flex items-center justify-center">
                <span className="text-xs text-[#6B7280]">Email Template</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg p-4 h-32 flex items-center justify-center border border-orange-200">
                <span className="text-xs text-orange-900">Product Showcase</span>
              </div>
              <div className="bg-gradient-to-br from-red-100 to-pink-100 rounded-lg p-4 h-48 flex items-end justify-between border border-red-200">
                <div className="text-sm font-semibold text-red-900">Sale</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
