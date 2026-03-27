'use client'

import Image from 'next/image'
import { Play } from 'lucide-react'

interface VideoCardProps {
  id: string
  title: string
  description: string
  videoUrl: string
  thumbnailUrl: string
  onPlay: (id: string) => void
  onHover?: (isHovering: boolean) => void
}

export function VideoCard({
  id,
  title,
  description,
  videoUrl,
  thumbnailUrl,
  onPlay,
  onHover,
}: VideoCardProps) {
  return (
    <div
      className="group relative bg-white rounded-xl overflow-hidden border border-blue-100 hover:border-[#1E5AA8] transition-all duration-300 hover:shadow-lg animate-in fade-in zoom-in duration-500"
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
    >
      {/* Video Thumbnail */}
      <div className="relative w-full aspect-video bg-black/20 overflow-hidden">
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          quality={75}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
          {/* Play Button */}
          <button
            onClick={() => onPlay(id)}
            className="w-16 h-16 rounded-full bg-[#1E5AA8] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#154080] transform scale-75 group-hover:scale-100"
          >
            <Play className="w-7 h-7 fill-current ml-1" />
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#0B2A4A] mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-[#6B7280] line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  )
}
