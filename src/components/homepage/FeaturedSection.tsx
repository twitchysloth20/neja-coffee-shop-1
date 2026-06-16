import type { INJCardProps } from '../Card'
import NJCard from '../Card'

export default function NJFeaturedSection() {
  const featuredDrinks: INJCardProps[] = [{
    njTitle: 'Signature Espresso',
    njText: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. ' +
      'Sit amet consectetur adipiscing elit quisque faucibus ex.',
    njImgData: '/src/static/images/featured-espresso-43.jpg',
  }, {
    njTitle: 'Flat White',
    njText: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. ' +
      'Sit amet consectetur adipiscing elit quisque faucibus ex.',
    njImgData: '/src/static/images/featured-flatwhite-43.jpg',
    njRaised: 'emphasized',
  }, {
    njTitle: 'Cold brew',
    njText: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. ' +
      'Sit amet consectetur adipiscing elit quisque faucibus ex.',
    njImgData: '/src/static/images/featured-coldbrew-43.jpg',
  }]

  const featuredCardsJsx = featuredDrinks.map(drink => (
    <NJCard
      key={drink.njTitle}
      njRounded="medium"
      njRaised="medium"
      { ...drink }
    />
  ))

  return (
    <section className="nj-featured">
      <h2 className="nj-featured__title">
        Check some of our finest drinks
      </h2>
      { featuredCardsJsx }
    </section>
  )
}
