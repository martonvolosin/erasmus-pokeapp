/**
 * Second page 
 */

import './details.css'

const text = '<- Back to search'

function Details(props) {

    console.log(props.url);
    return(
        <div className='page'>
            <div className='left'>
                <a onClick={props.back} href=''>{text}</a>
            </div>
        </div>
    );
}

export default Details;