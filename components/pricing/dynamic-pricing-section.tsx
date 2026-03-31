"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  LayoutGrid,
  Link2,
  Play,
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
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
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

const LEGAL = (
  <>
    Pricing is in <strong className="font-semibold text-muted-foreground">USD</strong>. Your selected plan renews
    automatically each month but you can <strong className="font-semibold text-muted-foreground">cancel anytime</strong>.
    By subscribing, you agree to our{" "}
    <Link href="/terms" className="text-primary underline-offset-2 hover:underline">
      Terms &amp; Conditions
    </Link>{" "}
    and{" "}
    <Link href="/terms" className="text-primary underline-offset-2 hover:underline">
      Refund Policy
    </Link>
    . Please note that all services are non-refundable.
  </>
)

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

  const checkoutHref = `/checkout?plan=${encodeURIComponent(service.title)}&price=${tier.price}`
  const activeTabMeta = tabConfigs.find((t) => t.id === activeTab)
  const TabIcon = activeTabMeta?.icon

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

        <div className="mb-4 flex items-center gap-2 rounded-xl border border-border/80 bg-muted/40 px-4 py-3 text-sm text-muted-foreground sm:px-6">
          <LayoutGrid className="h-4 w-4 shrink-0 text-foreground/70" aria-hidden />
          <span>Combine any services &amp; add-ons during checkout</span>
        </div>

        <div className="rounded-2xl border border-border/80 bg-card shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden">
          <div
            key={activeTab}
            className="animate-in fade-in slide-in-from-bottom-1 duration-300"
          >
            <div className="grid gap-0 lg:grid-cols-12">
              {/* Left */}
              <div className="lg:col-span-7 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-border/60">
                <div className="mb-6 flex flex-col gap-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-3">
                      {TabIcon ? (
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/50 text-primary">
                          <TabIcon className="h-5 w-5" aria-hidden />
                        </span>
                      ) : null}
                      <h2 className="text-xl font-bold text-foreground sm:text-2xl">{service.title}</h2>
                    </div>
                    <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0">
                        <span className="text-sm font-medium text-muted-foreground">{tier.selectionLabel}</span>
                        <span className="text-2xl font-bold text-foreground">{`$${tier.price}`}</span>
                        <span className="text-sm text-muted-foreground">/mo</span>
                      </div>
                    </div>
                  </div>
                  <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm font-medium text-foreground">{service.sliderLabel}</p>
                  </div>
                  <Slider
                    value={[tierIndex]}
                    onValueChange={(v) => setTierIndex(v[0] ?? 0)}
                    min={0}
                    max={maxTier}
                    step={1}
                    className="py-2"
                  />
                  <div className="flex justify-between px-0.5 text-xs font-medium text-muted-foreground">
                    {service.tiers.map((t) => (
                      <span key={`${t.quantity}-${t.price}`}>{t.tickLabel}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="lg:col-span-5 bg-muted/25 p-6 sm:p-8">
                <p className="mb-4 text-sm font-semibold text-foreground">{service.title}</p>
                <ul className="mb-6 space-y-3">
                  {service.features.map((f) => {
                    const Icon = FEATURE_ICONS[f.icon] ?? Check
                    return (
                      <li key={f.text} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-background text-primary shadow-sm">
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <span className="leading-snug pt-0.5">{f.text}</span>
                      </li>
                    )
                  })}
                </ul>

                <div className="space-y-3">
                  <Button className="w-full bg-[#1E5AA8] hover:bg-[#154580] text-white" asChild>
                    <Link href={checkoutHref}>
                      Checkout
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="secondary" className="w-full gap-2 bg-foreground text-background hover:bg-foreground/90" asChild>
                    <Link href={service.howItWorksHref}>
                      <Play className="h-4 w-4 fill-current" />
                      How the service works
                    </Link>
                  </Button>
                  <Link
                    href="/schedule-demo"
                    className="flex items-center justify-center gap-2 py-2 text-sm font-medium text-primary hover:underline"
                  >
                    <Calendar className="h-4 w-4" />
                    Schedule a demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-5 max-w-4xl text-center text-xs leading-relaxed text-muted-foreground sm:mx-auto">{LEGAL}</p>
      </div>
    </section>
  )
}
