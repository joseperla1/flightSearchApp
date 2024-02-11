import { useState } from 'react'

//import './styles/App.css'
import script from './script/script'
import Results from './components/Results'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {

  return (
    <>
    <Header/>
    <div className='background'>
      <div className='card-grid'>
        <Results/>
        <Results/>
        <Results/>
      </div>
      
    </div>
    <Footer/>
    
    
    


    
    </>
  )
}

export default App
