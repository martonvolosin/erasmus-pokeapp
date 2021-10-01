/**
 * List of pokemons
 */
import Pokemon from '../pokemon/Pokemon';
import './List.css';

function List(props) {

    return(
        <ul className='pokeList'>
            {props.pokemon.map(poke => 
            <Pokemon pokemon={poke} key={poke.id}/>)}
        </ul>
    );
};
  
export default List;