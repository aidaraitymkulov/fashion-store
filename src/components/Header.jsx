import icon1 from '../pictures/search HEART shopping-cart.png'
import logo from '../pictures/YOUR LOGO.svg'
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return(
        <header className="header" id="header">
        <div className="container">
            <img src={logo} alt="" />
            <nav className="header__menu">
                <NavLink to="/" className="header__link">HOME</NavLink>
                <NavLink to="/Shop" className="header__link">SHOP</NavLink>
                <NavLink to="/LookBook" className="header__link">LOOKBOOK</NavLink>
                <NavLink to="/Features" className="header__link">FEATURES</NavLink>
                <NavLink to="/Pages" className="header__link">PAGES</NavLink>
                <NavLink to="/Blog" className="header__link">BLOG</NavLink>
            </nav>
            <img src={icon1} alt="" />
        </div>
    </header>
    )
};