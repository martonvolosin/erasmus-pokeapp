/**
 * First Page
 */
 import React, {useState} from 'react';
 import CheckBox from '../../components/FilterComponents/checkbox/CheckBox';
 import PokeType from '../../components/FilterComponents/poketype/PokeType';
 import './HomePage.css'


  function HomePage() {

     const [filterType, setFilterType] = useState('All');

 
     function typeFilter(selectedType) {
 
         setFilterType(selectedType);
     };
 
      function collectCheck(checked) {

          console.log(checked);
      }

      return (
          <div className='page'>
              <div className='left'>
                  <PokeType typeChange={typeFilter} selected={filterType}/>
                  <CheckBox press={collectCheck}/> 
              </div>
          </div>
     );
  }

  export default HomePage;
