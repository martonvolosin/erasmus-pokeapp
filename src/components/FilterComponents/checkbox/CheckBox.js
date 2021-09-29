/**
 * This CheckBox will be used for showing only caught pokemons on the first page.
 */ 

 import './CheckBox.css';


 function CheckBox (props) {
 
     function checked(event) {
 
         props.press(event.target.checked);
     };
 
     return (
         <div>
             <br/>
             <input type ="checkbox" className='check' onChange={checked}/>
             Only show caught pokemons!
         </div>
     );
 }
 
 export default CheckBox;