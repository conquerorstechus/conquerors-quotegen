export function AboutMission() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F9FF]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#E8F0FB] to-[#D4E6F7] rounded-2xl p-8 aspect-square flex items-center justify-center">
              <svg className="w-32 h-32 text-[#1E5AA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C6.5 6.253 2 10.753 2 16.5S6.5 26.747 12 26.747s10-4.5 10-10.247S17.5 6.253 12 6.253z" />
              </svg>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white border-4 border-[#1E5AA8] rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <svg className="w-6 h-6 text-[#1E5AA8] mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <p className="text-sm text-[#6B7280] mb-1">Total clients</p>
                <p className="text-2xl font-bold text-[#0B2A4A]">12,000+</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[#0B2A4A]">What we're creating</h2>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              Conquerors Digital is an innovative content curation and distribution solution designed to empower small businesses with consistent and impactful content for their audiences.
            </p>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              Our goal is to streamline the process and save you time and resources. We understand the challenges of building a strong social media presence, and we're here to make it simple and affordable.
            </p>
            <div className="pt-6 border-t border-blue-200">
              <p className="text-[#6B7280]">
                <strong className="text-[#0B2A4A]">Why Conquerors:</strong> We combine cutting-edge technology with expert strategists to deliver results that matter. Our platform gives you the tools and support needed to succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
