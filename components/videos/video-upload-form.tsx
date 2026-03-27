'use client'

import { useState, useRef } from 'react'
import { Upload, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface VideoUploadFormProps {
  onUpload: (videoData: {
    title: string
    description: string
    videoFile: File
  }) => void
  isLoading?: boolean
}

export function VideoUploadForm({ onUpload, isLoading }: VideoUploadFormProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const files = e.dataTransfer.files
    if (files && files[0]) {
      handleFileSelect(files[0])
    }
  }

  const handleFileSelect = (file: File) => {
    if (file.type.startsWith('video/')) {
      setVideoFile(file)
    } else {
      alert('Please select a valid video file')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!title.trim() || !description.trim() || !videoFile) {
      alert('Please fill in all fields and select a video')
      return
    }

    onUpload({
      title: title.trim(),
      description: description.trim(),
      videoFile,
    })

    // Reset form
    setTitle('')
    setDescription('')
    setVideoFile(null)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-blue-100 p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-[#0B2A4A] mb-6">Upload New Video</h2>

      {/* Title Input */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-[#0B2A4A] mb-2">
          Video Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter video title"
          className="w-full px-4 py-2 border border-blue-100 rounded-lg focus:outline-none focus:border-[#1E5AA8] transition-colors"
        />
      </div>

      {/* Description Input */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-[#0B2A4A] mb-2">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter video description"
          rows={4}
          className="w-full px-4 py-2 border border-blue-100 rounded-lg focus:outline-none focus:border-[#1E5AA8] transition-colors resize-none"
        />
      </div>

      {/* Drag & Drop Area */}
      <div
        className={`mb-6 border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragActive
            ? 'border-[#1E5AA8] bg-blue-50'
            : 'border-blue-200 hover:border-[#1E5AA8]'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="video/*"
          onChange={(e) => e.target.files && handleFileSelect(e.target.files[0])}
          className="hidden"
        />

        {videoFile ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#1E5AA8] flex items-center justify-center">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-[#0B2A4A]">{videoFile.name}</p>
                <p className="text-sm text-[#6B7280]">
                  {(videoFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setVideoFile(null)}
              className="p-2 hover:bg-red-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-red-500" />
            </button>
          </div>
        ) : (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="cursor-pointer"
          >
            <Upload className="w-12 h-12 text-[#1E5AA8] mx-auto mb-2" />
            <p className="text-[#0B2A4A] font-semibold mb-1">
              Drag and drop your video here
            </p>
            <p className="text-sm text-[#6B7280] mb-4">
              or click to browse (MP4, WebM, Ogg)
            </p>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-[#1E5AA8] text-white hover:bg-[#154080] disabled:opacity-50"
      >
        {isLoading ? 'Uploading...' : 'Upload Video'}
      </Button>
    </form>
  )
}
