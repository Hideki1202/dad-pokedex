import React from "react";

export default function PokemonCard({ pokemon }) {
  const {
    id = "#000",
    name = "Missingno",
    image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    types = ["Normal"],
    power = 100,
    description = "Um Pokémon misterioso.",
  } = pokemon || {};


  return (
    <div style={{ backgroundColor: "#FFF", color:"#0000"}}>
        <div style={{ display: "flex", flexDirection:"row",  color:"#0000", alignItems:"center" }}>
            <img
                src={image}
                style={{ width: "200px", height: "200px" }}
                alt={`Imagem do ${name}`}/>
            <div>
            <h2 style={{color:"black",  fontStyle:"bold"}}>{name.toUpperCase()}</h2>
            
             <p style={{color:"black"}}>{description}</p>
            <p style={{color:"black"}}>Power: {power}</p>





            </div>
        </div>


    </div>
  );
}
