'use client'

import useServices from './hooks/useServices'
export default function Services() {
  const { heading, services } = useServices()

  return (
    <section className="bg-black text-white px-6 py-16 md:p-[120px]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-semibold">
          {heading}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 max-w-7xl mx-auto">
        {services.map((service) => (
          <div
            key={service.title}
            className="relative group flex flex-col items-start p-6 rounded-xl bg-[#080d18] transition-all duration-300 overflow-hidden"
          >
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-xl p-[0.8px] bg-gradient-to-br from-[#080d18] via-[#080d18] to-[#FF9900]/50 opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="w-full h-full rounded-[11px] bg-[#080d18]" />
            </div>

            {/* Bottom glow */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF9900]/40 to-transparent blur-[8px] opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-[14px] md:text-[16px] font-semibold mb-5 text-white leading-[22px] md:leading-7">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-5 text-[13px] leading-[22px] font-normal whitespace-pre-line">
                {service.description}
              </p>

              <div className="flex gap-3 mt-auto ">
                {service.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="bg-white px-3 py-1 rounded shadow-sm flex items-center"
                  >
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="object-contain"
                      width={92}
                      height={35}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
