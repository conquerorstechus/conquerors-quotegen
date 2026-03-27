"use client"

import { useState } from "react"
import Image from "next/image"
import { FlyerModal } from "@/components/flyer-modal"
import { CategorySlider } from "@/components/category-slider"

const portfolioExamples = [
  {
    id: 1,
    title: "Butterfly Pharmacy - Healthcare Services",
    description: "Social media campaign promoting care services",
    image: "/examples/pharma-post.jpg",
    category: "Posts",
    businessCategory: "Health & Wellness",
    caption:"Butterfly Pharmacy transforms healthcare services with dedicated support. Our specialized pharmacy technicians provide personalized care, ensuring every patient feels part of our team. With 24/7 availability, billing specialists, and comprehensive staff training, we deliver more than medications—we deliver peace of mind and long-term partnership success."
  },
  {
    id: 2,
    title: "Conquerors - Slow Site Performance Flyer",
    description: "Professional marketing flyer addressing website performance",
    image: "/examples/conquerors-slow-site-flyer.jpg",
    category: "Flyers",
    businessCategory: "SaaS & Tech",
    caption: "Losing visitors because your site loads too slowly? At Conquerors Tech, we build technology that works for you. Our smart web solutions are engineered to improve efficiency through task automation, increase online visibility with SEO optimization, generate qualified leads through targeted marketing, and maximize ROI with data-driven analytics.\n\nWhether you're a startup or an established business, we help you grow smarter by ensuring performance issues never cost you customers again."
  },
  {
    id: 3,
    title: "Rik Promo - Premium Hoodie Campaign",
    description: "Promotional flyer for custom printed hoodies",
    image: "/examples/rikpromo-hoodie-flyer.jpg",
    category: "Flyers",
    businessCategory: "Products",
    caption: "Rik Promo Inc - Your one-stop shop for all design and promotional needs. Want your hoodies to look high-end without blowing your budget? Our premium hoodies feature crisp, custom logo detailing and are soft, durable, and perfect for daily wear or events.\n\nGreat for giveaways, team uniforms, campaigns, and brand launches. Starting at just $12.99 per hoodie for bulk orders. Limited production slots available this month—order now to secure your custom printed hoodies with professional quality that matches your brand vision."
  },
  {
    id: 4,
    title: "Technology Services - Build Faster",
    description: "Comprehensive tech solutions showcase",
    image: "/examples/dev-build-faster.jpg",
    category: "Posts",
    businessCategory: "SaaS & Tech",
    caption: "Build Faster. Automate Smarter. Grow Bigger. Conquerors Tech offers comprehensive digital solutions including mobile apps for iOS and Android, superfast SEO websites, AI automation systems, and integrated social, email, and Google/Meta ads management. Our expertise spans full-stack development ensuring your business stays ahead of the competition."
  },
  {
    id: 5,
    title: "Digital Growth Partner Campaign",
    description: "Complete digital growth solutions presentation",
    image: "/examples/dev-growth-partner.jpg",
    category: "Posts",
    businessCategory: "Professional Services",
    caption: "Your Complete Digital Growth Partner. At Conquerors Tech, we don't just build technology—we build growth engines. Our services include mobile apps built for performance, SEO-optimized websites for higher visibility, AI automation to save time and costs, and comprehensive social, email, Google & Meta ads management.\n\nLet's grow your business the smart way with integrated solutions that deliver measurable results."
  },
  {
    id: 6,
    title: "Conquerors - Turn Digital Ideas Into Business Results",
    description: "Professional flyer showcasing digital transformation services",
    image: "/examples/conquerors-turn-digital-ideas.jpg",
    category: "Flyers",
    businessCategory: "SaaS & Tech",
    caption: "Turn Digital Ideas into Business Results. Conquerors Tech transforms your vision into measurable growth. Our four core competencies deliver enterprise-level solutions: Smart Automation reduces manual work through AI-powered systems; Seamless Mobile Experiences create user-friendly apps for iOS and Android; High-Performance Websites rank in search results with SEO-optimized, fast-loading design; and Ads That Convert maximize ROI through performance-based digital campaigns.\n\nLet's turn your vision into measurable growth."
  },
  {
    id: 7,
    title: "Tampa Realty Pros - Monthly Income",
    description: "Investment property management flyer",
    image: "/examples/tampa-realty-monthly-income.jpg",
    category: "Flyers",
    businessCategory: "Real Estate",
    caption: "Turn Tampa Real Estate Into Monthly Income. Find high-potential investment properties and let professionals manage them for you. Our services include investment property sourcing to identify profitable opportunities, rental income optimization to maximize returns, and full-service property management handling all details.\n\nServing Tampa & Central Florida with proven investment strategies."
  },
  {
    id: 8,
    title: "Tampa Realty Pros - First-Time Buyer",
    description: "Real estate buyer education and support flyer",
    image: "/examples/tampa-realty-first-time-buyer.jpg",
    category: "Flyers",
    businessCategory: "Real Estate",
    caption: "First-Time Buyer? Confused. Overwhelmed. Unsure? You shouldn't have to guess your way through your biggest purchase. We guide you clearly from pre-approval to closing with an education-first approach explaining everything in simple terms, offer support to help you submit confident competitive offers, and closing coordination guiding you safely through inspections, loans, and closing."
  },
  {
    id: 9,
    title: "Tampa Realty Pros - Investment Property",
    description: "Real estate investment opportunity flyer",
    image: "/examples/tampa-realty-investment-property.jpg",
    category: "Flyers",
    businessCategory: "Real Estate",
    caption: "Turn Tampa Real Estate Into Monthly Income. Find high-potential investment properties and let professionals manage them for you. Featuring investment property sourcing, rental income optimization, and full-service property management for properties across Tampa & Central Florida."
  },
  {
    id: 10,
    title: "Conquerors - Turn Traffic Into Revenue",
    description: "Digital systems and mobile app flyer",
    image: "/examples/conquerors-traffic-revenue.jpg",
    category: "Flyers",
    businessCategory: "SaaS & Tech",
    caption: "Turn Traffic Into Revenue. Clicks are just the beginning. Conversions drive growth. We help businesses build digital systems that perform through SEO-optimized websites designed to convert, engaging mobile apps that retain users, and ROI-focused ad campaigns that scale profitably.\n\nComplete Digital Growth Partner providing all-in-one solutions for measurable, scalable business growth."
  },
  {
    id: 11,
    title: "Conquerors - Website Should Bring You Leads",
    description: "Web design and conversion optimization flyer",
    image: "/examples/conquerors-website-leads.jpg",
    category: "Flyers",
    businessCategory: "SaaS & Tech",
    caption: "Your Website Should Bring You Leads—Not Just Look Good. We build high-converting websites designed to turn visitors into customers, bookings, and sales. Our approach delivers conversion-focused website design, fast & performance optimized sites, user-friendly experiences, and scalability built for your growing business.\n\nDiscover why your website isn't generating leads and how to increase conversions."
  },
  {
    id: 12,
    title: "Butterfly Pharmacy - Customized Medications",
    description: "Personalized medication solutions flyer",
    image: "/examples/butterfly-customized-medications.jpg",
    category: "Flyers",
    businessCategory: "Health & Wellness",
    caption: "Customized Medications Made Specifically for You. At Butterfly Pharmacy, we understand that every patient is unique. Our customization services include allergen-free medications for sensitive patients, precise pediatric & geriatric dosing tailored to individual needs, and personalized formulations for specific treatment requirements.\n\nSafer. More Precise. Made for Your Body. At Butterfly Pharmacy, we know you by name — not just your prescription."
  },
  
  {
    id: 14,
    title: "Butterfly Pharmacy - Advanced Medical Equipment",
    description: "Durable medical equipment for home care",
    image: "/examples/butterfly-medical-equipment.jpg",
    category: "Flyers",
    businessCategory: "Health & Wellness",
    caption: "Advanced Durable Medical Equipment for Home Care. Breathe Easier. Move Better. Heal Comfortably. Butterfly Pharmacy provides comprehensive home care solutions including respiratory equipment for breathing support, mobility aids for movement and independence, and home medical supplies for ongoing care needs.\n\nExperience care and convenience at Butterfly Pharmacy today."
  },
  {
    id: 15,
    title: "Butterfly Pharmacy - Care Service Process",
    description: "Patient care journey and service flow",
    image: "/examples/butterfly-service-process.jpg",
    category: "Flyers",
    businessCategory: "Health & Wellness",
    caption: "From Admission to Discharge—We Close the Gaps. Our four-step care coordination process ensures seamless transitions: Quick & Accurate Onboarding with fast medication setup, Seamless Care Transitions for discharge coordination, Transparent Communication at every step, and Convenient & Cost-Free Service delivery.\n\nAt Butterfly Pharmacy, transitions are no longer a gap—they're a strength."
  },
]

