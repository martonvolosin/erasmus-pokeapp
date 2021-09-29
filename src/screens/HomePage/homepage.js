/**
 * First Page
 */
 import CheckBox from '../../components/FilterComponents/checkbox/CheckBox';
import PokeType from '../../components/FilterComponents/poketype/PokeType';
 import './HomePage.css'
 
 
 function HomePage() {
 
     function collectCheck(checked) {
 
         console.log(checked);
     }
 
     return (
         <div className='page'>
             <div className='left'>
             <PokeType/>
                 <CheckBox press={collectCheck}/> 
                 
             </div>
         </div>
    );
 }
 
 export default HomePage;