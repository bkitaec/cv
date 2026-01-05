import { Header } from '@/widgets/header'
import { Hero } from '@/widgets/hero'
import { About } from '@/widgets/about'
import { Experience } from '@/widgets/experience'
import { Skills } from '@/widgets/skills'
import { Projects } from '@/widgets/projects'
import { Contact } from '@/widgets/contact'
import { Footer } from '@/widgets/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
