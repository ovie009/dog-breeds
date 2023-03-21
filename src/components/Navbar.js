import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../assets/logo/dog-logo.png';
import '../css/Navbar.css';

const Navbar = () => {

    // get the current page location
    const location = useLocation();

    // check the 
    useEffect(() => {
        // if user is in search page add a className of "search_page_active" to nav element
        if (location.pathname === '/search') {
            document.querySelector('nav').classList.add('search_page_active');
        } else {
            document.querySelector('nav').classList.remove('search_page_active');
        }
        // search_page_active changes the nav from a position opf absolute to unset and also the text color
    }, [location]);

    return (
        <nav>
            <Link className='nav_link' to="/">
                <img src={logo} alt="golden retriever logo" />
                <span className='logo_text'>Pawsitively Awesome</span>
            </Link>
            <Link className='nav_link' to="/search">search</Link> 
        </nav>
    );
}
 
export default Navbar;