const services = [
  {
    icon: 'target',
    title: 'Targeted Follower Growth',
    description: 'We target accounts in your niche and engage authentically to attract real followers',
  },
  {
    icon: 'engagement',
    title: 'Engagement Optimization',
    description: 'Strategic likes, comments, and follows to boost engagement and visibility',
  },
  {
    icon: 'content',
    title: 'Content Strategy',
    description: 'Guidance on content types and posting schedules to maximize reach',
  },
  {
    icon: 'analytics',
    title: 'Performance Analytics',
    description: 'Detailed reports on follower growth, engagement rates, and audience insights',
  },
  {
    icon: 'safety',
    title: 'Instagram Safe & Compliant',
    description: '100% adherent to Instagram guidelines—no risky bots or automation',
  },
  {
    icon: 'dedicated',
    title: 'Dedicated Support',
    description: 'Personal account manager ensuring steady growth and quality followers',
  },
]

const getIcon = (iconType: string) => {
  switch (iconType) {
    case 'target':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    case 'engagement':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h-2m0 0H9m3 0V8m0 3v2m5-3a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    case 'content':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    case 'analytics':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    case 'safety':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7.784-4.817a.75.75 0 10-1.06-1.06L9 12.914l-1.793-1.793a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.06 0l7.5-7.5z" />
        </svg>
      )
    case 'dedicated':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      )
    default:
      return null
  }
}

export function InstagramGrowthServices() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-4">
            Complete Instagram Growth Solutions
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Everything you need to build a genuine, engaged Instagram community
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
