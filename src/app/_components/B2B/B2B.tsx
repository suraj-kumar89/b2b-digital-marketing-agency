'use client'

import { FaArrowRightLong } from 'react-icons/fa6'
import Image from 'next/image'
import useSaas from './hooks/useB2B' // ✅ fixed import
const BASE_PATH = '/b2b-digital-marketing-agency';

export default function Saas() {
  const { heading, subheading, cta, pillars } = useSaas()

  return (
    <section className="bg-black text-white px-6 py-16 md:p-[120px]">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16 gap-6 lg:gap-0">

        <div className="lg:w-[33%]">
          <h2 className="text-3xl leading-9 tracking-[-0.62px] md:text-4xl font-semibold md:leading-11 max-w-xl">
            {heading}
          </h2>
        </div>

        <div className="lg:px-9 text-gray-400 mt-2 max-w-3xl leading-[22px] md:leading-7 text-[14px] md:text-[16px] lg:w-[50%]">
          {subheading}
        </div>

        <a
          href={cta.link}
          className="lg:w-[15%] w-[50%] bg-[#FF9900] flex justify-center items-center gap-3 transition text-black font-medium px-5 py-3 rounded shadow text-sm"
        >
          {cta.text} <FaArrowRightLong size={15} />
        </a>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="flex flex-col items-start text-left rounded-md p-5"
          >
            {/* ✅ Safe Next Image */}
            <Image
              src={pillar.icon}
              alt={pillar.title}
              width={28}
              height={28}
              className="mb-3 object-contain"
            />

            <h3
              className={`font-semibold text-[16px] lg:text-xl leading-[26px] mb-2 ${pillar.color}`}
            >
              {pillar.title}
            </h3>

            <p className="text-gray-400 text-[13px] leading-5 whitespace-pre-line">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
