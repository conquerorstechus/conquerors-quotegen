import Link from 'next/link'

export function EmailDesignCta() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to Level Up Your Email Marketing?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Get professional, conversion-focused email templates that actually generate results.
        </p>

        <Link href="/schedule-demo">
          <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 text-lg rounded-lg font-semibold flex items-center gap-2 mx-auto transition-colors">
            Schedule Your Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </Link>

        <p className="text-sm text-blue-200 mt-6">
          No credit card required • 15-minute consultation • Expert advice included
        </p>
      </div>
    </section>
  )
}
