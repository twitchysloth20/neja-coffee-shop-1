import AboutSection from '../components/homepage/AboutSection'
import HeroSection from '../components/homepage/HeroSection'

export default function Homepage() {

  return (
    <>
      <HeroSection />
      <main className="main-section">
        <div className="content-wrapper">
          <AboutSection />
        </div>
      </main>
    </>
  )
}
