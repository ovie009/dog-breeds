import '../css/Search.css';
import SearchForm from '../components/SearchForm';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Card from '../components/Card';
import DogInfo from '../components/DogInfo';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3eaff5cffamsh4ba388021f1a09fp1e51a6jsn32bda4a29cf0',
        'X-RapidAPI-Host': 'dogs-by-api-ninjas.p.rapidapi.com'
    }
};

const Search = ({displayDogInfo, setDisplayDogInfo}) => {

    // variable to store the dog data retreived from the API
    const [data, setData] = useState([]);
    const { search } = useLocation();
    // state varaible to get the get request parameters from the link
    const params = new URLSearchParams(search);
    // state variable to store the search query
    const [query, setQuery] = useState(() => {
        return params.get('query');
    });

    const [offset, setOffset] = useState(0);
    
    // state array to store the information about a selected dog
    const [selectedDog, setSelectedDog] = useState([]);

    
    useEffect(() => {
        fetch('https://dogs-by-api-ninjas.p.rapidapi.com/v1/dogs?name='+query+'&offset='+offset, options)
        .then(response => response.json())
        .then(data => setData(data));
    }, [query, offset]); // if query changes update the data from the api

    // function to update the query when the search button is clicked
    const submitQuery = (query) => {
        // Set the 'query' parameter to 'new value'
        params.set('query', query);
        // Update the URL with the new query string
        window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
       
        // set offset back to default value
        setOffset(0);
       
        // Update the state with the new query value
        setQuery(params.get('query'));
    }

    const [scrollHeight, setScrollHeight] = useState(20);
    const handleDogInfo = (dogName) => {

        setDisplayDogInfo(true);
        setSelectedDog(() => {
            return data.filter(dog => dog.name === dogName);
        })

    }

    const handleBackToSearch = (targetScrollHeight) => {
        setDisplayDogInfo(false);
        console.log(targetScrollHeight);
        setTimeout(() => {
            window.scrollTo({
                top: targetScrollHeight,
                behavior: 'smooth'
            });
        }, 50);
    }
    // console.log(scrollHeight);
    // console.log(selectedDog);
    // console.log(data);

    const showLess = () => {
        setOffset(prevOffset => {
            return prevOffset - 20;
        });
    }

    const showMore = () => {
        
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 50);

        setOffset(prevOffset => {
            return prevOffset + 20;
        });
    }

    return (
        <div className='search_page'>
            {
                displayDogInfo ?
                (
                    <DogInfo selectedDog={selectedDog} scrollHeight={scrollHeight} handleBackToSearch={handleBackToSearch} />
                ) : (
                    <>
                        {/* sending the query and sumbitQuery function to the SearchForm component */}
                        {/* the query prop is used to autofill the search input */}
                        {/* the setQuery prop is used to update the query state and query value in the link parameters */}
                        <SearchForm query={query} submitQuery={submitQuery} />
                        <div className="search_results_container">
                            {/* display a list of all the dogs from the fetch request */}
                            {
                                data.map(dog => (<Card key={dog.name} cardHeading={dog.name} cardParagraph={null} cardImage={dog.image_link} handleDogInfo={handleDogInfo} setScrollHeight={setScrollHeight}/>))
                            }

                            {/* if no result, notify user */}
                            { data.length === 0 && <span className='no_results'>No results found</span> }
                            
                            { (data.length >= 20 || offset > 0) && <div className='offset_buttons_wrapper'>
                                <button 
                                    type='button' 
                                    onClick={showLess} 
                                    className='show_less'
                                    style={{
                                        visibility: `${offset === 0 ? 'hidden' : 'visible'}`
                                    }}
                                >
                                    prev page
                                    </button>
                                <button 
                                    type='button' 
                                    onClick={showMore} 
                                    className="show_more"
                                    style={{
                                        visibility: `${data.length < 20 ? 'hidden' : 'visible'}`
                                    }}
                                >
                                    next page
                                </button>
                            </div> }

                        </div>
                    </>
                )
            }
        </div>
    );
}
 
export default Search;