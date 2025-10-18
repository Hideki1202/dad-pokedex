import { useState } from 'react'

import './App.css'
import PokemonCard from './components/pokemon-card'
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
          <PokemonCard pokemon={{
            id: "#025",
            name: "Pikachu",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
            power: 25,
            description: "Pikachu que tem bochechas amarelas cheias de eletricidade.",

          }} />
        </div>

      </div>

    </>
  )
}

export default App
