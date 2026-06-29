import { type INJHeroBackground, NJButton, NJHeroSection1 } from '@neja-digital/react-ui'
import mobileBgUrl from '/src/assets/static/images/hero-image-2-mobile.webp'
import tabletBgUrl from '/src/assets/static/images/hero-image-2-tablet.webp'
import tabletHBgUrl from '/src/assets/static/images/hero-image-2-tablet-2.webp'
import desktopBgUrl from '/src/assets/static/images/hero-image-2-desktop.webp'

export default function HeroSection() {
  const heroBackground: INJHeroBackground = {
    mobileBg: mobileBgUrl,
    tabletBg: tabletBgUrl,
    tabletHBg: tabletHBgUrl,
    desktopBg: desktopBgUrl,
  }

  const ctaButtons = (
    <>
      <NJButton njVariant="solid" njColor="secondary" njRounded="tight">
        Explore menu
      </NJButton>
      <NJButton njVariant="solid" njColor="primary" njRounded="tight">
        Book a table
      </NJButton>
    </>
  )
  
  return (
    <NJHeroSection1
      njBackground={heroBackground}
      njOverlay={0.15}
      njBlur={8}
      njHeadline="Coffee made for slow moments in a fast world"
      njSubheadline="Small-batch roasted beans, thoughtfully sourced, and brewed for clarity, comfort and focus"
      njSupporting="A modern neighborhood coffee shop focused on quality, consistency, and calm space"
      njCtaButtons={ctaButtons}
    />
  )
}
