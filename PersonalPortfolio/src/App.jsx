import './app.scss'
import Topbar from './sections/topbar/Topbar'
import Intro from './sections/intro/Intro'
import Portfolio from './sections/portfolio/Portfolio'
import Contact from './sections/contactMe/Contact'
import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {/* <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> */}
      <div className="sections">
        <Intro />
        <Portfolio />
        
        <Contact />
      </div>
    </div>
  );
}

export default App
