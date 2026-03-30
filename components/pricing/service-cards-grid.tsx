"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
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
} from "lucide-react"

interface ServiceCardConfig {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  badge: string
  badgeColor: string
  basePrice: number
  quantityOptions: { quantity: number; price: number }[]
  link: string
  category: string
}

const serviceCardsData: ServiceCardConfig[] = [
  {
    id: "social-media-posts",
    title: "Social Media Posts",
    icon: <ImageIcon className="w-5 h-5" />,
    description:
      "4, 8, or 12 posts per month for 2 social channels (FB/Insta)—on-brand static posts with captions and hashtags.",
    badge: "SOCIAL MEDIA",
    badgeColor: "bg-blue-100 text-blue-700",
    basePrice: 99,
    quantityOptions: [
      { quantity: 4, price: 99 },
      { quantity: 8, price: 149 },
      { quantity: 12, price: 199 },
    ],
    link: "/services/posts",
    category: "posts",
  },
  {
    id: "short-form-videos",
    title: "Short-Form Videos",
    icon: <Video className="w-5 h-5" />,
    description: "4 videos (15–60 sec) per month for Reels, TikTok, and Shorts.",
    badge: "SOCIAL MEDIA",
    badgeColor: "bg-blue-100 text-blue-700",
    basePrice: 149,
    quantityOptions: [{ quantity: 4, price: 149 }],
    link: "/videos",
    category: "videos",
  },
  {
    id: "blog-post",
    title: "SEO Blog Posts",
    icon: <FileText className="w-5 h-5" />,
    description: "2 SEO-optimized blog posts per month for your website.",
    badge: "SEO",
    badgeColor: "bg-emerald-100 text-emerald-700",
    basePrice: 149,
    quantityOptions: [{ quantity: 2, price: 149 }],
    link: "/services/blogs",
    category: "blogs",
  },
  {
    id: "email-design",
    title: "Email Design",
    icon: <Mail className="w-5 h-5" />,
    description: "2 custom designed emails per month. Works with any email platform.",
    badge: "EMAIL MARKETING",
    badgeColor: "bg-purple-100 text-purple-700",
    basePrice: 199,
    quantityOptions: [{ quantity: 2, price: 199 }],
    link: "/services/emails",
    category: "emails",
  },
  {
    id: "seo-backlinks",
    title: "SEO Backlinks",
    icon: <Link2 className="w-5 h-5" />,
    description: "3 backlinks per month (DA20–65) to strengthen authority and rankings.",
    badge: "SEO",
    badgeColor: "bg-emerald-100 text-emerald-700",
    basePrice: 299,
    quantityOptions: [{ quantity: 3, price: 299 }],
    link: "/services/backlinks",
    category: "backlinks",
  },
  {
    id: "instagram-growth",
    title: "Instagram Growth",
    icon: <TrendingUp className="w-5 h-5" />,
    description: "Targeted follower growth through compliant, engagement-led strategy—no bots.",
    badge: "SOCIAL MEDIA",
    badgeColor: "bg-blue-100 text-blue-700",
    basePrice: 179,
    quantityOptions: [{ quantity: 1, price: 179 }],
    link: "/services/instagram-growth",
    category: "instagram-growth",
  },
  {
    id: "meta-ads",
    title: "Meta Ads Management",
    icon: <Target className="w-5 h-5" />,
    description: "Facebook & Instagram ads management—campaign setup, testing, and optimization.",
    badge: "PAID ADS",
    badgeColor: "bg-orange-100 text-orange-700",
    basePrice: 549,
    quantityOptions: [{ quantity: 1, price: 549 }],
    link: "/services/meta-ads",
    category: "meta-ads",
  },
  {
    id: "google-ads",
    title: "Google Ads Management",
    icon: <Search className="w-5 h-5" />,
    description: "Google Ads campaign management to drive qualified leads and sales.",
    badge: "PAID ADS",
    badgeColor: "bg-orange-100 text-orange-700",
    basePrice: 549,
    quantityOptions: [{ quantity: 1, price: 549 }],
    link: "/services/google-ads",
    category: "google-ads",
  },
  {
    id: "managed-seo",
    title: "Managed SEO",
    icon: <Search className="w-5 h-5" />,
    description: "Full SEO management—strategy, execution, and monthly visibility into performance.",
    badge: "SEO",
    badgeColor: "bg-emerald-100 text-emerald-700",
    basePrice: 549,
    quantityOptions: [{ quantity: 1, price: 549 }],
    link: "/services/managed-seo",
    category: "backlinks",
  },
  {
    id: "static-ads",
    title: "Static Ads",
    icon: <LayoutGrid className="w-5 h-5" />,
    description: "5 static ad creatives per month—concepts, design, and copy for paid social.",
    badge: "PAID SOCIAL",
    badgeColor: "bg-pink-100 text-pink-700",
    basePrice: 149,
    quantityOptions: [{ quantity: 5, price: 149 }],
    link: "/services/static-ads",
    category: "static-ads",
  },
  {
    id: "video-ads",
    title: "Video Ads",
    icon: <Film className="w-5 h-5" />,
    description:
      "2 video ads per month for paid social—scripting, editing, and copy for Meta, TikTok, and YouTube placements.",
    badge: "PAID SOCIAL",
    badgeColor: "bg-pink-100 text-pink-700",
    basePrice: 149,
    quantityOptions: [{ quantity: 2, price: 149 }],
    link: "/video-ads",
    category: "video-ads",
  },
  {
    id: "ugc-videos",
    title: "UGC Videos",
    icon: <Video className="w-5 h-5" />,
    description: "3 user-generated videos per month—authentic-style creative for social and ads.",
    badge: "PAID SOCIAL",
    badgeColor: "bg-pink-100 text-pink-700",
    basePrice: 649,
    quantityOptions: [{ quantity: 3, price: 649 }],
    link: "/services/ugc-videos",
    category: "videos",
  },
]

