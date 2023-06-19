import React from "react";

const Navbar = ({ setPokemonIndex, pokemonList }) => {
  const handleClick = (index) => {
    console.log("Le bouton a été cliqué !", index);
    setPokemonIndex(index);
  };

  return (
    <nav>
      <ul>
        {pokemonList.map((pokemon) => (
          <div key={pokemon.id}>
            <input
              type="button"
              value={pokemon.name}
              onClick={() => handleClick(pokemon.id)}
            />
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
