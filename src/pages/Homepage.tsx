import AboutSection from '../components/homepage/AboutSection'
import NJFeaturedSection from '../components/homepage/FeaturedSection'
import HeroSection from '../components/homepage/HeroSection'
import { type INJCardProps, NJButton } from '@neja-digital/react-ui'

export default function Homepage() {
  const featuredDrinks: INJCardProps[] = [{
    njTitle: 'Signature Espresso',
    njText: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. ' +
        'Sit amet consectetur adipiscing elit quisque faucibus ex.',
    njImgData: {
      src: '/src/assets/static/images/featured-espresso-43.jpg',
      alt: 'coffee shop signature espresso',
    },
  }, {
    njTitle: 'Flat White',
    njText: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. ' +
        'Sit amet consectetur adipiscing elit quisque faucibus ex.',
    njImgData: {
      src: '/src/assets/static/images/featured-flatwhite-43.jpg',
      alt: 'coffee shop flat white',
    },
    njRaised: 'emphasized',
  }, {
    njTitle: 'Cold brew',
    njText: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. ' +
        'Sit amet consectetur adipiscing elit quisque faucibus ex.',
    njImgData: {
      src: '/src/assets/static/images/featured-coldbrew-43.jpg',
      alt: 'coffee shop cold brew',
    },
  }]

  const featuredCtaButton = (
    <NJButton njVariant="solid" njColor="primary" njRounded="tight">
      See our full menu
    </NJButton>
  )

  return (
    <>
      <HeroSection />
      <main className="main-section">
        <div className="content-wrapper">
          <AboutSection />
          <NJFeaturedSection
            njTitle="Check some of our finest drinks"
            njFeaturedItems={featuredDrinks}
            njCtaButtons={featuredCtaButton}
          />
        </div>
      </main>
    </>
  )
}
