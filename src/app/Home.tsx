// app/[slug]/page.tsx
import {
  Accelerate,
  Faqs,
  Founders,
  Growth,
  Hello,
  LetsWork,
  Performance,
  Proven,
  Saas,
  Services,
  Tools
} from './_components'

interface HomeProps {
  slug?: string;
}

export default function DynamicPage({ slug  }: HomeProps) {

  return (
    <>
      <Accelerate slug={slug}/>
      <Performance />
      <Services  /> {/* Pass slug here */}
      <Proven slug={slug} />
      <Saas />
      <Hello  slug={slug} />
      <Tools />
      <Founders />
      <Growth />
      <LetsWork />
      <Faqs />
    </>
  )
}
