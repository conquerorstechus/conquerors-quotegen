import { Star } from "lucide-react"

const brands = ["Butterfly Pharmacy", "Rik Promo", "Utsav Catering", "Tampa Realty Pros", "Pawsitively pilates", "Water Pediatric Center"]

export function TrustSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F9FF] border-y border-blue-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Trust Stats */}
          <div className="flex flex-col gap-8">
            {/* Main Stat */}
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#0B2A4A] mb-2">
                  Trusted By Growing Brands & Businesses
              </div>
              
            </div>

            {/* Rating */}
            <div className="flex items-start gap-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-4xl font-bold text-[#0B2A4A]">4.8</span>
                  <span className="text-[#6B7280] text-sm">/5</span>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#1E5AA8] text-[#1E5AA8]"
                    />
                  ))}
                </div>
                <p className="text-sm text-[#6B7280]">Our Customer Ratings </p>
              </div>
            </div>
          </div>

          {/* Right Side: Brand Carousel */}
          <div className="brand-scroll-wrapper overflow-hidden">
            <div className="brand-scroll flex gap-8 md:gap-12 w-max">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={`${brand}-${index}`}
                  className="text-xl md:text-2xl font-bold text-[#6B7280]/60 hover:text-[#1E5AA8] transition-colors whitespace-nowrap py-2"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
