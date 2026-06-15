import { type INJAboutImageProp, NJAboutSection1 } from '@neja-digital/react-ui'

export default function AboutSection() {
  const mobileImage = '/src/static/images/about-image-34-mobile.jpg 460w'
  const tabletImage = '/src/static/images/about-image-34-tablet.jpg 600w'
  
  const imgData: INJAboutImageProp = {
    srcSet: `${mobileImage}, ${tabletImage}`,
    sizes: '(width >= 600px) 600px, 460px',
    src: '/src/static/images/about-image-34-mobile.jpg',
    alt: 'urban coffee about',
  }

  const aboutContent = (
    <>
      <p>
        We believe great coffee starts long before it reaches your cup. From carefully selected beans and
        responsible sourcing to precise roasting and brewing, every step matters. Our goal is not only to serve
        exceptional coffee, but to create an experience people look forward to returning to.
      </p>
      <p>
        We work with trusted producers and small farms that share our commitment to quality and sustainability.
        Each coffee is chosen  for its unique character, allowing us to offer flavors that are approachable,
        balanced and memorable. By roasting in small batches, we maintain consistency while preserving the
        qualities that make each origin special
      </p>
      <p>
        Everything we do is guided by a straightforward philosophy: use quality ingredients, pay attention to the
        details and create a space where people feel at home.
      </p>
    </>
  )

  return (
    <NJAboutSection1
      njImgPos="left"
      njImgData={imgData}
      njAboutTitle="More than just coffee"
      njAboutContent={aboutContent} />
  )
}
