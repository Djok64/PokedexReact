import React from 'react';


const Navbar =({setPokemonIndex, pokemonIndex, pokemonList}) => {

    const previousClick = () => setPokemonIndex(pokemonIndex - 1 );
    const nextClick = () => setPokemonIndex(pokemonIndex + 1);

    return ( 

        <div>
    {pokemonIndex > 0 ? (
        <input type="button" value="Précédent" onClick={previousClick}/>
         ): null }
         {pokemonIndex < pokemonList.length - 1 ? (
        <input type="button" value="Suivant" onClick={nextClick}/> 
         ) : null } 
         </div>
         );
};

export default Navbar ;