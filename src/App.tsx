import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import Manifesto from './sections/Manifesto'
import Process from './sections/Process'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Carbon from './sections/Carbon'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Shop from './pages/Shop'

function App() {
  const [route, setRoute] = useState<'home' | 'shop'>(
    window.location.hash === '#/tienda' ? 'shop' : 'home'
  )

  window.addEventListener('hashchange', () => {
    setRoute(window.location.hash === '#/tienda' ? 'shop' : 'home')
  })

  if (route === 'shop') {
    return <Shop />
  }

  return (
    <div className="min-h-screen bg-carbon text-bone">
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Process />
        <Projects />
        <Services />
        <Carbon />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
