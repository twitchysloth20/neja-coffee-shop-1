import NJAboutSection1, { type INJAboutImageProp } from '../components/homepage/AboutSection'
import HeroSection from '../components/homepage/HeroSection'

export default function Homepage() {
  const mobileImage = '/src/static/images/about-image-34-mobile.jpg 460w'
  const tabletImage = '/src/static/images/about-image-34-tablet.jpg 600w'

  const imgData: INJAboutImageProp = {
    srcSet: `${mobileImage}, ${tabletImage}`,
    sizes: '(width >= 600px) 600px, 460px',
    src: '/src/static/images/about-image-34-mobile.jpg',
    alt: 'urban coffee about',
  }

  return (
    <>
      <HeroSection />
      <main className="main-section">
        <div className="content-wrapper">
          <NJAboutSection1 njImgData={imgData} />
        </div>
      </main>
    </>
  )
}
