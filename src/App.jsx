import { useState } from 'react'
import './App.css'
import FormPokemon from './components/FormPokemon.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-principal">
        <div className='container-lins'>
          <FormPokemon/>
        </div>
        <div className='container-hideki'>
          <h2>Hideki</h2>
        </div>

      </div>

    </>
  )
}

export default App
