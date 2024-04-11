import './style/footerMenu.css'
import Home from '../img/menu/home.svg'
import Profile from '../img/menu/profile.svg'
import Settings from '../img/menu/settings.svg'
import { Link, NavLink } from 'react-router-dom'

const FooterMenu = () => {
    return <>
        <nav className="footer-nav">
            <NavLink to={'/feed'} className='nav-link'>
                <img src={Home} alt="" />
            </NavLink>
            <NavLink to={'/profile'} className='nav-link '>
                <img src={Profile} alt="" />
            </NavLink>
            <NavLink to={'/settings/profile'} className='nav-link '>
                <img src={Settings} alt="" />
            </NavLink>
        </nav>

    </>
}

export default FooterMenu