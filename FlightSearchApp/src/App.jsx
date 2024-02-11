import { useState } from 'react'

//import './styles/App.css'
import script from './script/script'
import Results from './components/Results'
import Header from './components/Header'
function App() {

  return (
    <>
    <Header/>
    <div className='card-grid'>
      <Results/>
      <Results/>
      <Results/>
    </div>
    
    


    
    </>
  )
}

export default App
