function PokemonCard() {
    const pokemon = pokemonList[1]; //prend le premier pokemon de pokemonList//
     return (// ce que j'avai penser ( pokemon.imgSrc === null )? <p>???</p>:(        la realité en dessous ....
         <figure>
            {pokemon.imgSrc != undefined ?(// on pourrais également écrire  a cette ligne {pokemon.imgSrc ?( qui revient a demander simplement si elle existe ou si elle est undefined  on verifie ce qui ne fontionne pas en premier
        <img
         src={pokemon.imgSrc}
         alt={pokemon.name}
         />  //si(if le point d'interogation l.5) il ya une pokemon.imgSrc (il affiche l'image  )
            ) : (  // les : correspondent a sinon  
                <p>???</p> //il affichera ceci 
            )}
            <figcaption>{pokemon.name}</figcaption>
    </figure>
    );
    
}

const pokemonList = [
    {
        name:"bulbasaur",
        imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];

export default PokemonCard;