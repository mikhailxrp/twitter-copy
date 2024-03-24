import "./style/footer.css"
import { useState } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import { Widget } from '@uploadcare/react-widget'
import { useDispatch} from "react-redux";
// import { fetchAddPosts, fetchPosts } from "../store/postsSlice";


const FormMobileMessage = ({activeForm, closeForm}) => {
    const [percentage, setPercentage] = useState(0)
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const createNewMessage = (event) => {
        setMessage(event.target.value)
        setPercentage(event.target.value.length)
    }

    // Отправка сообщения
    const submitMessage = async (event) => {
        event.preventDefault()

        // const response = await dispatch(fetchAddPosts({message: message, image: image}))
        await dispatch(fetchPosts())

        if(response.payload.status === 200){
            setMessage('')
            setPercentage(0)
            closeForm()
        }else {
            alert(response.payload.error)
        }
        
        
    }

    // касание формы
    let y1 = null;
    const touchStart = (event) => {
        const firstTouch = event.touches[0];
        y1 = firstTouch.clientY;
        
    }

    // Движение вниз
    const momeScreen = (event) => {
        if (!y1) {
            return false;
        }
        let y2 = event.touches[0].clientY;

        let yDiff = y2 - y1;

        if(Math.abs(yDiff)){
            if(yDiff > 0){
                closeForm()
            }
        }

        y1 = null;
    }
    
    return <>
     <form 
        className={activeForm ? "message-form-mobile active" : "message-form-mobile"}
        onTouchStart={touchStart}
        onTouchMove={momeScreen}
        onSubmit={submitMessage}
     >
        <div className="form-mobile-divider"></div>
        <div className="form-control-mobile">
            <input 
                type="text" 
                placeholder="Сообщение" 
                name="message"
                value={message}
                onChange={createNewMessage}
            />
        </div>
        <div className='progress-wrapper-mobile'>
            <Widget onChange={(info) => setImage(info)}/>
            <div className='progress-box'> 
                <CircularProgressbar value={percentage} maxValue={330} text={`${percentage}`} />
            </div>
            <button className="btn btn-form-message-mobile ">Отправить</button>
        </div>
    </form>
    </>
}

export default FormMobileMessage