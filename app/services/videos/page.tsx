'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AllServicesSection } from '@/components/pricing/service-cards-grid'
import { Video, Users, ChevronRight } from 'lucide-react'

export default function VideosPage() {
  const videoServices = [
    {
      id: 'short-form',
      title: 'Short-Form Videos',
      description: 'Professional short-form content for TikTok, Instagram Reels, and YouTube Shorts',
      icon: Video,
      href: '/services/videos/short-form-videos',
    },
    {
      id: 'ugc',
      title: 'UGC Videos',
      description: 'High-quality user-generated content created by vetted content creators',
      icon: Users,
      href: '/services/videos/ugc-videos',
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <nav className="pt-32 px-4 sm:px-6 lg:px-8 bg-[#F5F9FF]">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm mb-8">
          <Link href="/services" className="text-[#6B7280] hover:text-[#0B2A4A]">
            Services
          </Link>
          <ChevronRight className="w-4 h-4 text-[#6B7280]" />
          <span className="text-[#0B2A4A] font-medium">Videos</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F9FF] to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-4">
            Video Services
          </h1>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Professional video content creation for all your social media needs
          </p>
        </div>
      </section>

      {/* Video Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videoServices.map((service) => {
              const Icon = service.icon
              return (
                <Link key={service.id} href={service.href}>
                  <div className="group h-full p-8 border border-blue-100 rounded-xl hover:border-[#1E5AA8] hover:shadow-lg transition-all bg-white cursor-pointer">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[#1E5AA8]/10 flex items-center justify-center group-hover:bg-[#1E5AA8] transition-colors">
                        <Icon className="w-6 h-6 text-[#1E5AA8] group-hover:text-white transition-colors" />
                      </div>
                      <ChevronRight className="w-5 h-5 text-[#6B7280] group-hover:text-[#1E5AA8] transition-colors transform group-hover:translate-x-1" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0B2A4A] mb-2 group-hover:text-[#1E5AA8] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#6B7280] group-hover:text-gray-700 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <AllServicesSection />

      <Footer />
    </main>
  )
}
