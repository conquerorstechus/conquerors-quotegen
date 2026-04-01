"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
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
  Info,
  ChevronDown,
  Share2,
  ShoppingCart,
} from "lucide-react"
import { usePersistedCheckoutCart } from "@/hooks/use-persisted-checkout-cart"

type ServiceQuantityOption = {
  quantity: number
  price: number
  /** Full dropdown row; when set, overrides auto label */
  label?: string
  billing?: "monthly" | "per-post"
}

interface ServiceCardConfig {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  badge: string
  badgeColor: string
  basePrice: number
  /** Optional display-only range for card header price text. */
  displayPriceRange?: string
  quantityOptions: ServiceQuantityOption[]
  link: string
  category: string
}

const serviceCardsData: ServiceCardConfig[] = [
  {
    id: "social-media-posts",
    title: "Social Media Posts",
    icon: <ImageIcon className="w-5 h-5" />,
    description:
      "4, 8, or 12 posts per month for 2 channels (FB/Insta)—on-brand static posts with captions and hashtags.",
    badge: "SOCIAL MEDIA",
    badgeColor: "bg-blue-100 text-blue-700",
    basePrice: 99,
    displayPriceRange: "$99–$199",
    quantityOptions: [
      { quantity: 4, price: 99 },
      { quantity: 8, price: 149 },
      { quantity: 12, price: 199 },
    ],
    link: "/services/posts",
    category: "posts",
  },
  {
    id: "additional-social-channel",
    title: "Additional Social Channel",
    icon: <Share2 className="w-5 h-5" />,
    description: "Add another social platform to your plan—monthly per channel.",
    badge: "SOCIAL MEDIA",
    badgeColor: "bg-blue-100 text-blue-700",
    basePrice: 10,
    quantityOptions: [{ quantity: 1, price: 10, label: "Add another social platform" }],
    link: "/services/posts",
    category: "posts",
  },
  {
    id: "short-form-videos",
    title: "Videos",
    icon: <Video className="w-5 h-5" />,
    description: "4–8 videos (15–60 sec) per month for Reels, TikTok, and Shorts.",
    badge: "SOCIAL MEDIA",
    badgeColor: "bg-blue-100 text-blue-700",
    basePrice: 149,
    displayPriceRange: "$149–$249",
    quantityOptions: [
      { quantity: 4, price: 149 },
      { quantity: 6, price: 199 },
      { quantity: 8, price: 249 },
    ],
    link: "/videos",
    category: "videos",
  },
  {
    id: "blog-post",
    title: "SEO Blog Posts",
    icon: <FileText className="w-5 h-5" />,
    description: "2–6 SEO-optimized blog posts per month for your website.",
    badge: "SEO",
    badgeColor: "bg-emerald-100 text-emerald-700",
    basePrice: 149,
    displayPriceRange: "$149–$349",
    quantityOptions: [
      { quantity: 2, price: 149 },
      { quantity: 4, price: 249 },
      { quantity: 6, price: 349 },
    ],
    link: "/services/blogs",
    category: "blogs",
  },
  {
    id: "email-design",
    title: "Email Design",
    icon: <Mail className="w-5 h-5" />,
    description: "2–6 custom designed emails per month. Works with any email platform.",
    badge: "EMAIL MARKETING",
    badgeColor: "bg-purple-100 text-purple-700",
    basePrice: 199,
    displayPriceRange: "$199–$399",
    quantityOptions: [
      { quantity: 2, price: 199 },
      { quantity: 4, price: 299 },
      { quantity: 6, price: 399 },
    ],
    link: "/services/emails",
    category: "emails",
  },
  {
    id: "instagram-growth",
    title: "Instagram Growth",
    icon: <TrendingUp className="w-5 h-5" />,
    description: "Targeted follower growth—Starter (basic), Standard (moderate), or Plus (advanced) engagement.",
    badge: "SOCIAL MEDIA",
    badgeColor: "bg-blue-100 text-blue-700",
    basePrice: 179,
    displayPriceRange: "$99–$299",
    quantityOptions: [
      { quantity: 1, price: 179, label: "Starter — Basic growth" },
      { quantity: 2, price: 249, label: "Standard — Moderate growth" },
      { quantity: 3, price: 349, label: "Plus — Advanced growth" },
    ],
    link: "/services/instagram-growth",
    category: "instagram-growth",
  },
  {
    id: "meta-ads",
    title: "Meta Ads Management",
    icon: <Target className="w-5 h-5" />,
    description: "Facebook & Instagram ads management—1–3 campaigns, setup, testing, and optimization.",
    badge: "PAID ADS",
    badgeColor: "bg-orange-100 text-orange-700",
    basePrice: 549,
    displayPriceRange: "$199–$499",
    quantityOptions: [
      { quantity: 1, price: 549, label: "Starter — 1 campaign" },
      { quantity: 2, price: 749, label: "Standard — 2 campaigns" },
      { quantity: 3, price: 999, label: "Plus — 3 campaigns" },
    ],
    link: "/services/meta-ads",
    category: "meta-ads",
  },
  {
    id: "google-ads",
    title: "Google Ads Management",
    icon: <Search className="w-5 h-5" />,
    description: "Google Ads campaign management—1–3 campaigns for qualified leads and sales.",
    badge: "PAID ADS",
    badgeColor: "bg-orange-100 text-orange-700",
    basePrice: 549,
    displayPriceRange: "$199–$499",
    quantityOptions: [
      { quantity: 1, price: 549, label: "Starter — 1 campaign" },
      { quantity: 2, price: 749, label: "Standard — 2 campaigns" },
      { quantity: 3, price: 999, label: "Plus — 3 campaigns" },
    ],
    link: "/services/google-ads",
    category: "google-ads",
  },
  {
    id: "managed-seo",
    title: "SEO",
    icon: <Search className="w-5 h-5" />,
    description: "Full SEO—strategy, execution, and monthly visibility into performance.",
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
  /* UGC Videos — hidden from pricing / All Services grid
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
  */
]

function optionLabel(config: ServiceCardConfig, option: ServiceQuantityOption) {
  const suffix = option.billing === "per-post" ? "/post" : "/mo"
  if (option.label) {
    return `${option.label} — $${option.price}${suffix}`
  }
  const unit = config.title.toLowerCase().includes("video")
    ? "videos"
    : config.title.toLowerCase().includes("post")
      ? "posts"
      : config.title.toLowerCase().includes("backlink")
        ? "backlinks"
        : config.title.toLowerCase().includes("email")
          ? "emails"
          : config.title.toLowerCase().includes("blog")
            ? "blog posts"
            : config.title.toLowerCase().includes("meta ads") || config.title.toLowerCase().includes("google ads")
              ? "campaigns"
              : "units"
  return `${option.quantity} ${unit} — $${option.price}${suffix}`
}

function ServiceCard({
  config,
  onAddToCart,
}: {
  config: ServiceCardConfig
  onAddToCart: (input: { catalogId: string; name: string; quantity: string; basePrice: number }) => void
}) {
  const [selectedOption, setSelectedOption] = useState(0)
  const [selectReady, setSelectReady] = useState(false)
  const currentOption = config.quantityOptions[selectedOption]
  const priceSuffix = currentOption.billing === "per-post" ? "/post" : "/mo"
  const displayPrice = config.displayPriceRange ?? `$${currentOption.price}`

  useEffect(() => {
    setSelectReady(true)
  }, [])

  const handleCheckout = () => {
    onAddToCart({
      catalogId: config.id,
      name: config.title,
      quantity: optionLabel(config, currentOption),
      basePrice: currentOption.price,
    })
  }

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
        <span className="text-2xl font-bold text-[#3B82F6]">{displayPrice}</span>
        <span className="text-gray-500 text-sm">{priceSuffix}</span>
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

      <Button
        type="button"
        onClick={handleCheckout}
        className="w-full mb-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium py-2.5 rounded-lg"
      >
        Checkout
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>

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
  const router = useRouter()
  const pathname = usePathname()
  const { lines, addOrMergeLine } = usePersistedCheckoutCart()
  const [cartBounce, setCartBounce] = useState(false)
  const hideOnPricingAll = mode === "all" && pathname === "/pricing"
  /* Temporarily disabled for future use */
  const hiddenOnPricingAllIds = new Set(["static-ads", "video-ads"])

  const filteredCards =
    mode === "all"
      ? serviceCardsData.filter((card) => !hideOnPricingAll || !hiddenOnPricingAllIds.has(card.id))
      : serviceCardsData.filter((card) => card.category === activeTab)
  const selectedCount = lines.reduce((sum, line) => sum + (line.lineQty ?? 1), 0)

  useEffect(() => {
    if (selectedCount <= 0) return
    setCartBounce(true)
    const t = window.setTimeout(() => setCartBounce(false), 280)
    return () => window.clearTimeout(t)
  }, [selectedCount])

  const handleAddToCart = (input: { catalogId: string; name: string; quantity: string; basePrice: number }) => {
    addOrMergeLine({
      catalogId: input.catalogId,
      name: input.name,
      quantity: input.quantity,
      basePrice: input.basePrice,
      lineQty: 1,
    })
  }

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
              <ServiceCard key={config.id} config={config} onAddToCart={handleAddToCart} />
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
      {selectedCount > 0 && (
        <>
          <button
            type="button"
            onClick={() => router.push("/checkout")}
            className={[
              "hidden sm:flex fixed bottom-6 right-6 z-40 items-center gap-2 rounded-full",
              "bg-[#1E5AA8] text-white px-5 py-3 shadow-lg hover:bg-[#154080] transition-all",
              cartBounce ? "scale-105" : "scale-100",
            ].join(" ")}
            aria-label={`Checkout (${selectedCount})`}
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="font-semibold">Checkout ({selectedCount})</span>
          </button>

          <button
            type="button"
            onClick={() => router.push("/checkout")}
            className={[
              "sm:hidden fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center gap-2",
              "bg-[#1E5AA8] text-white px-4 py-3 shadow-[0_-6px_20px_rgba(15,23,42,0.18)] transition-all",
              cartBounce ? "scale-[1.01]" : "scale-100",
            ].join(" ")}
            aria-label={`Checkout (${selectedCount})`}
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="font-semibold">Checkout ({selectedCount})</span>
          </button>
        </>
      )}
    </section>
  )
}

/** Full “All Services” block: same grid as /pricing, for reuse on category pages. */
export function AllServicesSection() {
  return <ServiceCardsGrid mode="all" />
}
