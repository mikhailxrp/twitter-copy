import "./style/footer.css"
import { useState } from "react";
import FooterMenu from "./FooterMenu"
import 'react-circular-progressbar/dist/styles.css';
import user from '../img/user-img1.png'
import feather from '../img/feather.svg'
import FormMobileMessage from "./FormMobileMessage";


const Footer = () => {
    const [activeForm, setActiveForm] = useState(false)

    const writeNewMessage = () =>{
        setActiveForm(true)
    }

    const closeMessageForm = () => {
        setActiveForm(false)
    }

    return <>
        <div className="footer">
            <FooterMenu/>
            <div className="footer-user-avatar">
                <img src={user} alt="" />
            </div>
            <div className="new-message">
                <button className="btn btn-new-message" onClick={writeNewMessage}>
                    <img src={feather} alt="" />
                </button>
            </div>
        </div>

        <FormMobileMessage activeForm={activeForm} closeForm={closeMessageForm}/>
    </>
}

export default Footer