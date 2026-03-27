'use client'

import { X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

interface FlyerModalProps {
  isOpen: boolean
  onClose: () => void
  flyer: {
    id: number
    title: string
    image: string
    caption: string
  } | null
}

export function FlyerModal({ isOpen, onClose, flyer }: FlyerModalProps) {
  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      window.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || !flyer) return null

  return (
    <>
      {/* Dark Overlay */}
      <div
        className="fixed inset-0 bg-black/60 z-40 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto animate-in fade-in zoom-in duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-lg transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>

          {/* Content Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Left Side - Image */}
            <div className="flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden min-h-96">
              <div className="relative w-full h-96 lg:h-full">
                <Image
                  src={flyer.image}
                  alt={flyer.title}
                  fill
                  className="object-cover"
                  quality={95}
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col justify-start space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo-white.png"
                    alt="Conquerors Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <Link href="/schedule-demo">
                  <button className="px-4 py-2 bg-[#1E5AA8] text-white rounded-full text-sm font-semibold hover:bg-[#154080] transition-colors">
                    Schedule demo
                  </button>
                </Link>
              </div>

              {/* Title */}
              {/*<div>
                <h3 className="text-xl font-bold text-[#0B2A4A] mb-2">Caption</h3>
              </div> */}

              {/* Caption Text */}
              <div className="space-y-4 text-gray-700 flex-1 pr-2 max-h-96 overflow-y-auto">
                {flyer.caption.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Footer Spacing */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  {flyer.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
