import './style/footerMenu.css'
import Home from '../img/menu/home.svg'
import Profile from '../img/menu/profile.svg'
import Settings from '../img/menu/settings.svg'

const FooterMenu = () => {
    return <>
        <nav className="footer-nav">
            <a href="#" className='footer-nav-link active'>
                <img src={Home} alt="" />
            </a>
            <a href="#" className='footer-nav-link '>
                <img src={Profile} alt="" />  
            </a>
            <a href="#" className='footer-nav-link '>
                <img src={Settings} alt="" />
            </a>
        </nav>
        
    </>
}

export default FooterMenu