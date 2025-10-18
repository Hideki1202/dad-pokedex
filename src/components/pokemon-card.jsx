import React from "react";
import "./pokemon-card.css";

export default function PokemonCard({ pokemon }) {
  const {
    id = "#000",
    name = "Missingno",
    image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    type = "Normal",
    power = 100,
    description = "Um Pokémon misterioso.",
  } = pokemon || {};

  const tipos = [
    { nome: "Fogo", classe: "fogo", icone: "🔥" },
    { nome: "Água", classe: "agua", icone: "💧" },
    { nome: "Grama", classe: "grama", icone: "🌿" },
    { nome: "Elétrico", classe: "eletrico", icone: "⚡" },
    { nome: "Psíquico", classe: "psiquico", icone: "🌀" },
    { nome: "Pedra", classe: "pedra", icone: "🪨" },
  ];

  const tipoInfo = tipos.find((t) => t.nome === type);

  return (
    <div style={{ backgroundColor: "#FFF", color:"#0000", borderRadius:"20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
      <div className="card-content" style={{ display: "flex", flexDirection:"row", color:"#0000", alignItems:"center", justifyContent:"space-around" }}>
        <img src={image} alt={`Imagem do ${name}`} style={{height:"250px"}} className="pokemon-image" />
        <div className="card-info">
          <h2 style={{color:"black"}} >{name.toUpperCase()}</h2>

          {tipoInfo && (
            <button type="button"  className={`.tipo  ${tipoInfo.classe}`}>
              {tipoInfo.icone} {tipoInfo.nome}
            </button>
          )}

        <p style={{color:"black"}}>{description}</p>
        <p style={{color:"black"}}>Power: {power}</p> 
               </div>
      </div>
    </div>
  );
}
