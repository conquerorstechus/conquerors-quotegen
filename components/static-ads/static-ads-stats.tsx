const stats = [
  {
    metric: '350+',
    label: 'Successful Campaigns',
    subtext: 'Across all industries',
  },
  {
    metric: '4.2x',
    label: 'Average ROI',
    subtext: 'Compared to industry baseline',
  },
  {
    metric: '99%',
    label: 'Client Satisfaction',
    subtext: 'Recommend to others',
  },
  {
    metric: '48hrs',
    label: 'Average Turnaround',
    subtext: 'From concept to delivery',
  },
]

export function StaticAdsStats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#F5F9FF] to-blue-50 border border-blue-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl font-bold text-[#1E5AA8] mb-2">{stat.metric}</div>
              <p className="text-lg font-semibold text-[#0B2A4A] mb-1">{stat.label}</p>
              <p className="text-sm text-[#6B7280]">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
