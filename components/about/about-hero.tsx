import Link from 'next/link'

export function AboutHero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-[#0B2A4A] mb-6 leading-tight">
          About Us
        </h1>
        <div className="text-left text-[#6B7280] mb-12 space-y-5 text-lg leading-relaxed">
          <p>
            Conquerors US is a fast-growing digital marketing company in Tampa, Florida, built with a clear mission—to help businesses grow by combining cutting-edge technology with results-driven marketing.
          </p>
          <p>
            Founded by Sam Kasimalla, an ex-FAANG engineer, Conquerors Software Technologies LLC brings Silicon Valley–level innovation into the digital marketing space. Our foundation is rooted in advanced technologies like AI, Next.js, and cloud infrastructure, allowing us to deliver smarter, faster, and more scalable marketing solutions.
          </p>
          <p>
            As a Tampa-based digital marketing agency, we specialize in helping businesses stand out in competitive markets. From high-converting email marketing and performance-driven campaigns to modern web experiences and automation, everything we build is designed with one goal: measurable growth.
          </p>
          <p>
            We believe great marketing isn't just about visibility—it's about results. That's why we focus on strategies that drive real ROI, attract the right audience, and convert attention into revenue.
          </p>
          <p>
            At Conquerors US, we're not just another digital marketing company in Tampa, Florida—we're your technology-powered growth partner, committed to helping you scale with confidence.
          </p>
        </div>

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
