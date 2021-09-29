/**
 * 
 */
 import './PokeType.css';
 
 function PokeType () {
     return (
     <div className="dropdown">
         <br />
         <p>Pokemon types</p>
         <select className="something" value='All'>
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