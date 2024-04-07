import Home from '../img/menu/home.svg'
import Profile from '../img/menu/profile.svg'
import Settings from '../img/menu/settings.svg'
import { Link, NavLink } from 'react-router-dom'

const HeaderMenu = () => {
    return <>
        <nav className="header-nav">
            <NavLink to={'/feed'} className='header-nav-link '>
                <img src={Home} alt="" />
                <span>Лента</span>
            </NavLink>
            <NavLink to={'/profile'} className='header-nav-link'>
                <img src={Profile} alt="" />
                <span>Профиль</span>
            </NavLink>
            <NavLink to={'/settigs'} className='header-nav-link'>
                <img src={Settings} alt="" />
                <span>Настройки</span>
            </NavLink>
        </nav>
    </>
}

export default HeaderMenu