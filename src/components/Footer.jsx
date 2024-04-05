import "./style/footer.css"
import { useState } from "react";
import FooterMenu from "./FooterMenu"
import 'react-circular-progressbar/dist/styles.css';
import userAvatar from '../img/no-avatar.png'
import feather from '../img/feather.svg'
import FormMobileMessage from "./FormMobileMessage";
import { useSelector } from 'react-redux'


const Footer = () => {
    const [activeForm, setActiveForm] = useState(false)
    const user = useSelector(state => state.user)

    const writeNewMessage = () => {
        setActiveForm(true)
    }

    const closeMessageForm = () => {
        setActiveForm(false)
    }

    return <>
        <div className="footer">
            <FooterMenu />
            <div className="footer-user-avatar">
                <img src={!user.user_avatar && userAvatar} alt="" />
            </div>
            <div className="new-message">
                <button className="btn btn-new-message" onClick={writeNewMessage}>
                    <img src={feather} alt="" />
                </button>
            </div>
        </div>

        <FormMobileMessage activeForm={activeForm} closeForm={closeMessageForm} />
    </>
}

export default Footer