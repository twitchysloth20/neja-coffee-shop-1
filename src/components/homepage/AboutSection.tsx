import classnames from 'classnames'

export interface INJAboutImageProp {
  srcSet: string
  sizes: string
  src: string
  alt: string
}

export type TNJAboutImagePositionProp = 'left' | 'right'

export interface INJAboutProps {
  children?: React.ReactNode
  njImgData?: INJAboutImageProp
  njImgPos?: TNJAboutImagePositionProp
  njAboutTitle?: string
  njAboutContent?: React.ReactNode
}

export default function NJAboutSection1({
  children,
  njImgData,
  njImgPos,
  njAboutTitle,
  njAboutContent,
}: INJAboutProps) {
  const imgPosClass = njImgPos ? `image-${njImgPos}` : ''
  const sectionClassname = classnames('nj-about', imgPosClass)

  const propsContent = (
    <>
      <div className="nj-about__text">
        <h2 className="nj-about__title">
          { njAboutTitle }
        </h2>
        <div className="nj-about__description">
          { njAboutContent }
        </div>
      </div>
      {
        njImgData &&
        <div className="nj-about__image">
          <img { ...njImgData } />
        </div>
      }
    </>
  )

  return (
    <section className={sectionClassname}>
      { children ? children : propsContent }
    </section>
  )
}