import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import Image from 'next/image'
import { AllServicesSection } from '@/components/pricing/service-cards-grid'

const blogPosts = [
  {
    id: 1,
    title: "12 Top Social Media Management Agencies & Services for Impact in 2026",
    excerpt: "We reviewed the 12 best social media management agencies and services in 2026. Compare pricing from $99/mo to $7,500/mo and find the right fit for your business.",
    category: "Social Media Management",
    date: "January 27, 2025",
    readTime: "8 min read",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog-RIEdQnAHSCrvkyZnomCngBzDOAZCLS.png",
    featured: true
  },
  {
    id: 2,
    title: "White-Label Marketing Agency Pricing: What Resellers Pay in 2026",
    excerpt: "White-label SEO pricing varies by scope, quality, and reporting depth. In this guide, we help you compare packages without getting burned.",
    category: "Social Media Marketing",
    date: "March 2, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1460925895917-adf4e5a5e0e3?w=500&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Facebook Ads ROI: What It Takes to Turn Paid Traffic Into Real Profit",
    excerpt: "Running Facebook ads is one thing. Making them profitable is another. In this guide, we break down how ROI works and how to measure real performance.",
    category: "Facebook Tips & Resources",
    date: "March 2, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Instagram Ads Cost in 2026: A Hands-on Guide From an Agency Owner",
    excerpt: "If you're running Instagram ads without understanding the cost structure, it's a red flag. In this guide, we break down pricing benchmarks, budget ranges, and factors that affect cost.",
    category: "Instagram Tips & Resources",
    date: "March 2, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Social Media Management Pricing: What It Really Costs in 2026",
    excerpt: "How much should you budget for social media management? The answer depends on competition, strategy, and execution. Here's a clear breakdown of costs and benchmarks.",
    category: "Social Media Management",
    date: "March 2, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop"
  },
  {
    id: 6,
    title: "Facebook Advertising Cost Breakdown: A-To-Z Guide for 2026",
    excerpt: "Facebook advertising costs vary widely depending on your industry, targeting, and campaign objective. In this guide, we break down what you can realistically expect.",
    category: "Facebook Tips & Resources",
    date: "February 26, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&h=300&fit=crop"
  },
  {
    id: 7,
    title: "Digital Marketing Agency Pricing in 2026: What's Fair and What's Overpriced",
    excerpt: "See what digital marketing agencies really charge in 2026: pricing models, typical ranges, and what affects cost.",
    category: "Social Media Marketing",
    date: "March 5, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop"
  },
  {
    id: 8,
    title: "Is Facebook Advertising Still Worth It in 2026?",
    excerpt: "Before you spend another dollar on Facebook ads, see what brands are really getting from the platform in 2026.",
    category: "Facebook Tips & Resources",
    date: "March 1, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&h=300&fit=crop"
  },
  {
    id: 9,
    title: "Digital Marketing ROI: How to Measure What Moves Revenue",
    excerpt: "Learn how to measure digital marketing ROI using KPIs, attribution models, and data analytics to drive revenue.",
    category: "Social Media Marketing",
    date: "February 28, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1460925895917-adf4e5a5e0e3?w=500&h=300&fit=crop"
  },
  {
    id: 10,
    title: "Is Google Ads Worth It in 2026? Explained",
    excerpt: "If you're spending and not seeing results, it's usually not Google Ads—it's your strategy. Here's what actually works.",
    category: "Social Media Marketing",
    date: "March 3, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop"
  }
]

export default function BlogPage() {
  const categories = ["Latest Updates", ...new Set(blogPosts.map(post => post.category))]
  const featuredPost = blogPosts.find(post => post.featured)

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
          Blog
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Great content with your branding at very affordable rates. We handle the visuals, captions, and hashtags.
        </p>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                
              </div>
              <div>
                <Badge className="mb-4">{featuredPost.category}</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap gap-3">
            {categories.map(category => (
              <Badge
                key={category}
                variant={category === "Latest Updates" ? "default" : "outline"}
                className="cursor-pointer hover:opacity-80 transition-opacity"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  
                </div>
                <Badge className="mb-3">{post.category}</Badge>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AllServicesSection />
    </main>
  )
}
