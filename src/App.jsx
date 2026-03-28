import Starfield from './components/Starfield/Starfield'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Learning from './components/Learning/Learning'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import useScrollReveal from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <>
      {/* Background layers */}
      <Starfield />
      <div className="nebula neb-a" />
      <div className="nebula neb-b" />
      <div className="nebula neb-c" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="wrap">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Learning />
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}
