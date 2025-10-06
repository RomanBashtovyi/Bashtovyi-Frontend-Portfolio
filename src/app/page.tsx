import { Header } from '@/sections/Header'
import { HeroSection } from '@/sections/Hero'
import { ExperienceSection } from '@/sections/Experience'
import { ProjectsSection } from '@/sections/Projects'
import { TapeSection } from '@/sections/Tape'
import { TestimonialsSection } from '@/sections/Testimonials'
import { AboutSection } from '@/sections/About'
import { ContactSection } from '@/sections/Contact'
import { Footer } from '@/sections/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
