import Link from 'next/link'

export function AboutHero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-[#0B2A4A] mb-6 leading-tight">
          Affordable Social Media Management Solutions for Small Businesses
        </h1>
        <p className="text-xl text-[#6B7280] mb-12 leading-relaxed">
          We know that small businesses often lack the time and resources for effective online marketing. That's why we offer a complete solution—unique technology, data-driven strategies, and an experienced team—all at an affordable price of only $99/month.
        </p>

        {/* Video Section */}
        <div className="mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative aspect-video bg-gradient-to-br from-[#F5F9FF] to-blue-50 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10">
                <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="absolute bottom-6 left-6 z-20">
                <div className="text-white text-left">
                  <div className="text-3xl font-bold">12,000+</div>
                  <div className="text-sm">Businesses</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row justify-center gap-12 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#1E5AA8] mb-2">20,000+</div>
            <p className="text-[#6B7280]">Total Clients Served</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#1E5AA8] mb-2">$50M+</div>
            <p className="text-[#6B7280]">Revenue Generated</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#1E5AA8] mb-2">99%</div>
            <p className="text-[#6B7280]">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
