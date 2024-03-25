import { useState } from 'react';
import { Widget } from '@uploadcare/react-widget'
import postSize from '/public/assets/post_size.js'
import { useDispatch } from "react-redux";
import { fetchAddPosts, fetchPosts } from "../store/postsSlice";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './style/formControl.css'


const MessageForm = () => {
    const [activeForm, setActiveForm] = useState(false)
    const [message, setMessage] = useState('')
    const [percentage, setPercentage] = useState(0)
    const [image, setImage] = useState('')

    const dispatch = useDispatch()

    function handleActive() {
        setActiveForm(true)
    }

    function handleAddMessage(event) {
        setMessage(event.target.value);
        setPercentage(postSize(event.target.value))
    }

    async function handleSendMessage(e) {
        e.preventDefault()
        const response = await dispatch(fetchAddPosts({ message: message, image: image }))
        await dispatch(fetchPosts())

        if (response.payload.status === 200) {
            setMessage('')
            setImage('')
            setPercentage(0)
        } else {
            alert(response.payload.error)
        }

    }

    return <>
        <form className="message-form" onSubmit={handleSendMessage}>
            <div className="what-new" onClick={handleActive} >
                <label htmlFor='message' className='question-message'>Что нового Александр..?</label>
            </div>

            <div className={activeForm ? "message-form-control active" : "message-form-control"} >
                <textarea
                    type="text"
                    placeholder="Сообщение"
                    value={message}
                    onChange={handleAddMessage}

                />

                <div className="message-form-control-wrapper">
                    <Widget onChange={(info) => setImage(info.cdnUrl)} />
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