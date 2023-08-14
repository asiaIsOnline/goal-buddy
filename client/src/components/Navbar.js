import { Link } from 'react-router-dom'
import NavbarCSS from '../modules/component_modules/Navbar.module.css';

const Navbar = () => {
    return (
        <div className={NavbarCSS.navContainer}>
            <nav>
                <Link to="/">
                    Goal Buddy
                </Link>
            </nav>
        </div>
    )
}

export default Navbar;