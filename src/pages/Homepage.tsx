import AboutSection from '../components/homepage/AboutSection'
import ExperienceSection from '../components/homepage/ExperienceSection'
import FeaturedSection from '../components/homepage/FeaturedSection'
import HeroSection from '../components/homepage/HeroSection'
import TestimonialsSection from '../components/homepage/TestimonialsSection'

export default function Homepage() {

  return (
    <>
      <HeroSection />
      <main className="main-content">
        <FeaturedSection />
        <AboutSection />
        <ExperienceSection />
        <TestimonialsSection />
      </main>
    </>
  )
}
