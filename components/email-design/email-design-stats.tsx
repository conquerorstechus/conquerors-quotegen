const stats = [
  { metric: '2,500+', label: 'Email Templates Delivered', subtext: 'Across all industries' },
  { metric: '42%', label: 'Avg Click-Through Rate', subtext: 'Industry benchmark: 2.5%' },
  { metric: '98%', label: 'Client Satisfaction', subtext: 'Based on 500+ reviews' },
  { metric: '48hrs', label: 'Average Turnaround', subtext: 'From brief to delivery' },
]

export function EmailDesignStats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#F5F9FF] to-blue-50 border border-blue-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.metric}</div>
              <p className="font-semibold text-[#0B2A4A] mb-1">{stat.label}</p>
              <p className="text-sm text-[#6B7280]">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
