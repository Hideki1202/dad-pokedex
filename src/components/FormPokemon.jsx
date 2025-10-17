import React, { useState } from "react";
import "./FormPokemon.css";
import logo from "../assets/pokemon_logo_pixel.png";

const Forms = () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [poder, setPoder] = useState(1);
  const [tipoSelecionado, setTipoSelecionado] = useState(null);

  const tipos = [
    { nome: "Fogo", classe: "fogo", icone: "🔥" },
    { nome: "Água", classe: "agua", icone: "💧" },
    { nome: "Grama", classe: "grama", icone: "🌿" },
    { nome: "Elétrico", classe: "eletrico", icone: "⚡" },
    { nome: "Psíquico", classe: "psiquico", icone: "🌀" },
    { nome: "Pedra", classe: "pedra", icone: "🪨" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !tipoSelecionado || !descricao) {
      alert("Preencha todos os campos!");
      return;
    }

    const novoPokemon = { nome, tipo: tipoSelecionado, descricao, poder };
    const pokemonsSalvos = JSON.parse(localStorage.getItem("pokemons")) || [];
    localStorage.setItem(
      "pokemons",
      JSON.stringify([...pokemonsSalvos, novoPokemon])
    );

    setNome("");
    setDescricao("");
    setTipoSelecionado(null);
    setPoder(1);

    alert("Pokémon adicionado com sucesso!");
  };

  return (
    <div className="form-page">
      <div className="logo">
        <img src={logo} alt="Logo Pokémon" />
      </div>

      <div className="card">
        <h1>Adicione seu pokémon</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <label>Tipo</label>
          <div className="tipos">
            {tipos.map((t) => (
              <button
                key={t.nome}
                type="button"
                className={`tipo ${t.classe} ${
                  tipoSelecionado === t.nome ? "ativo" : ""
                }`}
                onClick={() => setTipoSelecionado(t.nome)}
              >
                {t.icone} {t.nome}
              </button>
            ))}
          </div>

          <label>Descrição</label>
          <textarea
            placeholder="Digite uma descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />

          <label>Poder</label>
          <div className="poder">
            <button
              type="button"
              onClick={() => setPoder(poder + 1)}
              className="mais"
            >
              +
            </button>
            <p>{poder}</p>
            <button
              type="button"
              onClick={() => setPoder(poder > 1 ? poder - 1 : 1)}
              className="menos"
            >
              -
            </button>
          </div>

          <button type="submit" className="btn-add">
            Adicionar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forms;
