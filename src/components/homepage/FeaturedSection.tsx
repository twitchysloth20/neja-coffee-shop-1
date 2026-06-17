import { NJButton, NJFeaturedSection1, type INJCardProps } from '@neja-digital/react-ui'
import '/src/assets/css/card.css'

export default function NJFeaturedSection() {
  const featuredDrinks: INJCardProps[] = [{
    njTitle: 'Signature Espresso',
    njText: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. ' +
        'Sit amet consectetur adipiscing elit quisque faucibus ex.',
    njImgData: {
      src: '/src/assets/static/images/featured-espresso-43.jpg',
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
      src: '/src/assets/static/images/featured-flatwhite-43.jpg',
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
      src: '/src/assets/static/images/featured-coldbrew-43.jpg',
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
    <NJFeaturedSection1
      njTitle="Check some of our finest drinks"
      njFeaturedItems={featuredDrinks}
      njCtaButtons={featuredCtaButton}
    />
  )
}
