import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "/mo",
    description: "Perfect for small businesses just getting started",
    features: [
      "12 social media posts/month",
      "2 platforms supported",
      "Basic content calendar",
      "Monthly analytics report",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "$249",
    period: "/mo",
    description: "For growing businesses ready to scale",
    features: [
      "30 social media posts/month",
      "4 platforms supported",
      "Advanced content calendar",
      "Weekly analytics reports",
      "4 short-form videos/month",
      "Priority support",
      "Instagram Stories",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$499",
    period: "/mo",
    description: "For established brands requiring premium service",
    features: [
      "Unlimited social media posts",
      "All platforms supported",
      "Custom content strategy",
      "Real-time analytics dashboard",
      "12 short-form videos/month",
      "Dedicated account manager",
      "Meta Ads management",
      "SEO blog posts",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-blue-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2A4A] mb-4">Simple, transparent pricing</h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto">
            No hidden fees. No contracts. Cancel anytime. Choose the plan that fits your needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white border rounded-2xl p-8 ${
                plan.popular ? "border-[#1E5AA8] shadow-lg" : "border-blue-100"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#1E5AA8] text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#0B2A4A] mb-2">{plan.name}</h3>
                <p className="text-[#6B7280] text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-[#0B2A4A]">{plan.price}</span>
                <span className="text-[#6B7280]">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#1E5AA8]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#1E5AA8]" />
                    </div>
                    <span className="text-[#0B2A4A] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-[#1E5AA8] text-white hover:bg-[#154080]"
                    : "bg-[#F5F9FF] text-[#1E5AA8] hover:bg-blue-100"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
