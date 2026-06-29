import { NJButton, NJFeaturedSection1, NJFullSection, type INJCardProps } from '@neja-digital/react-ui'
import '/src/assets/css/card.css'

import espressoImgUrl from '/src/assets/static/images/featured-espresso-43.webp'
import flatWhiteImgUrl from '/src/assets/static/images/featured-flatwhite-43.webp'
import coldBrewImgUrl from '/src/assets/static/images/featured-coldbrew-43.webp'

export default function NJFeaturedSection() {
  const featuredDrinks: INJCardProps[] = [{
    njTitle: 'Espresso',
    njText: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. ' +
        'Sit amet consectetur adipiscing elit quisque faucibus ex.',
    njImgData: {
      src: espressoImgUrl,
      alt: 'coffee shop signature espresso',
    },
    njRounded: 'medium',
    njRaised: 'medium',
    njColor: 'surface',
    njSize: 'large',
  }, {
    njTitle: 'Flat White',
    njText: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. ' +
        'Sit amet consectetur adipiscing elit quisque faucibus ex.',
    njImgData: {
      src: flatWhiteImgUrl,
      alt: 'coffee shop flat white',
    },
    njRounded: 'medium',
    njRaised: 'emphasized',
    njColor: 'surface',
    njSize: 'large',
  }, {
    njTitle: 'Cold brew',
    njText: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. ' +
        'Sit amet consectetur adipiscing elit quisque faucibus ex.',
    njImgData: {
      src: coldBrewImgUrl,
      alt: 'coffee shop cold brew',
    },
    njRounded: 'medium',
    njRaised: 'medium',
    njColor: 'surface',
    njSize: 'large',
  }]

  const featuredCtaButton = (
    <NJButton njVariant="solid" njColor="primary" njRounded="tight">
      See our full menu
    </NJButton>
  )

  return (
    <NJFullSection>
      <NJFeaturedSection1
        className="content-wrapper"
        njTitle="Check some of our finest drinks"
        njFeaturedItems={featuredDrinks}
        njCtaButtons={featuredCtaButton}
      />
    </NJFullSection>
  )
}
