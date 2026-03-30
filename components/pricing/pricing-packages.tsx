"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Star } from "lucide-react"

const packages = [
  {
    id: "starter",
    name: "Starter",
    price: 99,
    features: ["4 Posts", "2 Social Channel (FB/Insta)"],
    popular: false,
  },
  {
    id: "standard",
    name: "Standard",
    price: 149,
    features: ["8 Posts", "2 Social Channel (FB/Insta)"],
    popular: true,
  },
  {
    id: "plus",
    name: "Plus",
    price: 199,
    features: ["12 Posts", "2 Social Channel (FB/Insta)"],
    popular: false,
  },
];

const includedFeatures = [
  { icon: "🎨", text: "Content in your branding" },
  { icon: "📝", text: "Captions & hashtags" },
 
  { icon: "✅", text: "2 social channel included" },
  { icon: "📋", text: "$60/mo additional social channel" },
 
];

export function PricingPackages() {
  const [selectedPackage, setSelectedPackage] = useState("plus")
  const selected = packages.find((p) => p.id === selectedPackage)

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-4 gap-8">

          {/* LEFT SIDE */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-6">Packages</h2>

            {/* FIXED GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg) => {
                const isSelected = selectedPackage === pkg.id

                return (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`
                      relative p-6 rounded-2xl cursor-pointer transition-all
                      min-h-[180px] flex flex-col justify-between
                      ${
                        isSelected
                          ? "bg-primary/10 border-2 border-primary"
                          : "bg-card border border-border hover:border-primary/50"
                      }
                    `}
                  >
                    {/* BADGE */}
                    
                    {/* HEADER */}
                    <div className="flex justify-between items-start pr-6">
                      <h3 className="text-lg font-semibold">{pkg.name}</h3>

                      <div className="text-right">
                        <span className="text-2xl font-bold">${pkg.price}</span>
                        <span className="text-muted-foreground">/mo</span>
                      </div>
                    </div>

                    {/* FEATURES */}
                    <ul className="space-y-2 mt-4">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* RADIO */}
                    <div
                      className={`
                        absolute top-6 right-2 w-5 h-5 rounded-full border-2 flex items-center justify-center
                        ${isSelected ? "border-primary bg-primary" : "border-border"}
                      `}
                    >
                      {isSelected && (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-1">
            <div className="bg-card border rounded-2xl p-6 sticky top-28">
              <h3 className="text-xl font-bold mb-4">{selected?.name}</h3>

              <ul className="space-y-3 mb-6">
                {includedFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{feature.icon}</span>
                    {feature.text}
                  </li>
                ))}
              </ul>

              <p className="text-xs text-muted-foreground mb-6">
                <strong>Pricing is in USD.</strong> Cancel anytime.
              </p>

              <Link href={`/checkout?plan=${selected?.name}&price=${selected?.price}`}>
                <Button className="w-full">
                  Checkout
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>

              <button className="w-full mt-3 text-sm underline">
                How the service works
              </button>

              <div className="mt-4 pt-4 border-t text-center">
                <button className="text-sm text-primary underline">
                  Schedule a demo
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
