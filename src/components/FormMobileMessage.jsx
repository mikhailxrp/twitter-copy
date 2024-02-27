import "./style/footer.css"
import { useState } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import { Widget } from '@uploadcare/react-widget'
// import camera from '../img/topics/camera.svg'

const percentage = 200;

const FormMobileMessage = () => {
const [image, setImage] = useState('')

    return <>
     <form className="message-form-mobile">
        <div className="form-mobile-divider"></div>
        <div className="form-control-mobile">
            <input type="text" placeholder="Сообщение" id='message'/>
        </div>
        <div className='progress-wrapper-mobile'>
            {/* <button type='button' className="message-form-img">
                <img src={camera} alt="" />
            </button> */}
            <Widget onChange={(info) => setImage(info)}/>
            <div className='progress-box'> 
                <CircularProgressbar value={percentage} maxValue={330} text={`.cdnUrl${percentage}`} />
            </div>
            <button className="btn btn-form-message-mobile ">Отправить</button>
        </div>
    </form>
    </>
}

export default FormMobileMessage