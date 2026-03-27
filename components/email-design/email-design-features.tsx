const features = [
  {
    title: 'Conversion-Optimized Design',
    description: 'Every email is designed to drive clicks and conversions with strategic CTAs',
  },
  {
    title: 'Mobile-Responsive',
    description: 'Perfect rendering across all devices and email clients',
  },
  {
    title: 'Brand Consistency',
    description: 'Maintain your brand identity across all email communications',
  },
  {
    title: 'Copy & Design',
    description: 'Professional copywriting paired with stunning visual design',
  },
  {
    title: 'Unlimited Revisions',
    description: 'Revisions until you are 100% satisfied with the result',
  },
  {
    title: 'Fast Turnaround',
    description: '48-hour delivery on all email templates and campaigns',
  },
]

export function EmailDesignFeatures() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-4">
            Professional Email Design Features
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Everything you need for high-performing email marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-blue-100 hover:border-blue-300 bg-white hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0B2A4A] mb-2">{feature.title}</h3>
              <p className="text-[#6B7280]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
