import PokemonCard from "./components/PokemonCard";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";

const pokemonList = [
  {
    id: 0,
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    id: 1,
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    id: 2,
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    id: 3,
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    id: 4,
    name: "mew",
  },
];

const App = () => {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <>
      <div className="navbar">
        <Navbar
          pokemonIndex={pokemonIndex}
          setPokemonIndex={setPokemonIndex}
          pokemonList={pokemonList}
          pokemon={pokemonList[pokemonIndex]}
        />
      </div>

      <div className="pokemoncard">
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
    </>
  );
};

export default App;
