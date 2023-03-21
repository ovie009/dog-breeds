import { useState } from 'react';
import '../css/SearchForm.css';


const SearchForm = ({query}) => {

    const [searchValue, setSerachValue] = useState(() => {
        if (query === null) {
            query = '';
        }
        return query;
    });

    // console.log(searchValue);

    return (
        <form method='get' action='/search' className='search_form'>
            <input 
                type="search" 
                name="query" 
                value={searchValue}
                onChange={(event) => setSerachValue(event.target.value)}  
                id="search" 
                placeholder='search for a dog breed'
            />
            <button type="submit">search</button>
        </form>
    );
}
 
export default SearchForm;