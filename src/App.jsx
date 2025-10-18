import { useState, useEffect } from "react";
import "./App.css";
import FormPokemon from "./components/FormPokemon.jsx";
import PokemonCard from "./components/pokemon-card.jsx";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const pokemonsSalvos = JSON.parse(localStorage.getItem("pokemons")) || [];
    setPokemons(pokemonsSalvos);
  }, []);

  const handleAddPokemon = (novoPokemon) => {
    const novosPokemons = [...pokemons, novoPokemon];
    setPokemons(novosPokemons);
    localStorage.setItem("pokemons", JSON.stringify(novosPokemons));
  };

  return (
    <div className="container-principal">
      <div className="container-lins">
        <FormPokemon onAddPokemon={handleAddPokemon} />
      </div>

      <div className="container-hideki">
        <div className="cards-container">
          {pokemons.length > 0 ? (
            pokemons.map((pokemon, index) => (
              <PokemonCard
                key={index}
                pokemon={{
                  id: `#${index + 1}`,
                  name: pokemon.nome,
                  image: pokemon.imagem || "https://via.placeholder.com/150",
                  power: pokemon.poder,
                  description: pokemon.descricao,
                  type: pokemon.tipo,
                }}
              />
            ))
          ) : (
            <p>Nenhum Pokémon adicionado ainda 😢</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
