const features = [
  {
    icon: 'design',
    title: 'Creative Design',
    description: 'High-impact visuals that stop the scroll and drive engagement',
  },
  {
    icon: 'copy',
    title: 'Compelling Copy',
    description: 'Persuasive messaging crafted to convert your target audience',
  },
  {
    icon: 'research',
    title: 'Market Research',
    description: 'Data-driven insights to inform every creative decision',
  },
  {
    icon: 'variations',
    title: 'Multiple Variations',
    description: 'A/B tested versions to find what resonates best',
  },
  {
    icon: 'revisions',
    title: 'Unlimited Revisions',
    description: 'Work with us until you\'re 100% satisfied with the result',
  },
  {
    icon: 'formats',
    title: 'All Ad Formats',
    description: 'Facebook, Instagram, Google Ads, LinkedIn, and more',
  },
]

const getIcon = (iconType: string) => {
  switch (iconType) {
    case 'design':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    case 'copy':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    case 'research':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    case 'variations':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    case 'revisions':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case 'formats':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
        </svg>
      )
    default:
      return null
  }
}

export function StaticAdsFeatures() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-4">
            Everything You Need for High-Converting Ads
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Professional ad creation from research to launch
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl border border-blue-100 hover:border-[#1E5AA8] bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-[#1E5AA8] transition-colors text-[#1E5AA8] group-hover:text-white">
                {getIcon(feature.icon)}
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
