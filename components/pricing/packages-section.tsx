"use client"

import Link from "next/link"
import { ArrowRight, Calendar, Check, Play, type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { type DynamicPricingFeatureIcon, type DynamicPricingServiceContent, type DynamicPricingTier } from "@/components/pricing/dynamic-pricing-data"

type PackagePlan = {
  id: "starter" | "standard" | "plus"
  label: string
  tier: DynamicPricingTier
  tierIndex: number
}

type PackagesSectionProps = {
  service: DynamicPricingServiceContent
  plans: PackagePlan[]
  selectedPlanId: PackagePlan["id"]
  onSelectPlan: (plan: PackagePlan) => void
  checkoutHref: string
  featureIcons: Record<DynamicPricingFeatureIcon, LucideIcon>
}

export function PackagesSection({
  service,
  plans,
  selectedPlanId,
  onSelectPlan,
  checkoutHref,
  featureIcons,
}: PackagesSectionProps) {
  const selectedPlan = plans.find((plan) => plan.id === selectedPlanId) ?? plans[plans.length - 1]
  const qualifiesForCalls = selectedPlan.tier.price >= 149

  return (
    <div className="mb-4 rounded-2xl border border-border/80 bg-card p-4 shadow-sm sm:p-6">
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-9">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Packages</h2>
          <div className="grid gap-3 md:grid-cols-3">
            {plans.map((plan) => {
              const isSelected = selectedPlanId === plan.id
              const [primaryFeature, secondaryFeature] = service.features
              return (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => onSelectPlan(plan)}
                  className={cn(
                    "relative rounded-2xl border bg-card p-4 text-left transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md",
                    isSelected
                      ? "border-[#1E5AA8] bg-[#1E5AA8]/10 shadow-[0_0_0_1px_rgba(30,90,168,0.12)]"
                      : "border-border hover:border-[#1E5AA8]/50",
                  )}
                >
                  <div className="mb-3 flex items-start justify-between pr-7">
                    <p className="text-lg font-semibold text-foreground">{plan.label}</p>
                    <p className="shrink-0 text-right">
                      <span className="text-2xl font-bold text-foreground">${plan.tier.price}</span>
                      <span className="text-sm text-muted-foreground">/mo</span>
                    </p>
                  </div>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      {plan.tier.selectionLabel}
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      {primaryFeature?.text ?? secondaryFeature?.text ?? "Core deliverables included"}
                    </li>
                  </ul>
                  <span
                    aria-hidden
                    className={cn(
                      "absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all",
                      isSelected ? "border-[#1E5AA8] bg-[#1E5AA8]" : "border-border bg-card",
                    )}
                  >
                    <span className={cn("h-2 w-2 rounded-full bg-white", !isSelected && "hidden")} />
                  </span>
                </button>
              )
            })}
          </div>

          <div
            className={cn(
              "mt-4 rounded-lg px-3 py-2 text-sm",
              qualifiesForCalls ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground",
            )}
          >
            {qualifiesForCalls
              ? "Your order qualifies for onboarding & monthly calls"
              : "Orders over $149 qualify for onboarding & monthly calls"}
          </div>
        </div>

        <aside className="lg:col-span-3">
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="mb-3 text-xl font-bold text-foreground">{selectedPlan.label}</h3>
            <ul className="mb-5 space-y-2.5">
              {service.features.map((feature) => {
                const Icon = featureIcons[feature.icon] ?? Check
                return (
                  <li key={feature.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon className="h-4 w-4 text-primary" />
                    <span>{feature.text}</span>
                  </li>
                )
              })}
            </ul>
            <p className="mb-4 text-xs text-muted-foreground">
              Pricing is in <span className="font-semibold">USD</span>. Cancel anytime.
            </p>
            <Button className="w-full bg-[#1E5AA8] text-white hover:bg-[#154580]" asChild>
              <Link href={checkoutHref}>
                Checkout
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="secondary" className="mt-2 w-full gap-2 bg-foreground text-background hover:bg-foreground/90" asChild>
              <Link href={service.howItWorksHref}>
                <Play className="h-4 w-4 fill-current" />
                How the service works
              </Link>
            </Button>
            <Link
              href="/schedule-demo"
              className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <Calendar className="h-4 w-4" />
              Schedule a demo
            </Link>
          </div>
        </aside>
      </div>
    </div>
  )
}
