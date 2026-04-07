export function AboutTeam() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-[#0B2A4A]">Our team always gets the best results</h2>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              Conquerors Digital is revolutionizing content strategy by combining cutting-edge technology with top content experts and a seamless, fully-managed process — delivering consistent results for businesses across every industry.
            </p>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              We are dedicated to providing high-quality services at an affordable cost, starting at just $99/month. Whether you're a startup, a growing business, or an established enterprise, we have a solution tailored to your needs.
            </p>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              Plus, you can cancel anytime, giving you the flexibility you need without long-term commitments.
            </p>
          </div>

          {/* Right - Image */}
          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img
                src="/about-team-results.png"
                alt="Our team collaborating to deliver the best results"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
