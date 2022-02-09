import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(r => r.json())
    .then(pokemonsF => setPokemons(pokemonsF))
  },[])

  function updatetPokemonsBasedOnSearchFilter(searchValue) {
    fetch('http://localhost:3001/pokemon')
    .then(r => r.json())
    .then(originalArr => {
      const filteredArr = originalArr.filter(pokemon => pokemon.name.startsWith(searchValue))
      setPokemons(filteredArr)
    })
  }

  function postingPokemonFromChild(newPokemonObj) {
    console.log(newPokemonObj)
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPokemonObj)
    })
    .then(r => r.json())
    .then(newPokemonObjF => setPokemons([newPokemonObjF, ...pokemons]))
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm postingPokemonFromChild={postingPokemonFromChild}/>
      <br />
      <Search updatetPokemonsBasedOnSearchFilter={updatetPokemonsBasedOnSearchFilter}/>
      <br />
      <PokemonCollection pokemons={pokemons}/>
    </Container>
  );
}

export default PokemonPage;
