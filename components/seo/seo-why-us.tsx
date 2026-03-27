import { Target, Wand2, ShieldCheck } from "lucide-react"

const points = [
  {
    icon: Target,
    title: "Strategy First",
    description: "We focus on measurable goals: traffic, qualified leads, and conversion lift.",
  },
  {
    icon: Wand2,
    title: "Content With Purpose",
    description: "Optimization that supports user intent, not generic “SEO for SEO’s sake.”",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Sustainable",
    description: "White-hat improvements designed to hold up as search algorithms evolve.",
  },
]

export default function SeoWhyUs() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {points.map((p) => {
            const Icon = p.icon
            return (
              <div key={p.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

