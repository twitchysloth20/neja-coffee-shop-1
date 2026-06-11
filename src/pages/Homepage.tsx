import { NJHeroSection1, type INJHeroBackground } from '@neja-digital/react-ui'

export default function Homepage() {
  const heroBackground: INJHeroBackground = {
    mobileBg: '/src/static/images/hero-image-2-mobile.jpg',
    tabletBg: '/src/static/images/hero-image-2-tablet.jpg',
    tabletHBg: '/src/static/images/hero-image-2-tablet-2.jpg',
    desktopBg: '/src/static/images/hero-image-2-desktop.jpg',
  }

  return (
    <>
      <NJHeroSection1
        njBackground={heroBackground}
        njOverlay={0.15}
        njBlur={8}
        njHeadline="Coffee made for slow moments in a fast world"
        njSubheadline="Small-batch roasted beans, thoughtfully sourced, and brewed for clarity, comfort and focus"
        njSupporting="A modern neighborhood coffee shop focused on quality, consistency, and calm space"
        njCtaSecondary="Explore menu"
        njCtaPrimary="Book a table"
      />
    </>
  )
}
