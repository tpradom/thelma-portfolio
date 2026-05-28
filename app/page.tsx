import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Work from '@/components/Work'
import Process from '@/components/Process'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Work />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}
