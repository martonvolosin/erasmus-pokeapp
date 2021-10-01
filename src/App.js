import Header from './components/UI/header/Header';
import './App.css';
import HomePage from './screens/HomePage/HomePage';
import React, {useState} from 'react';

let pokemons = [];

function App() {

  const [pokemon, setPokemon] = useState(pokemons);

  function loadPoke(type) {
    let url = '';
    switch(type){
      case 'Fire': url='https://pokeapi.co/api/v2/type/10';
      break;
      case 'Water': url='https://pokeapi.co/api/v2/type/11';
      break;
      case 'Ice': url='https://pokeapi.co/api/v2/type/15';
      break;
      case 'Grass': url='https://pokeapi.co/api/v2/type/12';
      break;
    }
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const transformedPokeArray = data.pokemon.map((poke) => {
    return {
      ...poke,
      status: false,
      type: type,
      id: Math.random().toString()
    }
  });
  setPokemon(transformedPokeArray);
  });
}

  return (
    <div>
      <Header /> 
      <HomePage pokemon={pokemon} load={loadPoke}/>
    </div>
  );
};

export default App;
