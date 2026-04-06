export function AboutMission() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F9FF]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img
                src="/about-mission-creating.png"
                alt="What we're creating at Conquerors Digital"
                className="w-full h-full object-cover"
              />
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
