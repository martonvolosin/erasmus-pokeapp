/**
 * First Page
 */
 import React, {useState} from 'react';
 import CheckBox from '../../components/FilterComponents/checkbox/CheckBox';
 import './HomePage.css'


  function HomePage() {

      function collectCheck(checked) {

          console.log(checked);
      }

      return (
          <div className='page'>
              <div className='left'>
                  <CheckBox press={collectCheck}/> 
              </div>
          </div>
     );
  }

  export default HomePage;
