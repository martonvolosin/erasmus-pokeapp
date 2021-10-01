import Header from './components/UI/header/Header';
import './App.css';
import HomePage from './screens/HomePage/HomePage';
import React, {useState} from 'react';
import { Router, Route, Switch, useHistory} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Details from './screens/Details/details';

let pokemons = [];
const history = createBrowserHistory();

function App() {

  const [pokemon, setPokemon] = useState(pokemons);

  const [passUrl, setPassUrl] = useState();

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

  function loadDetails(url){
    console.log('At App.js with ' + url);
    history.push('/details');
    setPassUrl(url);
  }
  function loadBack() {
    history.push('/');
  }

  return (
    <Router history={history}> 
      <Header /> 
      <Switch>
        <Route exact path='/details'>
          <Details url={passUrl} back={loadBack}></Details>
        </Route>
        <Route exact path='/'>
          <HomePage pokemon={pokemon} load={loadPoke} info={loadDetails}/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
