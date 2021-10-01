/**
 * List of pokemons
 */
import Pokemon from '../pokemon/Pokemon';
import './List.css';

function List(props) {

    function detailsPoke(url) {
        props.info(url);
    }

    return(
        <ul className='pokeList'>
            {props.pokemon.map(poke => 
            <Pokemon pokemon={poke} key={poke.id} info={detailsPoke}/>)}
        </ul>
    );
};
  
export default List;