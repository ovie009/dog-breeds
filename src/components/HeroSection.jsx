import '../css/HeroSection.css';
import SearchForm from './SearchForm';

const HeroSection = () => {

    const query = '';

    return (
        <div className="hero_section">
            <div className="hero_banner">
                <h1>Discover the wonderful world of dogs!</h1>
                <p>Everything you need to know about mans best friend</p>
                <SearchForm query={query} />
            </div>
        </div>
    );
}
 
export default HeroSection;