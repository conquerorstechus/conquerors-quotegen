const services = [
  {
    icon: 'search',
    title: 'Search Campaign Optimization',
    description: 'Maximize ROI on Google Search with keyword optimization and bid management',
  },
  {
    icon: 'display',
    title: 'Display Network Management',
    description: 'Build brand awareness across millions of websites and apps',
  },
  {
    icon: 'shopping',
    title: 'Shopping Ads',
    description: 'Showcase products directly in search results and drive e-commerce sales',
  },
  {
    icon: 'video',
    title: 'YouTube Ads',
    description: 'Reach engaged audiences with video ads on YouTube',
  },
  {
    icon: 'smart',
    title: 'Smart Bidding Strategy',
    description: 'AI-powered bidding to automatically maximize conversions',
  },
  {
    icon: 'analytics',
    title: 'Conversion Tracking & Analytics',
    description: 'Detailed tracking and reporting on every campaign performance metric',
  },
]

const getIcon = (iconType: string) => {
  switch (iconType) {
    case 'search':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    case 'display':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case 'shopping':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    case 'video':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0110 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case 'smart':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    case 'analytics':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    default:
      return null
  }
}

export function GoogleAdsServices() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-4">
            Complete Google Ads Solutions
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            From search to shopping, we manage every aspect of your Google advertising
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl border border-blue-100 hover:border-[#1E5AA8] bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-[#1E5AA8] transition-colors text-[#1E5AA8] group-hover:text-white">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-semibold text-[#0B2A4A] mb-2">{service.title}</h3>
              <p className="text-[#6B7280]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
