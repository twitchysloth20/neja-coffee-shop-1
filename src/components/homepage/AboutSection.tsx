import classnames from 'classnames'

export interface INJAboutImageProp {
  srcSet: string
  sizes: string
  src: string
  alt: string
}

export type TNJAboutImagePositionProp = 'left' | 'right'

export interface INJAboutProps {
  njImgData?: INJAboutImageProp
  njImgPos?: TNJAboutImagePositionProp
}

export default function NJAboutSection1({
  njImgData,
  njImgPos,
}: INJAboutProps) {
  const imgPosClass = njImgPos ? `image-${njImgPos}` : ''
  const sectionClassname = classnames('nj-about', imgPosClass)

  return (
    <section className={sectionClassname}>
      <div className="nj-about__text">
        <h2 className="nj-about__title">
          More than just coffee
        </h2>
        <div className="nj-about__description">
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
        </div>
      </div>
      {
        njImgData &&
        <div className="nj-about__image">
          <img { ...njImgData } />
        </div>
      }
    </section>
  )
}