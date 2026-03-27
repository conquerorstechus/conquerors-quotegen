const testimonials = [
  {
    name: 'Jessica Martinez',
    title: 'Food Blogger',
    text: 'Went from 2K to 18K followers in 4 months! The growth is real and my engagement rates have never been higher. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Alex Thompson',
    title: 'Fashion Brand Owner',
    text: 'Finally found a service that delivers genuine followers. My followers are actually interested in my products now. Best investment ever.',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    title: 'Lifestyle Influencer',
    text: 'The team is incredibly responsive and professional. They helped me understand my audience better and grow authentically. Amazing service!',
    rating: 5,
  },
]

export function InstagramGrowthTestimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F9FF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-4">
            Trusted by Creators & Brands
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            See how we've helped thousands grow their Instagram presence authentically
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-blue-100 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-[#6B7280] mb-6 italic">"{testimonial.text}"</p>

              <div className="flex items-center gap-3 pt-6 border-t border-blue-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FD5949] to-[#D6249F] flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[#0B2A4A] text-sm">{testimonial.name}</p>
                  <p className="text-xs text-[#6B7280]">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
