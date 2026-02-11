'use client'

import { useEffect, useRef, useState } from 'react'
import useGrowth from './hooks/useGrowth'
import Image from 'next/image'
const BASE_PATH = '/b2b-digital-marketing-agency';
/* Sticky offsets */
const TOPS_DESKTOP = [
  'top-[260px]',
  'top-[300px]',
  'top-[340px]',
  'top-[380px]',
  'top-[420px]',
]

const TOPS_MOBILE = [
  'top-[200px]',
  'top-[230px]',
  'top-[260px]',
  'top-[290px]',
  'top-[320px]',
]

const OVERLAP_DESKTOP = 'md:mt-8'
const OVERLAP_MOBILE = 'mt-6'

/* 🔹 Hook: shrink card when it becomes sticky */
function useStickyScale() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setStuck(!entry.isIntersecting)
      },
      { threshold: 1, rootMargin: '-1px 0px 0px 0px' }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return { ref, stuck }
}

type GrowthStep = {
  stepLabel: string
  title: string
  subtitle: string
  description: string
}

/* 🔹 Card Component */
function GrowthCard({
  step,
  topDesktop,
  topMobile,
  z,
}: {
  step: GrowthStep
  topDesktop: string
  topMobile: string
  z: number
}) {
  const { ref, stuck } = useStickyScale()

  return (
    <div
      className={[
        'sticky',
        'flex justify-center',
        'px-4 md:px-0',
        topMobile,
        `md:${topDesktop}`,
        OVERLAP_MOBILE,
        OVERLAP_DESKTOP,
      ].join(' ')}
      style={{ zIndex: z }}
    >
      <div
        ref={ref}
        className="flex flex-col md:flex-row gap-6 md:gap-8 transition-transform duration-300 ease-out"
        style={{
          transform: stuck ? 'scaleY(0.96)' : 'scaleY(1)',
          transformOrigin: 'top',
          width: '100%',
          maxWidth: '1000px',
          padding: '20px 24px',
          alignItems: 'flex-start',
          borderRadius: '36px',
          overflow: 'hidden',
          border: '0.5px solid rgba(255, 255, 255, 0.50)',
          background:
            'linear-gradient(270deg, rgba(15, 23, 42, 0.40) 0%, rgba(15, 23, 42, 0.40) 100%)',
          backdropFilter: 'blur(66px)',
          WebkitBackdropFilter: 'blur(66px)',
        }}
      >
        {/* BACKGROUND OVERLAY */}
        <div
          className="absolute inset-0 z-[-100]"
          style={{
            background:
              'linear-gradient(270deg, rgba(15, 23, 42, 0.0) 0%, rgba(15, 23, 42, 0.40) 100%)',
          }}
        />

        {/* LEFT COLUMN */}
        <div className="w-full md:w-[380px] shrink-0">
          <div className="flex items-center gap-3 mb-2">
            {/* STEP PILL */}
            <div
              className="flex text-[10px] font-medium"
              style={{
                height: '24px',
                padding: '4px 8px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '6px',
                borderRadius: '121px',
                border: '0.5px solid #FF9900',
                background: 'rgba(255, 153, 0, 0.08)',
                color: '#FF9900',
                lineHeight: '1',
                width: 'fit-content',
              }}
            >
              <span className="w-[6px] h-[6px] rounded-full bg-[#FF9900]" />
              {step.stepLabel}
            </div>

            {/* TITLE */}
            <h3 className="text-white text-[20px] md:text-[25px] font-semibold leading-[28px] md:leading-[33px]">
              {step.title}
            </h3>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full md:w-[560px] flex flex-col">
          <p className="text-white text-[14px] md:text-[16px] leading-[20px] mb-2 opacity-90">
            {step.subtitle}
          </p>

          <p className="text-[#94A3B8] text-[13px] leading-[20px]">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Growth() {
  const { GROWTH_STEPS } = useGrowth()

  return (
    <section className="bg-[#02050E] px-6 md:px-[120px] py-20">
      {/* HEADER */}
      <div className="max-w-[900px] mx-auto text-center mb-20">
        <div className="mx-auto mb-8 relative w-[140px] h-[140px]">
          <Image
            src={`${BASE_PATH}/assets/images/Growth.svg`}
            alt="Growth"
            fill
            className="object-contain"
            priority
          />
        </div>

        <h2 className="text-white text-[49px] font-semibold leading-[61px]">
          The Growth Execution Framework
        </h2>

        <p className="mt-4 text-[#94A3B8] text-[16px] leading-[28px]">
          A clear, structured process focused on what drives results.
        </p>
      </div>

      {/* STACK */}
      <div
        className="relative mx-auto md:pb-[40vh]"
        style={{ maxWidth: '846px' }}
      >
        {GROWTH_STEPS.map((step, i) => (
          <GrowthCard
            key={step.stepLabel}
            step={step}
            topDesktop={TOPS_DESKTOP[i] ?? 'top-[260px]'}
            topMobile={TOPS_MOBILE[i] ?? 'top-[200px]'}
            z={20 + i}
          />
        ))}
      </div>
    </section>
  )
}
