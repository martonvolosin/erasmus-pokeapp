/**
 * This is an action button, that will trigger Catch or Release option for pokemons.
 */
import './ActionButton.css'

let text = 'Catch';

function ActionButton() {

    return (
        <>
        <button className='actionBlue'>{text}</button>
        </>
    );
}

export default ActionButton;