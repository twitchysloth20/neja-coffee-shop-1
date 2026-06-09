import { NJButton } from '@neja-digital/react-ui'
import './hero.css'

export default function HeroSection() {
  return (
    <section className="hero">
      <h2 className="hero__headline">
        Coffee made for slow moments in a fast world.
      </h2>
      <h3 className="hero__subheadline">
        Small-batch roasted beans, thoughtfully sourced, and brewed for clarity, comfort, and focus.
      </h3>
      <div className="hero__cta-buttons">
        <NJButton
          njSize='compact'
          njColor='secondary'
        >
          Explore menu
        </NJButton>
        <NJButton>
          Book a table
        </NJButton>
      </div>
      <p className="hero__supporting">
        A modern neighborhood coffee shop focused on quality, consistency, and calm space.
      </p>
    </section>
  )
}
