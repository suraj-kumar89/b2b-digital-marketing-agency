// hooks/useFounders.ts

const BASE_PATH = '/b2b-digital-marketing-agency';
const useFounders = () => {
  return {
    heading: 'What B2B |Leaders Say',
    subheading:
      'Real results. Real growth. Here’s what clients and partners say about working together.',
    testimonials: [
      {
        message: `Working with Shitanshu and his team was a complete game-changer for our business. Before partnering with him, we were struggling to hit our targets despite investing in ads. But within just two months, not only did we surpass our lead generation goals, we also saw a significant jump in revenue.

Shitanshu has a rare ability to combine data-driven strategy with a deep understanding of business growth. He doesn’t just run ads, he builds performance systems that actually move the needle. The results we got were real, measurable, and far beyond our expectations.`,
        authorName: 'Noaman Ansari',
        authorRole: 'CEO, Tasks Expert',
        authorAvatar: `${BASE_PATH}/Noaman.png`,
        companyLogo: `${BASE_PATH}/assets/images/Tasks_Expert_Logo.svg`,
      },
      {
        message: `Shitanshu is a highly skilled Performance Marketer. During our time together at Outplay, Shitanshu consistently delivered impressive results, thanks to his deep understanding of data analysis, ad creative, and audience targeting. I was particularly impressed with Shitanshu's ability to deliver on lead requirements from paid campaigns while keeping costs low. `,
        authorName: 'Sandeep John',
        authorRole: 'Marketing Director',
        authorAvatar: `${BASE_PATH}/john.png`,
        companyLogo: `${BASE_PATH}/assets/images/logos/sprinto.svg`,
      },
    ],
  }
}

export default useFounders


