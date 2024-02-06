import Home from '../img/menu/home.svg'
import Profile from '../img/menu/profile.svg'
import Settings from '../img/menu/settings.svg'

const HeaderMenu = () => {
    return <>
     <nav className="header-nav">
        <a href="#" className='header-nav-link active'>
            <img src={Home} alt="" />
            <span>Лента</span>
        </a>
        <a href="#" className='header-nav-link'>
            <img src={Profile} alt="" />
            <span>Профиль</span>
        </a>
        <a href="#" className='header-nav-link'>
            <img src={Settings} alt="" />
            <span>Настройки</span>
        </a>
    </nav>
    </>
}

export default HeaderMenu