const BASE_PATH = '/b2b-digital-marketing-agency';

const usePerformance = () => {
  return {
    title: 'Performance–Led Growth Pillars',
    subtitle:
      'A structured, data-first approach to building and scaling B2B growth with clarity, focus, and accountability.',
    pillars: [
      {
        icon: `${BASE_PATH}/assets/svg/icon1.svg`,
        textcolor: 'text-[#FDE68A]',
        title: 'Strategic Bottleneck Diagnosis',
        description:
          'Before any execution begins, we focus on understanding how your B2B business actually creates revenue.\n\nWe analyse your acquisition channels, positioning, buyer journey, funnel flow, and sales handoffs to identify where momentum slows and where focused effort will create the most impact. Decisions are grounded in real data and business context, not assumptions or generic frameworks.',
      },
      {
        icon: `${BASE_PATH}/assets/svg/icon2.svg`,
        textcolor: 'text-[#F59E0B]',
        title: 'Contextual Playbooks by Growth Stage',
        description:
          'Every B2B business operates with different constraints, sales cycles, and priorities.\n\nStrategies are designed around your current stage, whether the focus is building initial demand, improving consistency and lead quality, or scaling what already works. The approach evolves as your business grows, rather than forcing a fixed playbook that may not fit.',
      },
      {
        icon: `${BASE_PATH}/assets/svg/icon4.svg`,
        textcolor: 'text-[#60A5FA]',
        title: 'Fast, Focused Execution',
        description:
          'Execution works only when it is deliberate and aligned.\n\nCampaigns are launched with clear objectives, precise targeting, and defined success metrics. Each initiative is designed to be relevant, measurable, and directly connected to broader growth goals, instead of chasing short-term wins or surface-level activity.',
      },
      {
        icon: `${BASE_PATH}/assets/svg/icon3.svg`,
        textcolor: 'text-[#6EE7B7]',
        title: 'Compounding Optimization',
        description:
          'Growth is treated as a system, not a collection of isolated campaigns.\n\nInsights from performance data, buyer behaviour, and conversion patterns are continuously fed back into strategy and execution. Over time, these improvements compound, leading to stronger efficiency, clearer insights, and more predictable outcomes.',
      },
    ],
  }
}

export default usePerformance
