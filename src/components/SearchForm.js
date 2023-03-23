import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../css/SearchForm.css';


const SearchForm = ({query, submitQuery}) => {

    const location = useLocation();

    const [emptyFields, setEmptyFields] = useState(false);

    const [searchValue, setSearchValue] = useState(() => {
        if (query === null) {
            query = '';
        }
        return query;
    });

    const handleSubmit = (event) => {
        if (location.pathname === '/search') {
            event.preventDefault();
            submitQuery(searchValue);
            console.log('here');
        }
        
        if (location.pathname === '/' && searchValue === '') {
            event.preventDefault();
            setEmptyFields(true);
        }
    }

    const handleSearchValue = (event) => {
        setEmptyFields(false);
        setSearchValue(event.target.value);
    }

    return (
        <form method='get' action='/search' className='search_form'  onSubmit={event => handleSubmit(event)}>
            <input 
                type="search" 
                name="query" 
                value={searchValue}
                onChange={event => handleSearchValue(event)}  
                id="search" 
                placeholder='search for a dog breed'
                className={emptyFields ? 'empty_fields' : ''}
            />
            <button type="submit">search</button>
        </form>
    );
}
 
export default SearchForm;