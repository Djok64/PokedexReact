import React, { useEffect } from 'react';


const Navbar =({setPokemonIndex, pokemonIndex, pokemonList}) => {

    const previousClick = () => {setPokemonIndex(pokemonIndex - 1 )};
    const nextClick = () => {setPokemonIndex(pokemonIndex + 1)};  //nous pouvons faire apparaitre l'alert sans use effect comme ceci  avec une instruction conditionnel  (ecriture ternaire ... ? ():() )
        // pokemonList[pokemonIndex+1].name ==="pikachu" ? (
        //  alert ("pika pikachu!!!")
        //         ) : null}

// nous pouvons aussi le faire avec le useEffect comme ceci en lui donnant quand meme une isntruction conditionnel avec lecriture ternaire
    useEffect( () => { 
         (pokemonList[pokemonIndex].name === 'pikachu') ? ( 
            alert('pika pikachu!!!') ) : ( null );
          
        }, [pokemonIndex, pokemonList]);

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