"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronRight } from "lucide-react"
import Image from "next/image"
import { ServicesDropdown } from "@/components/services-dropdown"

const mobileServices = [
  {
    category: 'Ads',
    items: [
      /* Temporarily disabled for future use
        { label: 'Static Ads', href: '/static-ads' },
        { label: 'Video Ads', href: '/video-ads' },
      */
      { label: 'Meta Ads Management', href: '/meta-ads' },
      { label: 'Google Ads Management', href: '/google-ads' }
    ]
  },
  {
    category: 'SEO',
    link: '/seo',
    standalone: true,
  },
  {
    category: 'Videos',
    items: [
      { label: 'Videos', href: '/videos' }
    ]
  },
  {
    category: 'Social Media Management',
    items: [
      { label: 'Instagram Growth', href: '/instagram-growth' },
      { label: 'Email Design', href: '/email-design' }
    ]
  },
]

export  function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedServiceCategory, setExpandedServiceCategory] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 py-2">
            <Image
              src="/logo-dark.png"
              alt="Conquerors Software Technologies"
              width={280}
              height={80}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#examples" className="text-[#6B7280] hover:text-[#0B2A4A] transition-colors">
              Our Work
            </Link>
            <Link href="/pricing" className="text-[#6B7280] hover:text-[#0B2A4A] transition-colors">
              Pricing
            </Link>
            <ServicesDropdown />
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/pricing">
              <Button className="bg-[#1E5AA8] text-white hover:bg-[#154080]">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#0B2A4A]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-100 bg-white">
            <nav className="flex flex-col gap-2">
              <Link href="/#examples" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-[#6B7280] hover:text-[#0B2A4A] transition-colors rounded-lg hover:bg-blue-50">
                Our Work
              </Link>
              <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-[#6B7280] hover:text-[#0B2A4A] transition-colors rounded-lg hover:bg-blue-50">
                Pricing
              </Link>

              {/* Mobile Services Menu */}
              <div className="border-t border-blue-100 pt-2 mt-2">
                <p className="px-3 py-2 text-sm font-semibold text-[#0B2A4A]">Services</p>
                <div className="space-y-1">
                  {mobileServices.map((service) => {
                    const isExpanded = expandedServiceCategory === service.category

                    if (service.standalone) {
                      return (
                        <Link
                          key={service.category}
                          href={service.link || '#'}
                          onClick={() => setMobileMenuOpen(false)}
                          className="px-3 py-2 text-[#6B7280] hover:text-[#0B2A4A] transition-colors rounded-lg hover:bg-blue-50 block"
                        >
                          {service.category}
                        </Link>
                      )
                    }

                    return (
                      <div key={service.category}>
                        <button
                          onClick={() => setExpandedServiceCategory(isExpanded ? null : service.category)}
                          className="w-full px-3 py-2 flex items-center justify-between text-[#6B7280] hover:text-[#0B2A4A] transition-colors rounded-lg hover:bg-blue-50"
                        >
                          <span>{service.category}</span>
                          <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                        </button>

                        {/* Submenu */}
                        {isExpanded && service.items && (
                          <div className="pl-4 space-y-1">
                            {service.items.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="px-3 py-2 text-sm text-[#6B7280] hover:text-[#0B2A4A] transition-colors rounded-lg hover:bg-blue-50 block"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-4 border-t border-blue-100">
                <Link href="/pricing">
                  <Button className="bg-[#1E5AA8] text-white w-full hover:bg-[#154080]">Get Started</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
