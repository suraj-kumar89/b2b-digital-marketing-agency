const BASE_PATH = '/b2b-digital-marketing-agency';

const useServices = () => {
  return {
    heading: 'Services Engineered for B2B Growth',
    services: [
      {
        title: 'Performance Marketing',
        description:
          'Drive consistent, high-intent demand through precision-led paid acquisition.\n\nWe design and manage performance marketing programs that align with B2B buying behaviour, longer sales cycles, and revenue-focused outcomes. Campaigns are built around intent, account quality, and pipeline contribution rather than volume alone.',
        tools: [
          { name: 'LinkedIn Ads', logo:  `${BASE_PATH}/assets/svg/linkedin.svg` },
          { name: 'Google Ads', logo:  `${BASE_PATH}/assets/svg/googleads.svg` },
          { name: 'Meta Ads', logo:  `${BASE_PATH}/assets/svg/meta.svg` },
        ],
      },
      {
        title: 'Conversion Rate Optimisation (CRO)',
        description:
          'Turn existing traffic into qualified enquiries and sales conversations.\n\nWe optimise key conversion points across your website and landing pages to reduce friction, improve clarity, and increase conversion efficiency. Every change is informed by user behaviour, data insights, and business objectives.',
        tools: [
          { name: 'Figma', logo: `${BASE_PATH}/assets/svg/figma.svg` },
          { name: 'Hotjar', logo:  `${BASE_PATH}/assets/svg/hotjar.svg` },
          { name: 'HubSpot', logo:  `${BASE_PATH}/assets/svg/hubspot.svg` },
        ],
      },
      {
        title: 'SEO for B2B',
        description:
          'Build long-term inbound demand from high-intent B2B search.\n\nOur SEO approach focuses on commercial, decision-stage keywords that attract qualified buyers, not just traffic. From technical foundations to content and conversion alignment, SEO is treated as a pipeline-building channel, not a visibility exercise.',
        tools: [
          { name: 'SEMRUSH', logo:  `${BASE_PATH}/assets/svg/semrush.svg` },
          { name: 'Google Analytics', logo:  `${BASE_PATH}/assets/svg/googleana.svg` },
          { name: 'Screaming Frog', logo:  `${BASE_PATH}/assets/svg/frog.svg` },
        ],
      },
    ],
  }
}

export default useServices
