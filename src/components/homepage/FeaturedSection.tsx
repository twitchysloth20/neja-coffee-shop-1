import { NJCard, type INJCardProps } from '@neja-digital/react-ui'
import '/src/assets/css/card.css'

export interface INJFeaturedProps {
  children?: React.ReactNode
  njTitle?: string
  njFeaturedItems?: INJCardProps[]
  njCtaButtons?: React.ReactNode
}

export default function NJFeaturedSection({ children, njTitle, njFeaturedItems, njCtaButtons }: INJFeaturedProps) {
  const featuredCardsJsx = njFeaturedItems ? njFeaturedItems.map(item => (
    <NJCard
      key={item.njTitle}
      njRounded="medium"
      njRaised="medium"
      { ...item }
    />
  )) : []

  return (
    <section className="nj-featured">
      { children && <>{children}</>}
      { !children &&
      <>
        <h2 className="nj-featured__title">
          { njTitle }
        </h2>
        <div className="nj-featured__items">
          { featuredCardsJsx }
        </div>
        <div className="nj-featured__cta-buttons">
          { njCtaButtons }
        </div>
      </>
      }
    </section>
  )
}
