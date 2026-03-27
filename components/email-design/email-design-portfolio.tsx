const portfolio = [
  { category: 'Beauty & Skincare', color: 'from-purple-100 to-pink-100', borderColor: 'border-purple-300' },
  { category: 'E-Commerce Promotion', color: 'from-orange-100 to-yellow-100', borderColor: 'border-orange-300' },
  { category: 'Lifestyle Brand', color: 'from-red-100 to-pink-100', borderColor: 'border-red-300' },
  { category: 'Newsletter', color: 'from-blue-100 to-cyan-100', borderColor: 'border-blue-300' },
  { category: 'Product Launch', color: 'from-green-100 to-emerald-100', borderColor: 'border-green-300' },
  { category: 'Seasonal Campaign', color: 'from-amber-100 to-orange-100', borderColor: 'border-amber-300' },
]

export function EmailDesignPortfolio() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F9FF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-4">
            Email Template Portfolio
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Stunning designs across every industry and use case
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${item.color} border-2 ${item.borderColor} rounded-xl p-12 h-64 flex items-end justify-between hover:shadow-lg transition-shadow cursor-pointer group`}
            >
              <p className="text-lg font-semibold text-gray-800 group-hover:text-gray-900">{item.category}</p>
              <svg className="w-6 h-6 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
