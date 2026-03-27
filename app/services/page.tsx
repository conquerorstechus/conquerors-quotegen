'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  ImageIcon,
  Video,
  LayoutGrid,
  Film,
  Mail,
  Target,
  Search,
  TrendingUp,
  FileText,
  Link2,
  Info,
  ChevronDown,
} from 'lucide-react'

interface ServiceCardConfig {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  badge: string
  badgeColor: string
  basePrice: number
  quantityOptions: { quantity: number; price: number; label?: string }[]
  link: string
}

const allServices: ServiceCardConfig[] = [
  {
    id: "social-media-posts",
    title: "Social Media Posts",
    icon: <ImageIcon className="w-5 h-5" />,
    description: "Static, single-image social media content created & posted monthly to your socials.",
    badge: "SOCIAL MEDIA",
    badgeColor: "bg-blue-100 text-blue-700",
    basePrice: 99,
    quantityOptions: [
      { quantity: 5, price: 99, label: "5 posts" },
      { quantity: 10, price: 149, label: "10 posts" },
      { quantity: 15, price: 199, label: "15 posts" },
      { quantity: 30, price: 329, label: "30 posts" },
    ],
    link: "/services/posts",
  },
  {
    id: "short-form-videos",
    title: "Short-Form Videos",
    icon: <Video className="w-5 h-5" />,
    description: "Simple 20-60 second videos for TikTok, Reels, and Shorts.",
    badge: "SOCIAL MEDIA",
    badgeColor: "bg-blue-100 text-blue-700",
    basePrice: 199,
    quantityOptions: [
      { quantity: 5, price: 199, label: "5 videos" },
      { quantity: 10, price: 349, label: "10 videos" },
      { quantity: 15, price: 499, label: "15 videos" },
      { quantity: 20, price: 649, label: "20 videos" },
    ],
    link: "/videos",
  },
  {
    id: "blog-post",
    title: "Blog Post",
    icon: <FileText className="w-5 h-5" />,
    description: "Fully SEO-optimized blog posts for your website.",
    badge: "SEO",
    badgeColor: "bg-emerald-100 text-emerald-700",
    basePrice: 99,
    quantityOptions: [
      { quantity: 2, price: 99, label: "2 Blog Posts" },
      { quantity: 4, price: 179, label: "4 Blog Posts" },
      { quantity: 6, price: 249, label: "6 Blog Posts" },
      { quantity: 8, price: 319, label: "8 Blog Posts" },
    ],
    link: "/services/blogs",
  },
  {
    id: "email-design",
    title: "Email Design",
    icon: <Mail className="w-5 h-5" />,
    description: "Custom emails for your campaigns & flows. Works with any email platform.",
    badge: "EMAIL MARKETING",
    badgeColor: "bg-purple-100 text-purple-700",
    basePrice: 149,
    quantityOptions: [
      { quantity: 2, price: 149, label: "2 emails" },
      { quantity: 4, price: 279, label: "4 emails" },
      { quantity: 6, price: 399, label: "6 emails" },
      { quantity: 8, price: 519, label: "8 emails" },
    ],
    link: "/services/emails",
  },
  {
    id: "seo-backlinks",
    title: "SEO Backlinks",
    icon: <Link2 className="w-5 h-5" />,
    description: "High-quality DA30-65 backlinks to boost your website's search engine rankings.",
    badge: "SEO",
    badgeColor: "bg-emerald-100 text-emerald-700",
    basePrice: 249,
    quantityOptions: [
      { quantity: 3, price: 249, label: "3 backlinks" },
      { quantity: 6, price: 449, label: "6 backlinks" },
      { quantity: 9, price: 629, label: "9 backlinks" },
      { quantity: 12, price: 799, label: "12 backlinks" },
    ],
    link: "/services/backlinks",
  },
  {
    id: "instagram-growth",
    title: "Instagram Growth",
    icon: <TrendingUp className="w-5 h-5" />,
    description: "Real, targeted Instagram followers through manual engagement with your target audience. No bots or automations.",
    badge: "SOCIAL MEDIA",
    badgeColor: "bg-blue-100 text-blue-700",
    basePrice: 149,
    quantityOptions: [
      { quantity: 1, price: 149, label: "1 month" },
      { quantity: 2, price: 279, label: "2 months" },
      { quantity: 3, price: 399, label: "3 months" },
    ],
    link: "/services/instagram-growth",
  },
  {
    id: "meta-ads",
    title: "Meta Ads Management",
    icon: <Target className="w-5 h-5" />,
    description: "Facebook & Instagram paid advertising to drive leads and sales for your business. Includes 5 static ads + 2 video ads.",
    badge: "PAID ADS",
    badgeColor: "bg-orange-100 text-orange-700",
    basePrice: 499,
    quantityOptions: [
      { quantity: 1, price: 499, label: "1 account" },
      { quantity: 2, price: 899, label: "2 accounts" },
      { quantity: 3, price: 1249, label: "3 accounts" },
    ],
    link: "/services/meta-ads",
  },
  {
    id: "google-ads",
    title: "Google Ads Management",
    icon: <Search className="w-5 h-5" />,
    description: "Google Ads management to drive leads and sales.",
    badge: "PAID ADS",
    badgeColor: "bg-orange-100 text-orange-700",
    basePrice: 499,
    quantityOptions: [
      { quantity: 1, price: 499, label: "1 account" },
      { quantity: 2, price: 899, label: "2 accounts" },
      { quantity: 3, price: 1249, label: "3 accounts" },
    ],
    link: "/services/google-ads",
  },
  {
    id: "managed-seo",
    title: "Managed SEO",
    icon: <Search className="w-5 h-5" />,
    description: "Managed SEO to improve rankings and grow your organic traffic. We handle strategy, content, backlinks, and technical fixes.",
    badge: "SEO",
    badgeColor: "bg-emerald-100 text-emerald-700",
    basePrice: 499,
    quantityOptions: [
      { quantity: 1, price: 499, label: "Starter" },
      { quantity: 2, price: 899, label: "Growth" },
      { quantity: 3, price: 1249, label: "Enterprise" },
    ],
    link: "/services/managed-seo",
  },
  {
    id: "static-ads",
    title: "Static Ads",
    icon: <LayoutGrid className="w-5 h-5" />,
    description: "Performance-focused static ads crafted with research, strong concepts, eye-catching design, and copywriting.",
    badge: "PAID SOCIAL",
    badgeColor: "bg-pink-100 text-pink-700",
    basePrice: 99,
    quantityOptions: [
      { quantity: 5, price: 99, label: "5 static ads" },
      { quantity: 10, price: 179, label: "10 static ads" },
      { quantity: 20, price: 329, label: "20 static ads" },
      { quantity: 30, price: 469, label: "30 static ads" },
    ],
    link: "/services/static-ads",
  },
  {
    id: "video-ads",
    title: "Video Ads",
    icon: <Film className="w-5 h-5" />,
    description: "High-performing video ads for paid social. Research, scripting, editing, copywriting. Using client-provided footage, premium stock, UGC-style, or AI assets.",
    badge: "PAID SOCIAL",
    badgeColor: "bg-pink-100 text-pink-700",
    basePrice: 99,
    quantityOptions: [
      { quantity: 2, price: 99, label: "2 video ads" },
      { quantity: 4, price: 179, label: "4 video ads" },
      { quantity: 6, price: 249, label: "6 video ads" },
      { quantity: 8, price: 319, label: "8 video ads" },
    ],
    link: "/video-ads",
  },
  {
    id: "ugc-videos",
    title: "UGC Videos",
    icon: <Video className="w-5 h-5" />,
    description: "Engaging video content created by real users for authentic brand promotion.",
    badge: "PAID SOCIAL",
    badgeColor: "bg-pink-100 text-pink-700",
    basePrice: 599,
    quantityOptions: [
      { quantity: 3, price: 599, label: "3 UGC Videos" },
      { quantity: 6, price: 1099, label: "6 UGC Videos" },
      { quantity: 9, price: 1549, label: "9 UGC Videos" },
    ],
    link: "/services/ugc-videos",
  },
]

