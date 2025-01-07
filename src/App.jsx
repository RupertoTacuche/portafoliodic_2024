import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Work from './components/Work'
import Philosophy from './components/Philosophy'
import SkillSet from './components/SkillSet'
import Projects from './components/Projects'
import Behance1 from './components/Behance1'
import Design from './components/Design'

import Footer from './components/Footer'

import Contact1 from './components/Contact1'

function App() {
 

  return (
  
      <div className="App font-['Sen'] bg-black min-h-screen">
        <Navbar/>
        <Header/>
        <Work />
        <Philosophy />
        <SkillSet />
        <Projects />
        <Behance1 />
        <Design />
        <Contact1 />
        <Footer />
      </div>
  )
}

export default App
