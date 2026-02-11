'use client'

import useTools from './hooks/useTools'

export default function Tools() {
  const { heading, subheading, tools } = useTools()

  return (
    <section className="bg-[#02050E] text-white py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          {heading}
        </h2>
        <p className="text-[#94A3B8] mt-2">{subheading}</p>
      </div>

      <div className="relative overflow-hidden px-0 md:px-20 lg:px-56">
        <div className="space-y-3 relative z-10">
          {tools.map((row, rowIndex) => (
            <div key={rowIndex} className="overflow-hidden w-full">
              <div
                className={`flex gap-3 whitespace-nowrap ${
                  rowIndex === 1
                    ? 'animate-scrollRight'
                    : 'animate-scrollLeft'
                }`}
              >
                {[...row, ...row].map((src, idx) => (
                  <div
                    key={idx}
                    className="w-36 h-36 flex items-center justify-center bg-[#0F172A66] rounded-lg p-3 shrink-0"
                  >
                    <img
                      src={src}
                      alt="tool logo"
                      className="w-20 h-20 object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
