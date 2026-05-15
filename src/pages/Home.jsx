import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import Stats from '../components/Stats'
import ServicesSection from '../components/ServicesSection'
import Valeurs from '../components/Valeurs'
import Reference from '../components/Reference'
import CommercialSection from '../components/CommercialSection'
import TeamSection from '../components/TeamSection'
import Partners from '../components/Partners'
import Testimonials from '../components/Testimonials'
import BrochureCTA from '../components/BrochureCTA'
import ContactSection from '../components/ContactSection'

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Stats />
      <ServicesSection />
      <Valeurs />
      <Reference />
      <CommercialSection />
      <TeamSection />
      <Partners />
      <Testimonials />
      <BrochureCTA />
      <ContactSection />
    </main>
  )
}

export default Home
