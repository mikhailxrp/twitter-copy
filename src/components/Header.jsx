import logo from '../img/logo.svg'
import logoWhite from '../img/logo-white.svg'
import userAvatar from '../img/no-avatar.png'
import HeaderMenu from './HeaderMenu'
import { useSelector } from 'react-redux'


const Header = () => {
    const user = useSelector(state => state.user)
    return <>

        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <HeaderMenu />
                    <a href='#' className="header-logo">
                        <img src={logo} alt="" className='header-logo-full' />
                        <img src={logoWhite} alt="" className='header-logo-mobile' />
                    </a>
                    <div className="header-user-avatar">
                        <img src={user.user_avatar !== '' ? user.user_avatar : userAvatar} alt="" />
                    </div>
                </div>
            </div>

        </header>
    </>
}

export default Header