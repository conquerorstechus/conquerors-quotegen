'use client'

import { VideoCard } from './video-card'

interface Video {
  id: string
  title: string
  description: string
  videoUrl: string
  thumbnailUrl: string
}

interface VideoGalleryProps {
  videos: Video[]
  onPlayVideo: (id: string) => void
}

export function VideoGallery({ videos, onPlayVideo }: VideoGalleryProps) {
  if (videos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-[#6B7280] text-lg">No videos uploaded yet.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          id={video.id}
          title={video.title}
          description={video.description}
          videoUrl={video.videoUrl}
          thumbnailUrl={video.thumbnailUrl}
          onPlay={onPlayVideo}
        />
      ))}
    </div>
  )
}
