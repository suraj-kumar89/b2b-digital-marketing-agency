// hooks/useFounders.ts

const BASE_PATH = '/b2b-digital-marketing-agency';
const useFounders = () => {
  return {
    heading: 'What B2B |Leaders Say',
    subheading:
      'Real results. Real growth. Here’s what clients and partners say about working together.',
    testimonials: [
      {
        message: `I have had the pleasure of watching Shitanshu grow from an intern to leading a team of paid media marketers in a remarkably short time. Throughout his tenure at Neil Patel Accel & Outplay, Shitanshu has consistently demonstrated an exceptional blend of skill, dedication, and passion for digital marketing. Any organization would be lucky to have him as he is truly a great asset to any team. His professionalism and results-driven approach guarantee success for any projects he undertakes.`,
        authorName: 'Gautham Nagaraj',
        authorRole: 'Head of Marketing',
        authorAvatar: '/gautham.png',
        companyLogo: `${BASE_PATH}/assets/images/dem.svg`,
      },
      {
        message: `Shitanshu is a highly skilled Performance Marketer. During our time together at Outplay, Shitanshu consistently delivered impressive results, thanks to his deep understanding of data analysis, ad creative, and audience targeting. I was particularly impressed with Shitanshu's ability to deliver on lead requirements from paid campaigns while keeping costs low. `,
        authorName: 'Sandeep John',
        authorRole: 'Marketing Director',
        authorAvatar: '/john.png',
        companyLogo: `${BASE_PATH}/assets/images/logos/sprinto.svg`,
      },
    ],
  }
}

export default useFounders


