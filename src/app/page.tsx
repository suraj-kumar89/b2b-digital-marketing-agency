import Home from './Home'

// ✅ Dynamic metadata based on slug
export async function generateMetadata() {
  return {
    title: "B2B Digital Marketing Agency | Performance Driven Growth & Lead Generation",
    description:
      "B2B digital marketing agency focused on lead quality, pipeline growth, and conversion efficiency through performance marketing, SEO, and CRO.",
  };
}

export default function page() {
  return <Home slug="homepage" />
}
