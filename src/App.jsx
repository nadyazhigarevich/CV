import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import LeftBar from './components/LeftBar'
import Projects from './components/Projects'
import "./style/index.scss"

const App = () => {
  return (

    <div className="wrapper">
      <div className='wrap'>
        <LeftBar />
        <div className='right-bar'>
          <Header />
          <div className="container">
            <Projects />
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default App