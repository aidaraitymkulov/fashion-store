import icon1 from '../pictures/search HEART shopping-cart.png'
import logo from '../pictures/YOUR LOGO.svg'

export const Header = () => {
    return(
        <header className="header" id="header">
        <div className="container">
            <img src={logo} alt="" />
            <nav className="header__menu">
                <a href="#" className="header__link">HOME</a>
                <a href="#" className="header__link">SHOP</a>
                <a href="#" className="header__link">LOOKBOOK</a>
                <a href="#" className="header__link">FEATURES</a>
                <a href="#" className="header__link">PAGES</a>
                <a href="#" className="header__link">BLOG</a>
            </nav>
            <img src={icon1} alt="" />
        </div>
    </header>
    )
};