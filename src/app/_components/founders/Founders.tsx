'use client'

import useFounders from './hooks/useFounders'
import { useEffect, useRef, useState } from 'react'

export default function Founders() {
  const { heading, subheading, testimonials } = useFounders()
  const [current, setCurrent] = useState(0)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const slides = [...testimonials, ...testimonials]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!wrapperRef.current) return

    const cardWidth =
      wrapperRef.current.firstElementChild?.clientWidth || 0

    wrapperRef.current.scrollTo({
      left: current * cardWidth,
      behavior: 'smooth',
    })

    if (current >= testimonials.length) {
      setTimeout(() => {
        if (wrapperRef.current) {
          wrapperRef.current.scrollTo({ left: 0, behavior: 'auto' })
        }
        setCurrent(0)
      }, 3000)
    }
  }, [current, testimonials.length])

  return (
    <section className="bg-[#000000] text-white py-10 px-4 lg:px-0 lg:py-[120px] md:pl-12 lg:pl-[120px] overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start justify-between">

        {/* LEFT COLUMN */}
        <div className="lg:w-1/3 shrink-0 mb-10 lg:mb-0">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-3">
            {heading.split('|').map((line) => (
              <div key={line}>{line}</div>
            ))}
          </h2>

          <div className="text-sm lg:text-[16px] text-gray-400">
            {subheading.split('|').map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <div
            ref={wrapperRef}
            className="flex gap-4 md:gap-6 overflow-x-auto md:overflow-hidden"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {slides.map((t, index) => (
              <div
                key={`${t.authorName}-${index}`}
                className={`w-[58%] lg:w-[70%] shrink-0 snap-start transition-opacity duration-700 ${
                  index % testimonials.length ===
                  current % testimonials.length
                    ? 'opacity-100'
                    : index % testimonials.length ===
                      (current + 1) % testimonials.length
                    ? 'opacity-40'
                    : 'opacity-0'
                }`}
              >
                <div className="rounded-[10px] p-[1px] bg-gradient-to-r from-[#31220d] via-[#5a3a06] to-[#FF9900] h-full min-h-[240px] flex flex-col">
                  <div className="bg-[#020712] rounded-[10px] p-4 md:p-8 flex flex-col justify-between h-full">

                    <p className="text-sm md:text-[13px] text-[#94A3B8] italic mb-6">
                      “{t.message}”
                    </p>

                    <div className="flex items-center justify-between mt-auto">

                      {/* AUTHOR */}
                      <div className="flex items-center gap-2">
                        <img
                          src={t.authorAvatar}
                          alt={t.authorName}
                          width={40}
                          height={40}
                          className="rounded-full"
                          loading="lazy"
                        />

                        <div>
                          <p className="md:text-sm text-[10px] font-semibold text-[#FDBA74]">
                            {t.authorName}
                          </p>
                          <p className="md:text-xs text-[8px] text-gray-400">
                            {t.authorRole}
                          </p>
                        </div>
                      </div>

                      {/* COMPANY LOGO */}
                      <img
                        src={t.companyLogo}
                        alt="company logo"
                        width={80}
                        height={24}
                        className="object-contain"
                        loading="lazy"
                      />
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
