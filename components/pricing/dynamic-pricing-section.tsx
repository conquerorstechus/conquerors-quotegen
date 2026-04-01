"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Link2,
  Search,
  BarChart3,
  Check,
  Hash,
  Palette,
  PenLine,
  Send,
  Shield,
  Target,
  TrendingUp,
  Users,
  Video,
  Zap,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { services } from "@/components/pricing/service-tabs"
import { PackagesSection } from "@/components/pricing/packages-section"
import {
  DYNAMIC_PRICING_TAB_ORDER,
  type DynamicPricingFeatureIcon,
  type DynamicPricingTabId,
  dynamicPricingContent,
} from "@/components/pricing/dynamic-pricing-data"

const FEATURE_ICONS: Record<DynamicPricingFeatureIcon, LucideIcon> = {
  check: Check,
  palette: Palette,
  pen: PenLine,
  hash: Hash,
  send: Send,
  calendar: Calendar,
  users: Users,
  shield: Shield,
  trending: TrendingUp,
  target: Target,
  barChart: BarChart3,
  zap: Zap,
  video: Video,
  search: Search,
  link: Link2,
}


type DynamicPricingSectionProps = {
  /** Initial tab (controlled by URL or parent if needed later) */
  defaultTabId?: DynamicPricingTabId
  /** Replace default config (e.g. from CMS JSON) */
  content?: typeof dynamicPricingContent
}

export function DynamicPricingSection({
  defaultTabId = "posts",
  content = dynamicPricingContent,
}: DynamicPricingSectionProps) {
  const [activeTab, setActiveTab] = useState<DynamicPricingTabId>(defaultTabId)
  const [tierIndex, setTierIndex] = useState(2)
  const tabsScrollRef = useRef<HTMLDivElement>(null)

  const tabConfigs = DYNAMIC_PRICING_TAB_ORDER.map((id) => services.find((s) => s.id === id)).filter(Boolean) as typeof services

  useEffect(() => {
    const nextService = content[activeTab]
    const defaultIndex = Math.min(2, Math.max(0, nextService.tiers.length - 1))
    setTierIndex(defaultIndex)
  }, [activeTab])

  const service = content[activeTab]
  const tier = service.tiers[tierIndex] ?? service.tiers[0]
  const maxTier = Math.max(0, service.tiers.length - 1)
  const fallbackTier = service.tiers[0]
  const packagePlans = [
    { id: "starter" as const, label: "Starter", tier: service.tiers[0] ?? fallbackTier, tierIndex: 0 },
    { id: "standard" as const, label: "Standard", tier: service.tiers[1] ?? fallbackTier, tierIndex: Math.min(1, maxTier) },
    { id: "plus" as const, label: "Plus", tier: service.tiers[2] ?? service.tiers[maxTier], tierIndex: Math.min(2, maxTier) },
  ]
  const selectedPackageId = tierIndex <= 0 ? "starter" : tierIndex === 1 ? "standard" : "plus"

  const scrollTabs = useCallback((dir: "left" | "right") => {
    const el = tabsScrollRef.current
    if (!el) return
    const delta = dir === "left" ? -240 : 240
    el.scrollBy({ left: delta, behavior: "smooth" })
  }, [])

  const checkoutHref = `/checkout?plan=${encodeURIComponent(service.title)}&price=${tier.price}&option=${encodeURIComponent(tier.selectionLabel)}`

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Scrollable tabs */}
        <div className="relative mb-4">
          <button
            type="button"
            aria-label="Scroll tabs left"
            onClick={() => scrollTabs("left")}
            className="absolute left-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm hover:bg-muted/80"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div
            ref={tabsScrollRef}
            className="-mx-1 flex gap-2 overflow-x-auto scroll-smooth px-1 py-1 pl-10 pr-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {tabConfigs.map(({ id, label, icon: Icon }) => {
              const isActive = activeTab === id
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveTab(id as DynamicPricingTabId)}
                  className={cn(
                    "flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "border-[#1E5AA8] bg-[#1E5AA8] text-white shadow-md"
                      : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {label}
                </button>
              )
            })}
          </div>
          <button
            type="button"
            aria-label="Scroll tabs right"
            onClick={() => scrollTabs("right")}
            className="absolute right-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm hover:bg-muted/80"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <PackagesSection
          service={service}
          plans={packagePlans}
          selectedPlanId={selectedPackageId}
          onSelectPlan={(plan) => setTierIndex(plan.tierIndex)}
          checkoutHref={checkoutHref}
          featureIcons={FEATURE_ICONS}
        />
      </div>
    </section>
  )
}
