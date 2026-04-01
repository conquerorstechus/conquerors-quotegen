"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ImageIcon,
  Video,
  Users,
  LayoutGrid,
  Film,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  X,
  Paintbrush,
  FileSearch,
  CalendarCheck,
  Phone,
  BadgeCheck,
  CopyCheck,
  Mail,
  Target,
  Search,
  TrendingUp,
  Check,
  FileText,
  Link2,
} from "lucide-react"

interface ServiceConfig {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  baseQuantity: number
  basePrice?: number
  quantityOptions: number[]
  pricePerUnit?: number
  pricingTiers?: Record<number, number>
  /** Shown in the quantity row when set (e.g. "1 campaigns") */
  quantityUnit?: string
  /** Button labels for tier-style quantities (e.g. Instagram Starter/Standard/Plus) */
  tierLabels?: Record<number, string>
  features: { icon: React.ReactNode; text: string }[]
  platforms?: { icon: React.ReactNode; name: string }[]
  videoUrls?: string[]
  link?: string
  category: string // maps to service tab id
}

const serviceConfigs: ServiceConfig[] = [
  {
    id: "posts",
    title: "Social Media Posts",
    icon: <ImageIcon className="w-6 h-6" />,
    description:
      "Static social posts custom-made with your branding—4, 8, or 12 posts per month for 2 social channels (Facebook & Instagram), with engaging captions and hashtags.",
    baseQuantity: 4,
    quantityOptions: [4, 8, 12],
    pricingTiers: {
      4: 99,
      8: 149,
      12: 199,
    },
    features: [
      { icon: <Paintbrush className="w-4 h-4" />, text: "Posts in your branding" },
      { icon: <FileSearch className="w-4 h-4" />, text: "Captions and hashtags" },
      { icon: <CopyCheck className="w-4 h-4" />, text: "$10 for extra channel" },
      { icon: <CalendarCheck className="w-4 h-4" />, text: "Posted for you (optional)" },
      { icon: <Phone className="w-4 h-4" />, text: "Onboarding call (optional)" },
      { icon: <BadgeCheck className="w-4 h-4" />, text: "2 social channels (FB/Insta)" },
    ],
    platforms: [
      { icon: <Facebook className="w-5 h-5" />, name: "Facebook" },
      { icon: <Instagram className="w-5 h-5" />, name: "Instagram" },
      { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn" },
      { icon: <X className="w-5 h-5" />, name: "X" },
    ],
    category: "posts"
  },
  {
    id: "carousel-posts",
    title: "Carousel Posts",
    icon: <ImageIcon className="w-6 h-6" />,
    description: "Additional carousel post—multi-slide creative for social engagement.",
    baseQuantity: 1,
    basePrice: 55,
    pricePerUnit: 55,
    quantityOptions: [1, 2, 3, 4, 5],
    features: [
      { icon: <Check className="w-4 h-4" />, text: "Custom carousel design" },
      { icon: <Check className="w-4 h-4" />, text: "Multiple slide layouts" },
      { icon: <Check className="w-4 h-4" />, text: "Optimized captions" },
      { icon: <Check className="w-4 h-4" />, text: "Brand aligned visuals" }
    ],
    category: "posts"
  },
  {
    id: "videos",
    title: "Videos",
    icon: <Video className="w-6 h-6" />,
    description:
      "4–8 short-form videos (15–60 sec) per month for Instagram Reels, TikTok, and YouTube Shorts. Edited with premium stock footage or client-provided footage.",
    baseQuantity: 4,
    basePrice: 149,
    quantityOptions: [4, 6, 8],
    pricingTiers: { 4: 149, 6: 199, 8: 249 },
    pricePerUnit: 37.25,
    features: [
      { icon: <Paintbrush className="w-4 h-4" />, text: "Videos for your branding" },
      { icon: <FileSearch className="w-4 h-4" />, text: "Captions & on-screen text" },
      { icon: <CalendarCheck className="w-4 h-4" />, text: "Monthly delivery cadence" },
      { icon: <Phone className="w-4 h-4" />, text: "Onboarding call (optional)" },
      { icon: <BadgeCheck className="w-4 h-4" />, text: "Platform-native aspect ratios" },
    ],
    platforms: [
      { icon: <Instagram className="w-5 h-5" />, name: "Instagram" },
      { icon: <Youtube className="w-5 h-5" />, name: "YouTube" },
    ],
    category: "videos"
  },
  {
    id: "ugc-videos",
    title: "UGC Videos",
    icon: <Video className="w-6 h-6" />,
    description: "3 user-generated videos per month—authentic-style creative optimized for social ads.",
    baseQuantity: 3,
    basePrice: 649,
    pricePerUnit: 216.33,
    quantityOptions: [3],
    pricingTiers: { 3: 649 },
    features: [
      { icon: <Check className="w-4 h-4" />, text: "3 user-generated videos" },
      { icon: <Check className="w-4 h-4" />, text: "Short form content" },
      { icon: <Check className="w-4 h-4" />, text: "Optimized for social media ads" },
      { icon: <Check className="w-4 h-4" />, text: "Edited and ready to publish" }
    ],
    category: "videos"
  },
  {
    id: "static-ads",
    title: "Static Ads",
    icon: <LayoutGrid className="w-6 h-6" />,
    description:
      "5 static ad creatives per month—research-backed concepts, design, and conversion-focused copy for paid social.",
    baseQuantity: 5,
    basePrice: 149,
    quantityOptions: [5],
    pricingTiers: { 5: 149 },
    pricePerUnit: 29.8,
    features: [
      { icon: <Paintbrush className="w-4 h-4" />, text: "Static ads in your branding" },
      { icon: <FileSearch className="w-4 h-4" />, text: "Fast, research-backed ideation & concepts" },
      { icon: <CalendarCheck className="w-4 h-4" />, text: "Design & copywriting for performance" },
      { icon: <BadgeCheck className="w-4 h-4" />, text: "Monthly delivery of fresh ad concepts" },
      { icon: <CopyCheck className="w-4 h-4" />, text: "Ready-to-launch formats for paid social" },
    ],
    category: "static-ads"
  },
  {
    id: "video-ads",
    title: "Video Ads",
    icon: <Film className="w-6 h-6" />,
    description:
      "2 video ads per month for paid social—research, scripting, editing, and copy using client clips, stock, UGC-style, or AI-assisted assets.",
    baseQuantity: 2,
    basePrice: 149,
    quantityOptions: [2],
    pricingTiers: { 2: 149 },
    pricePerUnit: 74.5,
    features: [
      { icon: <Paintbrush className="w-4 h-4" />, text: "Video ads in your branding" },
      { icon: <FileSearch className="w-4 h-4" />, text: "Research & scripting" },
      { icon: <CalendarCheck className="w-4 h-4" />, text: "Professional editing" },
      { icon: <BadgeCheck className="w-4 h-4" />, text: "Copywriting included" },
      { icon: <CopyCheck className="w-4 h-4" />, text: "Platform optimized" },
    ],
    category: "video-ads"
  },
  {
    id: "emails",
    title: "Email Design",
    icon: <Mail className="w-6 h-6" />,
    description:
      "2–6 custom designed emails per month—responsive, on-brand templates ready for your ESP.",
    baseQuantity: 2,
    basePrice: 199,
    quantityOptions: [2, 4, 6],
    pricingTiers: { 2: 199, 4: 299, 6: 399 },
    pricePerUnit: 99.5,
    features: [
      { icon: <Paintbrush className="w-4 h-4" />, text: "Custom email templates" },
      { icon: <FileSearch className="w-4 h-4" />, text: "Brand aligned design" },
      { icon: <CalendarCheck className="w-4 h-4" />, text: "Responsive layouts" },
      { icon: <BadgeCheck className="w-4 h-4" />, text: "Ready to deploy" },
    ],
    category: "emails"
  },
  {
    id: "seo-blog-posts",
    title: "SEO Blog Posts",
    icon: <FileText className="w-6 h-6" />,
    baseQuantity: 2,
    basePrice: 149,
    pricePerUnit: 74.5,
    quantityOptions: [2, 4, 6],
    pricingTiers: { 2: 149, 4: 249, 6: 349 },
    description: "2–6 SEO-optimized blog posts per month to increase search visibility.",
    features: [
      { icon: <FileSearch className="w-4 h-4" />, text: "Keyword-informed outlines" },
      { icon: <FileSearch className="w-4 h-4" />, text: "Scaled SEO-optimized blog volume" },
      { icon: <FileSearch className="w-4 h-4" />, text: "On-page SEO optimization" },
      { icon: <FileSearch className="w-4 h-4" />, text: "Content formatting" }
    ],
    category: "blogs"
  },
  {
    id: "seo-backlinks",
    title: "SEO Backlinks",
    icon: <Link2 className="w-6 h-6" />,
    description: "3–9 backlinks per month (DA20–65) to improve site authority and rankings.",
    baseQuantity: 3,
    basePrice: 299,
    pricePerUnit: 99.67,
    quantityOptions: [3, 6, 9],
    pricingTiers: { 3: 299, 6: 499, 9: 699 },
    features: [
      { icon: <FileSearch className="w-4 h-4" />, text: "Real DA20–65 backlinks" },
      { icon: <FileSearch className="w-4 h-4" />, text: "DA20–65 websites" },
      { icon: <FileSearch className="w-4 h-4" />, text: "White-hat link building" },
      { icon: <FileSearch className="w-4 h-4" />, text: "SEO performance improvement" }
    ],
    category: "backlinks"
  },
  {
    id: "managed-seo",
    title: "SEO",
    icon: <Search className="w-6 h-6" />,
    description: "Full SEO—strategy, on-page, technical work, and monthly performance visibility.",
    baseQuantity: 1,
    basePrice: 549,
    pricePerUnit: 549,
    quantityOptions: [1],
    features: [
      { icon: <FileSearch className="w-4 h-4" />, text: "Keyword research & strategy" },
      { icon: <FileSearch className="w-4 h-4" />, text: "On-page SEO optimization" },
      { icon: <FileSearch className="w-4 h-4" />, text: "Technical SEO improvements" },
      { icon: <FileSearch className="w-4 h-4" />, text: "Monthly SEO performance reports" }
    ],
    category: "backlinks"
  },
  {
    id: "meta-ads",
    title: "Meta Ads Management",
    icon: <Target className="w-6 h-6" />,
    description:
      "Facebook & Instagram ads management—1–3 campaigns, setup, testing, and ongoing optimization.",
    baseQuantity: 1,
    basePrice: 549,
    quantityOptions: [1, 2, 3],
    pricingTiers: { 1: 549, 2: 749, 3: 999 },
    pricePerUnit: 549,
    quantityUnit: "campaigns",
    features: [
      { icon: <FileSearch className="w-4 h-4" />, text: "Campaign strategy" },
      { icon: <CalendarCheck className="w-4 h-4" />, text: "Daily optimization" },
      { icon: <BadgeCheck className="w-4 h-4" />, text: "Performance reporting" },
      { icon: <CopyCheck className="w-4 h-4" />, text: "Ad creation & testing" },
    ],
    category: "meta-ads"
  },
  {
    id: "google-ads",
    title: "Google Ads Management",
    icon: <Search className="w-6 h-6" />,
    description:
      "Google Ads campaign management—1–3 search and performance campaigns with ongoing optimization.",
    baseQuantity: 1,
    basePrice: 549,
    quantityOptions: [1, 2, 3],
    pricingTiers: { 1: 549, 2: 749, 3: 999 },
    pricePerUnit: 549,
    quantityUnit: "campaigns",
    features: [
      { icon: <FileSearch className="w-4 h-4" />, text: "Keyword research" },
      { icon: <CalendarCheck className="w-4 h-4" />, text: "Bid management" },
      { icon: <BadgeCheck className="w-4 h-4" />, text: "Performance tracking" },
      { icon: <CopyCheck className="w-4 h-4" />, text: "Monthly optimization" },
    ],
    category: "google-ads"
  },
  {
    id: "instagram-growth",
    title: "Instagram Growth",
    icon: <TrendingUp className="w-6 h-6" />,
    description: "Targeted follower growth—Starter (basic), Standard (moderate), or Plus (advanced) programs.",
    baseQuantity: 1,
    basePrice: 179,
    pricePerUnit: 179,
    quantityOptions: [1, 2, 3],
    pricingTiers: { 1: 179, 2: 249, 3: 349 },
    tierLabels: { 1: "Starter", 2: "Standard", 3: "Plus" },
    features: [
      { icon: <Check className="w-4 h-4" />, text: "Targeted follower growth" },
      { icon: <Check className="w-4 h-4" />, text: "Audience alignment with your niche" },
      { icon: <Check className="w-4 h-4" />, text: "Engagement-led growth strategy" },
      { icon: <Check className="w-4 h-4" />, text: "Platform-rules-friendly approach" }
    ],
    category: "instagram-growth"
  },
  {
    id: "instagram-stories",
    title: "Instagram Stories",
    icon: <Instagram className="w-6 h-6" />,
    description: "10 Instagram stories per month—branded story creative for your feed.",
    baseQuantity: 10,
    basePrice: 99,
    pricePerUnit: 9.9,
    quantityOptions: [10],
    pricingTiers: { 10: 99 },
    features: [
      { icon: <Check className="w-4 h-4" />, text: "10 stories" },
      { icon: <Check className="w-4 h-4" />, text: "Branded visuals" },
      { icon: <Check className="w-4 h-4" />, text: "Optimized captions" },
      { icon: <Check className="w-4 h-4" />, text: "Ready for publishing" }
    ],
    category: "instagram-growth"
  },
]

function quantitySubtitle(config: ServiceConfig, quantity: number) {
  if (config.tierLabels?.[quantity]) {
    const growth =
      quantity === 1 ? "Basic growth" : quantity === 2 ? "Moderate growth" : quantity === 3 ? "Advanced growth" : "Growth tier"
    return `${config.tierLabels[quantity]} — ${growth}`
  }
  if (config.quantityUnit) {
    return `${quantity} ${config.quantityUnit}`
  }
  if (config.id === "ugc" || config.id === "ugc-videos") {
    return `${quantity} UGC Videos`
  }
  return `${quantity} ${config.title.toLowerCase()}`
}

function quantityPromptLabel(config: ServiceConfig) {
  if (config.id === "instagram-growth") return "Select growth package"
  if (config.quantityUnit === "campaigns") return "Select number of campaigns"
  if (config.id === "ugc" || config.id === "ugc-videos") return "Select monthly number of UGC Videos"
  return `Select monthly number of ${config.title.toLowerCase()}`
}

function ServiceCard({ config }: { config: ServiceConfig }) {
  const [quantity, setQuantity] = useState(config.baseQuantity)
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0)

  const calculatePrice = () => {
    if (config.pricingTiers) {
      return config.pricingTiers[quantity] || config.pricingTiers[config.baseQuantity]
    }
    if (config.id === "ugc") {
      return Math.round((config.basePrice || 0) * (quantity / config.baseQuantity))
    }
    return Math.round((config.pricePerUnit || 0) * quantity)
  }

  const price = calculatePrice()

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              {config.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{config.title}</h3>
              <p className="text-sm text-muted-foreground">{quantitySubtitle(config, quantity)}</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold text-foreground">${price}</span>
            <span className="text-muted-foreground">/mo</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-6">{config.description}</p>

        {/* Video Preview */}
        {config.videoUrls && config.videoUrls.length > 0 && (
          <div className="mb-6">
            <div className="rounded-xl overflow-hidden bg-black/20 mb-3">
              <video
                className="w-full h-auto rounded-xl"
                controls
                autoPlay
                muted
                loop
                key={selectedVideoIndex}
              >
                <source src={config.videoUrls[selectedVideoIndex]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Video Selector Tabs */}
            {config.videoUrls.length > 1 && (
              <div className="flex gap-2">
                {config.videoUrls.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedVideoIndex(index)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                      selectedVideoIndex === index
                        ? "bg-[#1E5AA8] text-white"
                        : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                    }`}
                  >
                    Video {index + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Platforms */}
        {config.platforms && (
          <div className="flex items-center gap-3 mb-6">
            {config.platforms.map((platform, idx) => (
              <div
                key={idx}
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {platform.icon}
              </div>
            ))}
          </div>
        )}

        {/* Quantity Selector */}
        <div className="mb-4">
          <p className="text-sm font-medium text-foreground mb-3">{quantityPromptLabel(config)}</p>
          <div className="flex flex-wrap gap-2">
            {config.quantityOptions.map((qty) => (
              <button
                key={qty}
                onClick={() => setQuantity(qty)}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${
                    quantity === qty
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }
                `}
              >
                {config.tierLabels?.[qty] ?? qty}
              </button>
            ))}
          </div>
        </div>

      </div>

      <div className="p-6 bg-secondary/30">
        <h4 className="text-sm font-semibold text-foreground mb-4">{config.title}</h4>
        <ul className="space-y-3 mb-6">
          {config.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="text-primary">{feature.icon}</span>
              {feature.text}
            </li>
          ))}
        </ul>

        <p className="text-xs text-muted-foreground mb-4">
          <strong>Pricing is in USD.</strong> Your selected plan renews automatically each month but you can{" "}
          <strong>cancel anytime</strong>. By subscribing, you agree to our Terms & Conditions and Refund Policy.
        </p>

        <div className="grid grid-cols-2 gap-3">
          {config.link && (
            <Link href={config.link} className="w-full">
              <Button className="w-full bg-secondary text-foreground hover:bg-secondary/80 group">
                Learn More
              </Button>
            </Link>
          )}
          <Link
            href={`/checkout?plan=${encodeURIComponent(config.title)}&price=${price}&option=${encodeURIComponent(quantitySubtitle(config, quantity))}`}
            className={config.link ? "w-full" : "col-span-2 w-full"}
          >
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group">
              Checkout
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="flex items-center justify-between mt-4">
          <button className="text-sm text-muted-foreground hover:text-foreground underline">
            How the service works
          </button>
          <button className="text-sm text-primary hover:underline">Schedule a demo</button>
        </div>
      </div>
    </div>
  )
}

interface ServiceConfiguratorsProps {
  activeTab?: string
}

export function ServiceConfigurators({ activeTab = "posts" }: ServiceConfiguratorsProps) {
  const filteredConfigs = serviceConfigs.filter(config => config.category === activeTab)

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {filteredConfigs.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {filteredConfigs.map((config) => (
              <ServiceCard key={config.id} config={config} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">Coming soon! We&apos;re working on adding more services in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
