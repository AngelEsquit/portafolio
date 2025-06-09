import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import GitHubStats from './components/GitHubStats'
import Contact from './components/Contact'
import SectionWrapper from './components/SectionWrapper'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={darkMode ? 'App dark' : 'App light'}>
      <SectionWrapper id="home">
        <Home darkMode={darkMode} setDarkMode={setDarkMode} />
      </SectionWrapper>
      <SectionWrapper id="sobre-mi">
        <About />
      </SectionWrapper>
      <SectionWrapper id="proyectos">
        <Projects />
      </SectionWrapper>
      <SectionWrapper id="github-stats">
        <GitHubStats darkMode={darkMode}/>
      </SectionWrapper>
      <SectionWrapper id="contacto">
        <Contact />
      </SectionWrapper>
    </div>
  )
}

export default App
