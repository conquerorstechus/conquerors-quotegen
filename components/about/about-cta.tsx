import Link from 'next/link'

export function AboutCta() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1E5AA8] to-[#154080]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to grow your business?</h2>
       

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/schedule-demo">
            <button className="bg-white hover:bg-gray-100 text-[#1E5AA8] px-8 py-3 text-lg rounded-lg font-semibold flex items-center gap-2 mx-auto transition-colors">
              Schedule a Demo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </Link>
          <Link href="/pricing">
            <button className="border-2 border-white hover:bg-white/10 text-white px-8 py-3 text-lg rounded-lg font-semibold transition-colors">
              View Pricing
            </button>
          </Link>
        </div>

        <p className="text-blue-100 text-sm mt-6">No credit card required • Cancel anytime</p>
      </div>
    </section>
  )
}
