import logo from '../assets/logo/dog-logo.png';
import '../css/Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <img src={logo} alt="golden retriever logo" />
            <h2>Pawsitively Awesome</h2>
        </nav>
    );
}
 
export default Navbar;