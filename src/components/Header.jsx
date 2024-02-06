import logo from '../img/logo.svg'
import logoWhite from '../img/logo-white.svg'
import user from '../img/user-img1.png'
import HeaderMenu from './HeaderMenu'

const Header = ()=>{
    return <>
    
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                <HeaderMenu/>
            <a href='#' className="header-logo">
                <img src={logo} alt="" className='header-logo-full'/>
                <img src={logoWhite} alt="" className='header-logo-mobile'/>
            </a>
            <div className="header-user-avatar">
                <img src={user} alt="" />
            </div>
                </div>
            </div>
           
        </header>
    </>
}

export default Header