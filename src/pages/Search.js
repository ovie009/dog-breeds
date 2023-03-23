import '../css/Search.css';
import SearchForm from '../components/SearchForm';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Card from '../components/Card';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3eaff5cffamsh4ba388021f1a09fp1e51a6jsn32bda4a29cf0',
        'X-RapidAPI-Host': 'dogs-by-api-ninjas.p.rapidapi.com'
    }
};

const Search = () => {

    // const results = false;
    const [data, setData] = useState([]);
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const [query, setQuery] = useState(() => {
        return params.get('query');
    });
    
    useEffect(() => {
        fetch('https://dogs-by-api-ninjas.p.rapidapi.com/v1/dogs?name='+query, options)
        .then(response => response.json())
        .then(data => setData(data));
    }, [query]);

    const submitQuery = (query) => {

        // Set the 'query' parameter to 'new value'
        params.set('query', query);

        // Update the URL with the new query string
        window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);

        // Update the state with the new query value
        setQuery(params.get('query'));
    }

    // console.log(data);

    return (
        <div className='search_page'>
            <SearchForm query={query} submitQuery={submitQuery} />
            <div className="search_results_container">

                {
                    data.map(dog => (<Card key={dog.name} cardHeading={dog.name} cardParagraph={null} cardImage={dog.image_link} />))
                }

                { data.length === 0 && <span className='no_results'>No results found</span> }

            </div>
        </div>
    );
}
 
export default Search;