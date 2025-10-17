import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-principal">
        <div className='container-lins'>
          <h1>Lins</h1>
        </div>
        <div className='container-hideki'>
          <h2>Hideki</h2>
        </div>

      </div>

    </>
  )
}

export default App
