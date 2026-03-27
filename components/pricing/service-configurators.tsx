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
      "Static, single-image social media posts custom made with your branding. Created & posted monthly to your social media channels. Includes strategy, engaging captions, and relevant hashtags tailored for your audience.",
    baseQuantity: 4,
    quantityOptions: [4, 8, 15, 30],
    pricingTiers: {
      4: 99,
      8: 149,
      15: 199,
      30: 329
    },
    features: [
      { icon: <Paintbrush className="w-4 h-4" />, text: "Posts in your branding" },
      { icon: <FileSearch className="w-4 h-4" />, text: "Captions and hashtags" },
      { icon: <CalendarCheck className="w-4 h-4" />, text: "Posted for you (optional)" },
      { icon: <Phone className="w-4 h-4" />, text: "Onboarding call (optional)" },
      { icon: <BadgeCheck className="w-4 h-4" />, text: "1 social channel included" },
      { icon: <CopyCheck className="w-4 h-4" />, text: "+$10/mo each extra channel" },
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
    description: "Multi-slide carousel posts for social media engagement.",
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
    title: "Short-Form Videos",
    icon: <Video className="w-6 h-6" />,
    description:
      "Engaging 15-60 second short-form videos for TikTok, Reels, and Shorts. Edited with premium stock footage or raw footage provided by client.",
    baseQuantity: 4,
    basePrice: 149,
    quantityOptions: [4, 8, 12, 16, 20],
    pricePerUnit: 37.25,
    features: [
      { icon: <Paintbrush className="w-4 h-4" />, text: "Videos in your branding" },
      { icon: <FileSearch className="w-4 h-4" />, text: "Captions & hashtags" },
      { icon: <CalendarCheck className="w-4 h-4" />, text: "Posted for you (optional)" },
      { icon: <Phone className="w-4 h-4" />, text: "Onboarding call (optional)" },
      { icon: <BadgeCheck className="w-4 h-4" />, text: "1 social channel included" },
      { icon: <CopyCheck className="w-4 h-4" />, text: "$10/mo each extra channel" },
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
    description: "User generated style videos optimized for social media ads.",
    baseQuantity: 3,
    basePrice: 649,
    pricePerUnit: 216.33,
    quantityOptions: [3, 6, 9],
    features: [
      { icon: <Check className="w-4 h-4" />, text: "3 UGC style videos" },
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
      "Performance-focused static ad creatives built to grab attention and convert. From research and concept ideation to design, copy, and headlines, we handle it all.",
    baseQuantity: 5,
    basePrice: 149,
    quantityOptions: [5, 10, 20, 30],
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
      "High-performing video ads designed for paid social. We handle research, scripting, editing, and copywriting - using a mix of client-provided clips, stock UGC-style footage, premium stock libraries, or AI-generated content.",
    baseQuantity: 2,
    basePrice: 149,
    quantityOptions: [2, 4, 6, 8, 12],
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
      "Professional email templates and designs crafted for your brand. Get 2 custom-designed, responsive emails per month.",
    baseQuantity: 2,
    basePrice: 199,
    quantityOptions: [2, 4, 6, 8],
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
    quantityOptions: [2, 4, 6, 8],
    description: "SEO optimized blog content to increase search visibility.",
    features: [
      { icon: <FileSearch className="w-4 h-4" />, text: "Keyword research" },
      { icon: <FileSearch className="w-4 h-4" />, text: "2 SEO optimized blog posts" },
      { icon: <FileSearch className="w-4 h-4" />, text: "On-page SEO optimization" },
      { icon: <FileSearch className="w-4 h-4" />, text: "Content formatting" }
    ],
    category: "blogs"
  },
  {
    id: "seo-backlinks",
    title: "SEO Backlinks",
    icon: <Link2 className="w-6 h-6" />,
    description: "High quality backlinks to improve search engine rankings.",
    baseQuantity: 3,
    basePrice: 299,
    pricePerUnit: 99.67,
    quantityOptions: [3, 6, 9, 12],
    features: [
      { icon: <FileSearch className="w-4 h-4" />, text: "3 high quality backlinks" },
      { icon: <FileSearch className="w-4 h-4" />, text: "DA 20–65 websites" },
      { icon: <FileSearch className="w-4 h-4" />, text: "White-hat link building" },
      { icon: <FileSearch className="w-4 h-4" />, text: "SEO performance improvement" }
    ],
    category: "backlinks"
  },
  {
    id: "managed-seo",
    title: "Managed SEO",
    icon: <Search className="w-6 h-6" />,
    description: "Full SEO management to improve website ranking and organic traffic.",
    baseQuantity: 1,
    basePrice: 549,
    pricePerUnit: 549,
    quantityOptions: [1, 2, 3, 4, 5],
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
      "Strategic Facebook and Instagram advertising campaigns optimized for results. Full campaign management and daily optimization.",
    baseQuantity: 1,
    basePrice: 549,
    quantityOptions: [1, 2, 3],
    pricePerUnit: 549,
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
      "Results-driven Google Ads campaigns to increase visibility and conversions. Strategic campaign management with continuous optimization.",
    baseQuantity: 1,
    basePrice: 549,
    quantityOptions: [1, 2, 3],
    pricePerUnit: 549,
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
    description: "Organic Instagram growth through strategic engagement and content optimization.",
    baseQuantity: 1,
    basePrice: 199,
    pricePerUnit: 199,
    quantityOptions: [1, 2, 3],
    features: [
      { icon: <Check className="w-4 h-4" />, text: "Organic follower growth" },
      { icon: <Check className="w-4 h-4" />, text: "Engagement optimization" },
      { icon: <Check className="w-4 h-4" />, text: "Hashtag strategy" },
      { icon: <Check className="w-4 h-4" />, text: "Content scheduling" }
    ],
    category: "instagram-growth"
  },
  {
    id: "instagram-stories",
    title: "Instagram Stories",
    icon: <Instagram className="w-6 h-6" />,
    description: "Engaging Instagram story content for your brand.",
    baseQuantity: 10,
    basePrice: 99,
    pricePerUnit: 9.9,
    quantityOptions: [10, 20, 30],
    features: [
      { icon: <Check className="w-4 h-4" />, text: "10 story designs" },
      { icon: <Check className="w-4 h-4" />, text: "Branded visuals" },
      { icon: <Check className="w-4 h-4" />, text: "Optimized captions" },
      { icon: <Check className="w-4 h-4" />, text: "Ready for publishing" }
    ],
    category: "instagram-growth"
  },
]

function ServiceCard({ config }: { config: ServiceConfig }) {
  const [quantity, setQuantity] = useState(config.baseQuantity)
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0)
  const quantityIndex = config.quantityOptions.indexOf(quantity)

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
  const qualifiesForCalls = price >= 149

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
              <p className="text-sm text-muted-foreground">
                {quantity} {config.id === "ugc" ? "UGC Videos" : config.title.toLowerCase()}
              </p>
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
          <p className="text-sm font-medium text-foreground mb-3">
            Select monthly number of {config.id === "ugc" ? "UGC Videos" : config.title.toLowerCase()}
          </p>
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
                {qty}
              </button>
            ))}
          </div>
        </div>

        {/* Qualification Notice */}
        <div
          className={`p-3 rounded-lg text-sm ${qualifiesForCalls ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}
        >
          {qualifiesForCalls
            ? "✓ Your order is over $149+ and qualifies for onboarding & monthly calls"
            : "Orders over $149+ qualify for monthly content review calls"}
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
          <Link href={`/checkout?plan=${config.title}&price=${price}`} className={config.link ? "w-full" : "col-span-2 w-full"}>
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
