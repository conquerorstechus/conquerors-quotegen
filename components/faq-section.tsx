'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqItems = [
  {
    id: 1,
    question: "What services do you offer in digital marketing and creative solutions?",
    answer: "We provide full-service digital marketing solutions, including social media management,  SEO services, graphic design, content writing, branding, and lead generation strategies to help businesses grow online."
  },
  {
    id: 2,
    question: "How does your social media management service help my business grow?",
    answer: "Our social media management services create professional branded content, increase engagement, improve brand visibility, and attract new customers through strategic posting, audience targeting, and performance optimization."
  },
  {
    id: 3,
    question: "What makes your services more affordable than traditional marketing agencies?",
    answer: "We use a streamlined workflow and global creative talent to deliver premium digital marketing services at up to 80% lower costs than traditional agencies — without compromising quality."
  },
  {
    id: 4,
    question: "Do you offer custom website development for small businesses and startups?",
    answer: "Yes. We build responsive, SEO-friendly websites designed for speed, mobile optimization, and conversions — helping small businesses, startups, and eCommerce brands establish a strong online presence."
  },
  {
    id: 5,
    question: "How can SEO services improve my website ranking on Google?",
    answer: "Our search engine optimization (SEO) strategies improve keyword rankings, increase organic traffic, enhance website performance, and help your business appear in local and global search results."
  },
  {
    id: 6,
    question: "What type of graphic design services do you provide?",
    answer: "We create professional graphic design solutions including logos, social media graphics, brand identity kits, advertisements, marketing materials, and promotional designs that strengthen brand recognition."
  },
  {
    id: 7,
    question: "Do you provide content writing for websites, blogs, and social media?",
    answer: "Yes. Our SEO content writing services include blog articles, website copy, social media captions, product descriptions, and marketing content designed to improve search visibility and audience engagement."
  },
  {
    id: 8,
    question: "Can you help generate leads and increase online sales?",
    answer: "Absolutely. We implement lead generation strategies, conversion-focused design, targeted advertising, and marketing funnels to attract qualified prospects and increase sales."
  },
  {
    id: 9,
    question: "Are your digital marketing strategies suitable for local businesses?",
    answer: "Yes. Our local SEO and digital marketing solutions help businesses rank in local searches, attract nearby customers, and improve visibility in their service areas."
  },
  {
    id: 10,
    question: "Are there contracts or long-term commitments?",
    answer: "No long-term contracts required. We offer flexible plans starting at $99/month so you can scale your digital marketing services as your business grows."
  },
  {
    id: 11,
    question: "How do I get started with your  marketing services?",
    answer: "Simply schedule a Free Demo Call. We'll analyze your current online presence, identify growth opportunities, and recommend the best digital marketing strategy tailored to your business goals."
  },
  {
    id: 12,
    question: "How quickly do you start?",
    answer: "Most clients receive their first content batch within 72 hours."
  },
  {
    id: 13,
    question: "Do I need to provide content?",
    answer: "No, you don’t need to provide the content—our team will take care of the creative work. However, if you’d like to share any content, you’re welcome to do so."
  },
  {
    id: 14,
    question: "Which platforms do you support?",
    answer: "We support major platforms including Instagram, Facebook, LinkedIn, and more."
  },
  {
    id: 15,
    question: "Can I cancel anytime?",
    answer: "Yes. There are no long-term contracts."
  },
]

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1)

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2A4A] mb-4">Frequently Asked Questions</h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto">
            Find answers to common questions about our digital marketing, web development, and creative services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-blue-100 rounded-lg overflow-hidden hover:border-[#1E5AA8] transition-colors"
            >
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full flex items-center justify-between p-6 hover:bg-[#F5F9FF] transition-colors text-left"
              >
                <span className="text-lg font-semibold text-[#0B2A4A] pr-4">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#1E5AA8] flex-shrink-0 transition-transform duration-300 ${
                    openId === item.id ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {openId === item.id && (
                <div className="px-6 pb-6 border-t border-blue-100">
                  <p className="text-[#6B7280] leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-[#6B7280] mb-4">
            Still have questions? We're here to help!
          </p>
          <a href="/schedule-demo">
            <button className="px-8 py-3 bg-[#1E5AA8] text-white font-semibold rounded-lg hover:bg-[#154080] transition-colors">
              Schedule a Free Demo Call
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