function optionLabel(config: ServiceCardConfig, option: { quantity: number; price: number }) {
  const unit = config.title.toLowerCase().includes("video")
    ? "videos"
    : config.title.toLowerCase().includes("post")
      ? "posts"
      : config.title.toLowerCase().includes("backlink")
        ? "backlinks"
        : config.title.toLowerCase().includes("email")
          ? "emails"
          : config.title.toLowerCase().includes("blog")
            ? "Blog Posts"
            : "units"
  return `${option.quantity} ${unit} - $${option.price}/mo`
}

function ServiceCard({ config }: { config: ServiceCardConfig }) {
  const [selectedOption, setSelectedOption] = useState(0)
  const [selectReady, setSelectReady] = useState(false)
  const currentOption = config.quantityOptions[selectedOption]

  useEffect(() => {
    setSelectReady(true)
  }, [])

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
        <span className="text-2xl font-bold text-[#3B82F6]">${currentOption.price}</span>
        <span className="text-gray-500 text-sm">/mo</span>
      </div>
      <p className="text-xs text-gray-400 mb-3">Pricing from</p>

      <div className="relative mb-4">
        {selectReady ? (
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(Number(e.target.value))}
            className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {config.quantityOptions.map((option, idx) => (
              <option key={idx} value={idx}>
                {optionLabel(config, option)}
              </option>
            ))}
          </select>
        ) : (
          <div
            className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 pr-8"
            aria-hidden
          >
            {optionLabel(config, currentOption)}
          </div>
        )}
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
        className="flex items-center justify-center gap-1 text-sm text-[#3B82F6] hover:text-[#2563EB] transition-colors"
      >
        Learn more
        <Info className="w-3.5 h-3.5" />
      </Link>
    </div>
  )
}

interface ServiceCardsGridProps {
  activeTab?: string
  /** When `all`, shows the full “All Services” heading and every service card (used on /pricing and category pages). */
  mode?: "filtered" | "all"
}

const ALL_SERVICES_DESCRIPTION =
  "Browse every service we offer and bundle what you need—mix, match, and add extras at checkout."

export function ServiceCardsGrid({ activeTab = "posts", mode = "filtered" }: ServiceCardsGridProps) {
  const filteredCards =
    mode === "all" ? serviceCardsData : serviceCardsData.filter((card) => card.category === activeTab)

  return (
    <section
      className={`py-12 md:py-16 px-4 sm:px-6 lg:px-8 ${
        mode === "all" ? "bg-gray-50/80 border-t border-gray-100" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {mode === "all" && (
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2A4A] tracking-tight mb-3">All Services</h2>
            <p className="text-base text-[#6B7280] leading-relaxed">{ALL_SERVICES_DESCRIPTION}</p>
          </div>
        )}
        {filteredCards.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {filteredCards.map((config) => (
              <ServiceCard key={config.id} config={config} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              Coming soon! We&apos;re working on adding more services in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

/** Full “All Services” block: same grid as /pricing, for reuse on category pages. */
export function AllServicesSection() {
  return <ServiceCardsGrid mode="all" />
}
