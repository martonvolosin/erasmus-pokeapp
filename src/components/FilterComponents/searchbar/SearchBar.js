/**
 * This SearchBar will be used for searching pokemons by name etc.
 */
 import './SearchBar.css';
 
 const SearchBar = () => {
     return (
         <form action="/" method="get" className="leftAlign">
             <label htmlFor="header-search">
                 <span className="hidden"></span>
            </label>
            <input type="text" id="header-search" placeholder="Search the pokemons" name="s"/>
            
         </form>
     ); 
 };
 export default SearchBar;