const results = [
  {
    metric: '+320%',
    label: 'Average ROI Improvement',
    subtext: 'Within 3 months',
    icon: 'up',
  },
  {
    metric: '4.2x',
    label: 'Average ROAS',
    subtext: 'Per dollar spent',
  },
  {
    metric: '3.5x',
    label: 'Cost Per Acquisition Reduction',
    subtext: 'Optimized over 6 months',
  },
  {
    metric: '95%',
    label: 'Client Satisfaction Rate',
    subtext: 'Consistently exceeded expectations',
    icon: 'users',
  },
]

export function MetaAdsResults() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F9FF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-4">
            Proven Results Across Platforms
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Real metrics from real clients managing Facebook and Instagram ads
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center mb-4">
                {result.icon === 'up' && (
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )}
                {result.icon === 'users' && (
                  <svg className="w-8 h-8 text-[#1E5AA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 10H9m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </div>
              <div className="text-4xl font-bold text-[#1E5AA8] mb-2">{result.metric}</div>
              <p className="text-lg font-semibold text-[#0B2A4A] mb-1">{result.label}</p>
              <p className="text-sm text-[#6B7280]">{result.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
