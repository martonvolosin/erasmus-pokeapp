/**
 * This contains info about only one pokemon on the first page in the pokemon table.
 */
import './Pokemon.css';

function Pokemon(props) {

    let line = 'pokeLineBlue';
    let statusText = '-';
    if(props.pokemon.status) {
        line = 'pokeLine';
        statusText = 'Caught';
    }

    return(
        <div className='poke'>
            <table className={line}>
                <tr onClick={() => props.info(props.pokemon.pokemon.url)}>
                    <td className='big'>{props.pokemon.pokemon.name}</td>
                    <td className='big'>{props.pokemon.type}</td>
                    <td>{statusText}</td>
                </tr>
            </table>
        </div>
    );
};
   
export default Pokemon;