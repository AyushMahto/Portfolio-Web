import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import ParallaxBanner from '../components/sections/ParallaxBanner'
import Experience from '../components/sections/Experience'
import Education from '../components/sections/Education'
import Certifications from '../components/sections/Certifications'
import Projects from '../components/sections/Projects'
import TechStack from '../components/sections/TechStack'
import Achievements from '../components/sections/Achievements'
import ResumeSection from '../components/sections/ResumeSection'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <ParallaxBanner />
      <Experience />
      <Education />
      <Certifications />
      <Projects />
      <TechStack />
      <Achievements />
      <ResumeSection />
      <Contact />
    </>
  )
}
