import AboutSection from '../components/homepage/AboutSection'
import ExperienceSection from '../components/homepage/ExperienceSection'
import FeaturedSection from '../components/homepage/FeaturedSection'
import HeroSection from '../components/homepage/HeroSection'

export default function Homepage() {

  return (
    <>
      <HeroSection />
      <main className="main-section">
        <div className="content-wrapper">
          <AboutSection />
          <FeaturedSection />
          <ExperienceSection />
        </div>
      </main>
    </>
  )
}
