/**
 * Main header of the both pages. Should contain Pokemon logo and some text.
 */
import './Header.css'
import logo from '../../../images/logo.png';

function Header() {

    return (
        <div className='wrap'>
            <img src={logo} className='logo'></img>
            <a href='https://pokeapi.co/docs/v2' className='document'>PokeApi Documentation</a>
        </div>
    );
};

export default Header;