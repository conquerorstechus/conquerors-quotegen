import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "We saw meaningful ranking improvements within the first few months, and our lead flow finally matched our spend.",
    name: "Sarah M.",
    role: "Marketing Lead",
  },
  {
    quote:
      "The technical fixes were spot-on. Our site loads faster, and the content plan made everything easier to execute.",
    name: "Daniel R.",
    role: "Founder",
  },
  {
    quote:
      "We went from random posts to a real SEO roadmap. Traffic grew and conversions followed.",
    name: "Priya K.",
    role: "Growth Manager",
  },
]

export default function SeoTestimonials() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Customer Results</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">"{t.quote}"</p>
              <div className="font-semibold">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

