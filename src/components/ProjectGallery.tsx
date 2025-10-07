'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

interface ProjectGalleryProps {
  images: {
    src: string
    alt: string
  }[]
}

export const ProjectGallery = ({
  images,
}: ProjectGalleryProps) => {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleImageClick = (index: number) => {
    setCurrentIndex(index)
    setOpen(true)
  }

  const slides = images.map((img) => ({
    src: img.src,
    alt: img.alt,
  }))

  return (
    <>
      <div className="relative">
        {/* Main Image Preview */}
        <div
          className="relative aspect-[4/3] sm:aspect-video rounded-lg overflow-hidden cursor-pointer group mb-3"
          onClick={() => handleImageClick(0)}
        >
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm rounded-full p-3 sm:p-4">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </div>
          {images.length > 1 && (
            <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 sm:px-3 sm:py-1.5 rounded-full font-medium">
              +{images.length - 1} more
            </div>
          )}
        </div>

        {/* Thumbnail Grid */}
        {images.length > 1 && (
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5 sm:gap-2">
            {images.slice(1, 5).map((img, index) => (
              <div
                key={index + 1}
                className="relative aspect-square sm:aspect-video rounded-md overflow-hidden cursor-pointer group"
                onClick={() => handleImageClick(index + 1)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                {index === 3 && images.length > 5 && (
                  <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center cursor-pointer"
                    onClick={() => handleImageClick(4)}
                  >
                    <span className="text-white text-xs sm:text-sm font-semibold">
                      +{images.length - 5}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={currentIndex}
        controller={{
          closeOnBackdropClick: true,
        }}
        styles={{
          container: {
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
          },
        }}
      />
    </>
  )
}
