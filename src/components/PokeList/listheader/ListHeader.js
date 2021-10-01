/**
 * This header contains names of titles of different informations about pokemons on the first page.
 */
import './ListHeader.css';

function ListHeader() {
 
    return(
        <table className='head'>
            <tr>
                <td>Name</td>
                <td>Type</td>
                <td>Status</td>
            </tr>
        </table>
    );
};
 
export default ListHeader;