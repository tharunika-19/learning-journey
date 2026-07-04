import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <TechStack />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App