import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0B2A4A] via-[#1E5AA8] to-[#0B2A4A] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#3FA9F5] rounded-full opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3FA9F5] rounded-full opacity-10 blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
          <Sparkles className="w-4 h-4 text-[#3FA9F5]" />
          <span className="text-sm font-semibold text-white">Limited Time Offer</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight text-balance">
          Ready to Grow Your Social Media Without the Stress?
        </h2>

        {/* Subheading and Pricing */}
        <div className="mb-12 space-y-4">
          <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Let our team handle your content so you can focus on growing your business.
          </p>
          <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
            <p className="text-lg sm:text-xl font-bold text-white">
              Start Today For Just <span className="text-[#3FA9F5] text-3xl">$99</span><span className="text-blue-100">/month</span>
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/pricing">
            <Button size="lg" className="bg-white text-[#0B2A4A] hover:bg-blue-50 px-10 py-7 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/schedule-demo">
            <Button
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 px-10 py-7 text-lg font-bold bg-transparent backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Demo
            </Button>
          </Link>
        </div>

        {/* Trust signal */}
        <p className="mt-12 text-blue-100 text-sm">
          Join 50+ growing businesses already transforming their social media presence
        </p>
      </div>
    </section>
  )
}
