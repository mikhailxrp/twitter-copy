import camera from '../img/topics/camera.svg'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 200;

const MessageForm = () => {
    
    return <>
    <form className="message-form">
        <div className="what-new">
            <label htmlFor='message' className='question-message'>Что нового Александр..?</label>
        </div>

        <div className="message-form-control">
            <input type="text" placeholder="Сообщение" id='message'/>
            <div className="message-form-control-wrapper">
                <button type='button' className="message-form-img">
                    <img src={camera} alt="" />
                </button>
               <div className='message-progress-wrapper'>
                    <div className='progress-box'> 
                        <CircularProgressbar value={percentage} maxValue={330} text={`${percentage}`} />
                    </div>
                    <button className="btn btn-form-message">Отправить</button>
               </div>
            </div>
        </div>
    </form>
    </>
}

export default MessageForm