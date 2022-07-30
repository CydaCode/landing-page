import './App.css'
import HeroSection from './components/herosection/HeroSection'
import NavBar from './components/navbar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/aboutus/About'
import Core from './components/corecomponents/Core'
import FutureEvents from './components/communityevents/FutureEvents'
import Partner from './components/partners/Partner'


function App() {

  return (

    <BrowserRouter>
        <div >
          <NavBar />
          <Routes>
            <Route exact path='/' element={<HeroSection />}/>
            <Route exact path='/about' element={<About />}/>
            <Route exact path='/components' element={<Core />}/>
            <Route exact path='/events' element={<FutureEvents />}/>
            <Route exact path='/partners' element={<Partner />}/>
          </Routes>
        </div>

    </BrowserRouter>
  )
}

export default App
