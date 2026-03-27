import Link from 'next/link'

const plans = [
  {
    name: 'Starter',
    price: '99',
    description: 'Perfect for single campaigns',
    features: [
      '5 static ad variations',
      'Single ad format',
      'Standard turnaround',
      ' 2 rounds of revisions',
      'Email support',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '149',
    description: 'Ideal for growing brands',
    features: [
      '20 static ad variations',
      'All ad formats',
      'Priority turnaround (48hrs)',
      'Unlimited revisions',
      'Priority email & chat support',
      'Monthly strategy call',
      'A/B testing consultation',
    ],
    highlighted: true,
  },
  {
    name: 'Agency',
    price: 'Custom',
    description: 'For agencies and enterprises',
    features: [
      'Unlimited static ads',
      'All formats + custom',
      'Rush delivery available',
      'Unlimited revisions',
      'Dedicated account manager',
      'Weekly strategy calls',
      'Custom integration',
      'White label options',
    ],
    highlighted: false,
  },
]

export function StaticAdsPricing() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F9FF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            No hidden fees. No surprises. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl border transition-all ${
                plan.highlighted
                  ? 'border-[#1E5AA8] bg-white shadow-xl scale-105 md:scale-100 md:shadow-2xl'
                  : 'border-blue-100 bg-white'
              }`}
            >
              {plan.highlighted && (
                <div className="bg-[#1E5AA8] text-white px-4 py-2 rounded-t-xl text-center text-sm font-semibold">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#0B2A4A] mb-2">{plan.name}</h3>
                <p className="text-sm text-[#6B7280] mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#1E5AA8]">${plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-[#6B7280]">/month</span>}
                </div>

                <Link href="/schedule-demo" className="w-full block mb-8">
                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      plan.highlighted
                        ? 'bg-[#1E5AA8] hover:bg-[#154080] text-white'
                        : 'border-2 border-[#1E5AA8] text-[#1E5AA8] bg-white hover:bg-blue-50'
                    }`}
                  >
                    Get Started
                  </button>
                </Link>

                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#6B7280]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
