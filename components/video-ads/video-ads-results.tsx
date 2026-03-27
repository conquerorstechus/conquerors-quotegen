const results = [
  {
    metric: '+380%',
    label: 'Average Sales Increase',
    subtext: 'Within 3 months',
  },
  {
    metric: '2.5K+',
    label: 'Videos Created',
    subtext: 'For our clients',
  },
  {
    metric: '$15M+',
    label: 'Revenue Generated',
    subtext: 'Through video ads',
  },
  {
    metric: '96%',
    label: 'Client Satisfaction',
    subtext: 'Would recommend',
  },
]

export function VideoAdsResults() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F9FF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-4">
            Proven Video Performance
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Real results from video campaigns that drive sales and engagement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-white border border-blue-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
            >
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
