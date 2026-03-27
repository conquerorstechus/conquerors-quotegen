'use client'

import { X } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Top 1% Talent */}
          <div className="group bg-gradient-to-br from-[#F5F9FF] to-blue-50 border border-blue-200 rounded-2xl p-8 hover:shadow-lg transition-all hover:scale-105 duration-300">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-[#1E5AA8] bg-[#E0EFFF] rounded-full mb-4">
                Fully Managed Creative Talent
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0B2A4A]">
                Top 1% of global creative talent
              </h3>
            </div>

            <div className="relative h-48 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-xl blur-2xl" />
              <div className="relative grid grid-cols-2 gap-4 w-full">
                {[
                  { name: "Chris Meadow", role: "Graphic Designer", color: "from-purple-400 to-pink-400" },
                  { name: "Sarah Chen", role: "Video Editor", color: "from-blue-400 to-cyan-400" },
                  { name: "Carla Rodriguez", role: "Social Media", color: "from-orange-400 to-pink-400" },
                  { name: "Jordan Kim", role: "UI/UX Designer", color: "from-green-400 to-cyan-400" },
                ].map((person, idx) => (
                  <div
                    key={idx}
                    className="bg-white/80 backdrop-blur border border-white/50 rounded-xl p-3 text-center shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${person.color} mx-auto mb-2`}
                    />
                    <p className="text-xs font-semibold text-[#0B2A4A] truncate">
                      {person.name.split(" ")[0]}
                    </p>
                    <p className="text-xs text-[#6B7280]">{person.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Say goodbye to the old way */}
          <div className="group bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-2xl p-8 hover:shadow-lg transition-all hover:scale-105 duration-300">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-red-700 bg-red-100 rounded-full mb-4">
                The Old Way
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0B2A4A]">
                Say goodbye to the old way
              </h3>
            </div>

            <div className="space-y-3">
              {[
                "Searching for freelancers",
                "Slow turnaround times",
                "Expensive agencies",
                "Dozens of interviews",
                "Still having no one to hire",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-sm text-[#0B2A4A] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Tech built for easy collaboration */}
          <div className="group bg-gradient-to-br from-[#F5F9FF] to-slate-50 border border-blue-200 rounded-2xl p-8 hover:shadow-lg transition-all hover:scale-105 duration-300">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-[#1E5AA8] bg-[#E0EFFF] rounded-full mb-4">
                Collaboration
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0B2A4A]">
                Tech built for easy collaboration
              </h3>
            </div>

            <div className="space-y-4">
              {[
                { sender: "designer", message: "Here's the first design concept", align: "left" },
                { sender: "client", message: "Love it! Let me review with the team", align: "right" },
                { sender: "designer", message: "Perfect! Ready to make changes", align: "left" },
              ].map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-3 ${msg.align === "right" ? "justify-end" : "justify-start"}`}
                >
                  {msg.align === "left" && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex-shrink-0" />
                  )}
                  <div
                    className={`max-w-xs rounded-lg p-3 ${
                      msg.align === "right"
                        ? "bg-[#1E5AA8] text-white rounded-br-none"
                        : "bg-white border border-blue-200 rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm">{msg.message}</p>
                  </div>
                  {msg.align === "right" && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 flex-shrink-0" />
                  )}
                </div>
              ))}

              <div className="flex gap-2 pt-4 border-t border-blue-100">
                <button className="flex-1 px-3 py-2 text-sm font-medium text-[#1E5AA8] bg-[#E0EFFF] rounded-lg hover:bg-blue-200 transition-colors">
                  Approve
                </button>
                <button className="flex-1 px-3 py-2 text-sm font-medium text-[#6B7280] bg-[#F5F9FF] rounded-lg hover:bg-gray-100 transition-colors">
                  Decline
                </button>
              </div>
            </div>
          </div>

          {/* Card 4: Flexible subscription model */}
          <div className="group bg-gradient-to-br from-[#F5F9FF] to-[#E0EFFF] border border-blue-200 rounded-2xl p-8 hover:shadow-lg transition-all hover:scale-105 duration-300">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-[#1E5AA8] bg-[#E0EFFF] rounded-full mb-4">
                Subscription Based
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0B2A4A]">
                Flexible subscription model
              </h3>
            </div>

            <div className="space-y-3">
              {[
                { label: "Upgrade/Downgrade", icon: "↕️" },
                { label: "Cancel anytime", icon: "✕" },
                { label: "Pause anytime", icon: "⏸" },
                { label: "No contracts", icon: "📋" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 bg-white/60 rounded-lg hover:bg-white/80 transition-colors border border-white"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3FA9F5] to-[#1E5AA8] flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold text-[#0B2A4A]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
