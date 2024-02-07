import "./style/footer.css"
import FooterMenu from "./FooterMenu"
import 'react-circular-progressbar/dist/styles.css';
import user from '../img/user-img1.png'
import feather from '../img/feather.svg'
import FormMobileMessage from "./FormMobileMessage";


const Footer = () => {
    return <>
        <div className="footer">
            <FooterMenu/>
            <div className="footer-user-avatar">
                <img src={user} alt="" />
            </div>
            <div className="new-message">
                <button className="btn btn-new-message">
                    <img src={feather} alt="" />
                </button>
            </div>
        </div>

        <FormMobileMessage/>
    </>
}

export default Footer