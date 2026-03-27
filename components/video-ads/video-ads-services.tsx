const services = [
  {
    icon: 'script',
    title: 'Script Writing',
    description: 'Compelling scripts that hook viewers and drive conversions',
  },
  {
    icon: 'film',
    title: 'Video Production',
    description: 'Professional filming and production for premium quality',
  },
  {
    icon: 'edit',
    title: 'Video Editing',
    description: 'Creative editing with effects, transitions, and color grading',
  },
  {
    icon: 'platform',
    title: 'Platform Optimization',
    description: 'Videos optimized for YouTube, TikTok, Instagram, and more',
  },
  {
    icon: 'ab',
    title: 'A/B Testing',
    description: 'Multiple video variations tested for maximum performance',
  },
  {
    icon: 'analytics',
    title: 'Performance Analytics',
    description: 'Detailed reporting on views, engagement, and conversions',
  },
]

const getIcon = (iconType: string) => {
  switch (iconType) {
    case 'script':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    case 'film':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16m10-16v16m-10-8h10M4 5h16M4 19h16" />
        </svg>
      )
    case 'edit':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    case 'platform':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case 'ab':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    case 'analytics':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    default:
      return null
  }
}

export function VideoAdsServices() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-4">
            Complete Video Production
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            From concept to execution, we handle every step of video creation for maximum impact
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
