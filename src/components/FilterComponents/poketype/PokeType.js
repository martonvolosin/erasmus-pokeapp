/**
 * This dropdown filtres different types of pokemons.
 */
 import './PokeType.css';
 
 function PokeType (props) {
 
     function typeSelect(event) {
 
         props.typeChange(event.target.value);
     };
 
     return (
     <div className="dropdown">
         <br />
         <p>Pokemon types</p>
         <select className="something" value={props.selected} onChange={typeSelect}>
             <option value='All'>All types</option>
             <option value='Water'>Water</option>
             <option value='Air'>Air</option>
             <option value='Earth'>Earth</option>
             <option value='Fire'>Fire</option>
         </select>
         </div>
     ); 
 };
 export default PokeType;