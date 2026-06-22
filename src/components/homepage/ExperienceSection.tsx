import { NJButton, NJCard, NJFullSection, NJTextSection1, type TNJCardProps } from '@neja-digital/react-ui'

export default function ExperienceSection() {
  const contentJsx = (
    <>
      <p>
        Designed for focus and comfort. Natural light and minimal design create an environment where you can work, 
        meet, or simply take a break without rush. But you don't have to take our word for it. Just come and visit us 
        when you are around. We are daring to bet that your first coffee at our place won't also be the last.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien 
        vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium 
        tellus duis convallis tempus leo eu aenean.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien 
        vitae. Ex sapien vitae pellentesque sem placerat in id.
      </p>
    </>
  )

  const highlightsContentJsx = (
    <ul className="highlights-list">
      <li>High-speed Wi-Fi</li>
      <li>Power outlets at most seats</li>
      <li>Low-volume ambient music</li>
      <li>Some of the best coffee in town</li>
    </ul>
  )

  const highlightsProps: TNJCardProps = {
    njTitle: 'Highlights',
    njContent: highlightsContentJsx,
    njImgData: {
      src: '/src/assets/static/images/highlights.jpg',
      alt: 'coffee shop best features',
    },
    njRounded: 'medium',
    njRaised: 'medium',
    njColor: 'surface',
  }

  const highlightsJsx = (
    <NJCard {...highlightsProps} />
  )

  const ctaButtonsJsx = (
    <NJButton njVariant="solid" njColor="primary" njRounded="tight">
      Check what others have said
    </NJButton>
  )

  return (
    <NJFullSection>
      <NJTextSection1
        className="content-wrapper"
        njTitle="The Experience"
        njContent={contentJsx}
        njHighlights={highlightsJsx}
        njCtaButtons={ctaButtonsJsx}
        njDirection="reverse"
        njCtaButtonsPos="first"
      />
    </NJFullSection>
  )
}