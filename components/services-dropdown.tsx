'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Share2,
  Video,
  ImageIcon,
  Zap,
  BarChart3,
  Users,
  FileText,
  Link2,
  SearchCheck,
  TrendingUp,
  Mail,
  PieChart,
  ChevronRight,
} from 'lucide-react'

const serviceMenu = [
  {
    category: 'Ads',
    icon: BarChart3,
    items: [
      { name: 'Static Ads', icon: ImageIcon, description: 'Professional ad creatives', link: '/static-ads' },
      { name: 'Video Ads', icon: Video, description: 'Engaging video advertisements', link: '/video-ads' },
      { name: 'Meta Ads Management', icon: Share2, description: 'Facebook & Instagram ads', link: '/meta-ads' },
      { name: 'Google Ads Management', icon: PieChart, description: 'Google Ads optimization', link: '/google-ads' },
    ]
  },
  {
    category: 'SEO',
    link: '/seo',
    icon: SearchCheck,
    standalone: true,
  },
  {
    category: 'Videos',
    icon: Video,
    items: [
      { name: 'Short-Form Videos', icon: Video, description: 'TikTok, Reels, Shorts content', link: '/videos' },
    
    ]
  },
  {
    category: 'Social Media Management',
    icon: Share2,
    items: [
      { name: 'Instagram Growth', icon: TrendingUp, description: 'Followers & engagement boost', link: '/instagram-growth' },
      { name: 'Email Design', icon: Mail, description: 'Professional email templates', link: '/email-design' },
    ]
  },
]

export function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  return (
    <div className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-[#6B7280] hover:text-[#0B2A4A] transition-colors py-2"
      >
        <span>Services</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-96 bg-white border border-blue-100 rounded-xl shadow-2xl z-50 py-2 px-2">
          <div className="space-y-1">
            {serviceMenu.map((menu) => {
              const MenuIcon = menu.icon
              
              if (menu.standalone) {
                return (
                  <Link
                    key={menu.category}
                    href={menu.link || '#'}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 transition-colors group/item w-full"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#1E5AA8]">
                        <MenuIcon className="w-5 h-5 text-[#1E5AA8] group-hover/item:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#0B2A4A] group-hover/item:text-[#1E5AA8]">
                          {menu.category}
                        </p>
                      </div>
                    </div>
                  </Link>
                )
              }

              const isExpanded = expandedCategory === menu.category

              return (
                <div key={menu.category}>
                  <button
                    onClick={() => setExpandedCategory(isExpanded ? null : menu.category)}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 transition-colors group/item w-full"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#1E5AA8]">
                        <MenuIcon className="w-5 h-5 text-[#1E5AA8] group-hover/item:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#0B2A4A] group-hover/item:text-[#1E5AA8]">
                          {menu.category}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 text-[#6B7280] transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                  </button>

                  {/* Submenu */}
                  {isExpanded && menu.items && (
                    <div className="pl-4 space-y-1">
                      {menu.items.map((item) => {
                        const ItemIcon = item.icon
                        return (
                          <Link
                            key={item.name}
                            href={item.link || '#'}
                            onClick={() => setIsOpen(false)}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group/subitem"
                          >
                            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover/subitem:bg-[#1E5AA8]">
                              <ItemIcon className="w-4 h-4 text-[#1E5AA8] group-hover/subitem:text-white transition-colors" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-[#0B2A4A] group-hover/subitem:text-[#1E5AA8]">
                                {item.name}
                              </p>
                              <p className="text-xs text-[#6B7280]">{item.description}</p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Close when clicking outside */}
          <div
            className="fixed inset-0 -z-10"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  )
}
