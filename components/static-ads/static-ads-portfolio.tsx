const portfolio = [
  {
    category: 'Technology',
    description: 'SaaS product launch campaign',
    style: 'Modern blue theme with bold typography',
  },
  {
    category: 'E-commerce',
    description: 'Fashion brand seasonal sale',
    style: 'Minimalist design with lifestyle imagery',
  },
  {
    category: 'Healthcare',
    description: 'Health service awareness campaign',
    style: 'Clean professional aesthetic',
  },
  {
    category: 'Non-profit',
    description: 'Cause-driven campaign',
    style: 'Impactful red and white designs',
  },
  {
    category: 'Real Estate',
    description: 'Property listing promotion',
    style: 'Premium luxury positioning',
  },
  {
    category: 'Education',
    description: 'Course enrollment campaign',
    style: 'Inspiring and motivational design',
  },
]

export function StaticAdsPortfolio() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F9FF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-4">
            Our Ad Portfolio
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            High-performing static ads across every industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-blue-100 rounded-xl p-8 hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#1E5AA8] mb-4 group-hover:bg-[#154080] transition-colors" />
              <h3 className="text-lg font-bold text-[#0B2A4A] mb-2">{item.category}</h3>
              <p className="text-sm text-[#6B7280] mb-3">{item.description}</p>
              <p className="text-xs text-[#1E5AA8] font-medium">{item.style}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
