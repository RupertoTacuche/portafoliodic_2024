import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Work from './components/Work'
import Philosophy from './components/Philosophy'
import SkillSet from './components/SkillSet'

function App() {
 

  return (
  
      <div className="App font-['Sen'] bg-black min-h-screen">
        <Navbar/>
        <Header/>
        <Work />
        <Philosophy />
        <SkillSet />
      </div>
  )
}

export default App