function ServiceCard({ config }: { config: ServiceCardConfig }) {
  const [selectedOption, setSelectedOption] = useState(0)
  const currentOption = config.quantityOptions[selectedOption]

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col hover:border-blue-300 hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600">
          {config.icon}
        </div>
        <span className={`text-[10px] font-semibold px-2 py-1 rounded ${config.badgeColor}`}>
          {config.badge}
        </span>
      </div>

      <h3 className="text-base font-semibold text-gray-900 mb-1">{config.title}</h3>
      <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">{config.description}</p>

      <div className="mb-1">
        <span className="text-2xl font-bold text-gray-900">${currentOption.price}</span>
        <span className="text-gray-500 text-sm">/mo</span>
      </div>
      <p className="text-xs text-gray-400 mb-3">Pricing from</p>

      <div className="relative mb-4">
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(Number(e.target.value))}
          className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {config.quantityOptions.map((option, idx) => (
            <option key={idx} value={idx}>
              {option.label} - ${option.price}/mo
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      </div>

      <Link href={`/checkout?plan=${encodeURIComponent(config.title)}&price=${currentOption.price}`} className="w-full mb-3">
        <Button className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium py-2.5 rounded-lg">
          Checkout
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </Link>

      <Link
        href={config.link}
        className="flex items-center justify-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors"
      >
        Learn more
        <Info className="w-3.5 h-3.5" />
      </Link>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            All Services
          </h1>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Get your creative & marketing work done without the hassle of unreliable freelancers, costly agencies. Pay a fixed, monthly, and predictable rate, with no contracts or surprises.
          </p>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {allServices.map((config) => (
              <ServiceCard key={config.id} config={config} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
