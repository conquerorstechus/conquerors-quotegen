import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Gift, Star, MessageCircle } from 'lucide-react'
import { SCHEDULE_EMBED_URL } from '@/lib/utils'

export default function ScheduleDemoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-blue-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-dark.png"
                alt="Cornerstone Digital Technologies"
                width={280}
                height={80}
                className="h-16 w-auto"
                priority
              />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-[#6B7280] hover:text-[#0B2A4A] transition-colors">
                Company
              </Link>
              <Link href="/pricing" className="text-[#6B7280] hover:text-[#0B2A4A] transition-colors">
                Services
              </Link>
              <Link href="/examples" className="text-[#6B7280] hover:text-[#0B2A4A] transition-colors">
                Examples
              </Link>
              <Link href="/pricing" className="text-[#6B7280] hover:text-[#0B2A4A] transition-colors">
                Pricing
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" className="text-[#6B7280] hover:text-[#0B2A4A]">
                Log in
              </Button>
              <Link href="/pricing">
                <Button className="bg-[#1E5AA8] text-white hover:bg-[#154080]">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-4">Schedule Your Demo</h1>
            <p className="text-lg text-[#6B7280]">Pick a time that works for you</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Card - Info */}
            <div className="bg-white border border-blue-100 rounded-2xl p-8 h-fit">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#0B2A4A] mb-2">Cornerstone Digital Technologies Intro</h2>
                <p className="text-[#6B7280]">20 minutes</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Gift className="w-5 h-5 text-[#1E5AA8] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0B2A4A]">Join the demo to unlock a special bonus</span>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-[#1E5AA8] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0B2A4A]">700+ 5-star reviews</span>
                </div>
              </div>

              <p className="text-[#6B7280] mb-6 leading-relaxed">
                In this 20-minute introductory call, you&apos;ll learn how Cornerstone Digital Technologies helps businesses like yours scale their social media presence with professional content from our top 1% creative talent. We&apos;ll discuss your specific needs and show you how our affordable, flexible plans work.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-[#6B7280]">
                  <strong>Note:</strong> Please join from a desktop or laptop device for the best experience.
                </p>
              </div>
            </div>

            {/* Right Card - Embedded Calendar */}
            <div className="bg-white border border-blue-100 rounded-2xl overflow-hidden">
              <iframe
                src={SCHEDULE_EMBED_URL}
                title="Schedule a demo appointment"
                className="w-full border-0"
                style={{ height: '700px' }}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </main>

      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="w-14 h-14 rounded-full bg-[#1E5AA8] text-white shadow-lg hover:bg-[#154080] transition-all flex items-center justify-center">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}
