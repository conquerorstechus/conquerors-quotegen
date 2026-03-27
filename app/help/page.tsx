'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HelpCenter() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive digital marketing services including static ads, video ads, Meta Ads management, Google Ads management, SEO, short-form videos, UGC videos, Instagram growth, and email design."
    },
    {
      question: "How much does your service cost?",
      answer: "Our services are affordably priced, starting from $99/mo. Pricing varies by service. Visit our Pricing page for detailed information on each service tier."
    },
    {
      question: "How long does it take to see results?",
      answer: "Results timeline varies by service. Most clients see initial engagement within 1-2 weeks, with significant improvements within 1-3 months depending on the service and campaign goals."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription anytime with no long-term contracts. We believe in flexibility and want you to stay with us because you love our service."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Absolutely! We specialize in affordable solutions for small businesses. Our services are designed to be accessible to businesses of all sizes."
    },
    {
      question: "What's your client satisfaction rate?",
      answer: "We maintain a 99% client satisfaction rate with over 12,000+ businesses trusting us. We're committed to delivering exceptional results."
    },
    {
      question: "How do I get started?",
      answer: "Simply book a demo call or visit any of our service pages to learn more. Our team will guide you through the process and help you choose the right solution."
    },
    {
      question: "Do you offer custom solutions?",
      answer: "Yes, we offer custom enterprise solutions. Contact our sales team for personalized packages tailored to your specific business needs."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Help Center</h1>
        <p className="text-center text-gray-600 text-lg mb-8">
          Find answers to common questions about our services
        </p>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto px-4 pb-20">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-left text-gray-900">{faq.question}</h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-6 py-4 bg-slate-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Didn't find what you're looking for?</h2>
          <p className="text-gray-600 mb-6">Our support team is here to help. Reach out to us anytime.</p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <a href="/contact">Contact Support</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
