import '../css/SearchForm.css';

const SearchForm = () => {
    return (
        <form className='search_form'>
            <input type="search" name="search" id="search" placeholder='search for a dog breed'/>
            <button type="button">search</button>
        </form>
    );
}
 
export default SearchForm;