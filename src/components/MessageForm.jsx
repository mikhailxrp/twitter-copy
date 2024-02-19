import { useState} from 'react';
import postSize from '/public/assets/post_size.js'
import request from '/public/assets/api/api.js'
import camera from '../img/topics/camera.svg'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './style/formControl.css'



const MessageForm = () => {
    const [activeForm, setActiveForm] = useState(false)
    const [message, setMessage] = useState('')
    const [percentage, setPercentage] = useState(0)

    function handleActive(){
        setActiveForm(true)
    }

    function handleAddMessage(event){ 
        setMessage(event.target.value);
        setPercentage(postSize(event.target.value))
    }

   async function handleSendMessage(e){
        e.preventDefault()

        const response = await request('/api/server/newpost', 'POST', {message: message})

        if(response.status === 200){
            setMessage('')
            setPercentage(0)
        }else{
            alert(response.error)
        }
    
    }

    return <>
    <form className="message-form" onSubmit={handleSendMessage}>
        <div className="what-new" onClick={handleActive} >
            <label htmlFor='message' className='question-message'>Что нового Александр..?</label>
        </div>

        <div className={activeForm ? "message-form-control active" :"message-form-control"} >
            <textarea 
                type="text" 
                placeholder="Сообщение" 
                id='message' 
                value={message} 
                onChange={handleAddMessage} 

            />

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