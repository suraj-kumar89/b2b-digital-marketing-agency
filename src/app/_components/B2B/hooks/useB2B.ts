const BASE_PATH = '/b2b-digital-marketing-agency';

const useSaas = () => {
  return {
    heading: 'Why B2B Companies Partner With Me',
    subheading:
      'B2B teams work with me because growth decisions are grounded in data, context, and execution discipline. No fluff. Just focused strategy, clear communication, and results that tie back to the business.',
    cta: {
      text: 'Book a Call',
      link: '/book-a-call',
    },
    pillars: [
      {
        icon: `${BASE_PATH}/assets/svg/award.svg`,
        title: 'Dedicated B2B Expertise',
        color: 'text-yellow-400',
        description:
          'Deep experience working with B2B businesses that operate with longer sales cycles, multiple decision makers, and high-value deals.\n\nEvery strategy is built around real B2B growth metrics such as lead quality, pipeline contribution, conversion efficiency, and sales alignment.',
      },
      {
        icon: `${BASE_PATH}/assets/svg/coins.svg`, // ✅ fixed
        title: 'Transparency and Accountability',
        color: 'text-sky-400',
        description:
          'Clear reporting, consistent communication, and full visibility into what is working and what is not.\n\nYou always know where budget is being spent, what impact it is driving, and how decisions are being made in alignment with your business objectives.',
      },
      {
        icon: `${BASE_PATH}/assets/svg/graph.svg`,
        title: 'Proven, Impactful Results',
        color: 'text-emerald-400',
        description:
          'Hands-on experience executing and scaling performance-driven campaigns for B2B companies.\n\nEvery outcome is backed by measurable improvements and real case studies, not vanity metrics or surface-level wins.',
      },
    ],
  }
}

export default useSaas
