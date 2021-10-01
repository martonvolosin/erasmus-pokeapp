/**
 * First Page
 */
import React, {useState} from 'react';
import CheckBox from '../../components/FilterComponents/checkbox/CheckBox';
import PokeType from '../../components/FilterComponents/poketype/PokeType';
import './HomePage.css'
import ListHeader from '../../components/PokeList/listheader/ListHeader';
import List from '../../components/PokeList/List/List';


function HomePage(props) {

    const [filterType, setFilterType] = useState('All');
 
    function typeFilter(selectedType) {
 
        setFilterType(selectedType);
        props.load(selectedType);
    };

    function detailsPoke(url) {
        props.info(url)
    }
 
    function collectCheck(checked) {

        console.log(checked);
    };

    return (
        <div className='page'>
            <div className='left'>
                <PokeType typeChange={typeFilter} selected={filterType}/>
                <CheckBox press={collectCheck}/> 
            </div>
            <div>
                <ListHeader />
                <List pokemon={props.pokemon} info={detailsPoke}/>
            </div>
        </div>
    );
};

export default HomePage;
