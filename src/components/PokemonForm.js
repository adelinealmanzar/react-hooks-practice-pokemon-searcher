import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({postingPokemonFromChild}) {
  const [newPokemon, setNewPokemon] = useState({
    name: '',
    hp: 0,
    sprites: {
      front: '',
      back: '',
    }
  })

  function handleFormSubmit(e) {
    e.preventDefault()
    postingPokemonFromChild(newPokemon)
  }

  function handleNameChange(e) {
    setNewPokemon(newPokemon => {return {...newPokemon, name: e.target.value}})
  }

  function handleHPChange(e) {
    setNewPokemon(newPokemon => {return {...newPokemon, hp: e.target.value}})
  }

  function handleFrontChange(e) {
    setNewPokemon(newPokemon => {return {...newPokemon, sprites: {front: e.target.value, back: newPokemon.sprites.back}}})
  }

  function handleBackChange(e) {
    setNewPokemon(newPokemon => {return {...newPokemon, sprites: {front: newPokemon.sprites.front, back: e.target.value}}})
  }
  


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <Form.Group widths="equal">
          <Form.Input
            fluid label="Name"
            placeholder="Name"
            name="name"
            value={newPokemon.name}
            onChange={(e) => handleNameChange(e)}
          />
          <Form.Input
            fluid label="hp"
            placeholder="hp"
            name="hp"
            value={newPokemon.hp}
            onChange={(e) => handleHPChange(e)}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newPokemon.sprites.front}
            onChange={(e) => handleFrontChange(e)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newPokemon.sprites.back}
            onChange={(e) => handleBackChange(e)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