const businessCategories = [
  "All",
  "Health & Wellness",
  "Products",
  "Professional Services",
  "Real Estate",
  "SaaS & Tech",
  "Food & Beverages",
  
]

export function ExamplesSection() {
  const [activeBusinessCategory, setActiveBusinessCategory] = useState("All")
  const [selectedFlyerId, setSelectedFlyerId] = useState<number | null>(null)

  const filteredExamples = portfolioExamples.filter((ex) => {
    // "All" means show every category; other values match the example's businessCategory.
    const businessMatch = activeBusinessCategory === "All" || ex.businessCategory === activeBusinessCategory
    return businessMatch
  })

  const selectedFlyer = selectedFlyerId 
    ? portfolioExamples.find(ex => ex.id === selectedFlyerId)
    : null

  return (
    <section id="examples" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F5F9FF]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B2A4A] mb-4">Our Work</h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto text-lg">
            Explore our portfolio of professional social media posts, marketing campaigns, and digital content created for leading brands and businesses across various industries.
          </p>
        </div>

        {/* Business Category Slider */}
        <CategorySlider
          categories={businessCategories}
          activeCategory={activeBusinessCategory}
          onCategoryChange={setActiveBusinessCategory}
        />

        {/* Examples Grid - Feedbird Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredExamples.length > 0 ? (
          filteredExamples.map((example) => (
            <div
              key={example.id}
              className="bg-white rounded-2xl border border-blue-100 overflow-hidden hover:border-[#1E5AA8] transition-all hover:shadow-xl group cursor-pointer"
              onClick={() => setSelectedFlyerId(example.id)}
            >
              {/* Card Header with Logo */}
              <div className="px-4 py-4 border-b border-blue-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center">
                    <Image
                      src="/logo-conquerors-dark.png"
                      alt="Conquerors"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-semibold text-[#0B2A4A] text-sm">Conquerors</span>
                </div>
                <button className="text-[#6B7280] hover:text-[#0B2A4A]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </button>
              </div>

              {/* Image Container */}
              <div className="relative aspect-square bg-[#F5F9FF] overflow-hidden">
                <Image
                  src={example.image}
                  alt={example.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Card Footer with Engagement Icons */}
              <div className="px-4 py-3 flex items-center gap-4">
                <button className="text-red-500 hover:text-red-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
                <button className="text-[#6B7280] hover:text-[#0B2A4A] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </button>
                <button className="text-[#6B7280] hover:text-[#0B2A4A] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </button>
                <div className="ml-auto">
                  <button className="text-[#6B7280] hover:text-[#0B2A4A] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 19V5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))
          ) : (
            <div className="col-span-full py-16 text-center">
              <p className="text-lg font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
  🚀 Coming Soon
</p>
            </div>
          )}
        </div>

      </div>

      {/* Flyer Modal */}
      <FlyerModal 
        isOpen={selectedFlyerId !== null} 
        onClose={() => setSelectedFlyerId(null)}
        flyer={selectedFlyer || null}
      />
    </section>
  )
}
