const values = [
  {
    title: 'Affordable Excellence',
    description: 'High-quality services at prices that work for small businesses. We believe great marketing shouldn\'t cost a fortune.',
    icon: 'dollar'
  },
  {
    title: 'Customer-Focused',
    description: 'Your success is our success. We\'re committed to delivering results that matter for your business growth.',
    icon: 'users'
  },
  {
    title: 'Innovation First',
    description: 'We combine cutting-edge technology with expert strategy to keep you ahead of the competition.',
    icon: 'zap'
  },
  {
    title: 'Transparency',
    description: 'No hidden fees, no surprises. Clear reporting and honest communication every step of the way.',
    icon: 'chart'
  },
]

const getIcon = (type: string) => {
  switch (type) {
    case 'dollar':
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case 'users':
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 10H9m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case 'zap':
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    case 'chart':
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    default:
      return null
  }
}

export function AboutValues() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F9FF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B2A4A] mb-4">Our Core Values</h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            These principles guide everything we do and define how we serve our clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl p-8 border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 text-[#1E5AA8]">
                {getIcon(value.icon)}
              </div>
              <h3 className="text-xl font-semibold text-[#0B2A4A] mb-3">{value.title}</h3>
              <p className="text-[#6B7280] leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
