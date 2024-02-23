import {  useState, useEffect } from "react"
import postTime from "/public/assets/post_time.js";
import MessageItem from "./MessageItem"
import Preloader from './PreloadComponent'
const  MessageLogic = () =>  {
    
    const [posts, setMessages] = useState([])
    const [users, setUsers] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        fetch('/api/server/posts').then(res => res.json()).then(result => {
            setMessages(result)
            setLoading(true)     
        }) 
    }, [])
    
    useEffect(() => {
        fetch("/api/server/users").then(res => res.json()).then(result => {
            setUsers(result)
        })
    }, [])

    // расчет времени поста
    function getTimePost(date) {
        let now = Date.now();
        let messageDate = new Date(date).getTime();
    
        let newTime = now - messageDate;
        let timeMessage = newTime / (1000 * 60);
        return timeMessage;
    }

    const usersPost = []
    let timeMessage = null

    posts.map(postItem => {
        timeMessage = getTimePost(postItem.post_time);
        postItem.postTime = postTime(timeMessage);

        users.map(userItem => {
            
            if(postItem.user_id === userItem.id){
                if(userItem.user_avatar !== null){
                    postItem.avatar = userItem.user_avatar
                }else {
                    postItem.avatar = './img/first_page/no-avatar.png'
                }
                
                postItem.user_name =userItem.user_name
                postItem.user_nikname = userItem.user_nikname
                
            }
        })
        usersPost.push(postItem)
    })


    const post = usersPost.map(postItem => {
        return <MessageItem 
            key={postItem.post_id} 
            name={postItem.user_name} 
            text={postItem.post_text} 
            image={postItem.post_image}
            nikName={postItem.user_nikname}
            avatar={postItem.avatar}
            postTime={postItem.postTime}
            />
    })


    return <>
        <div className="message-wrapper"> 
            {isLoading && post}
            {!isLoading && <Preloader/>}
        </div>
    </>
}

export default MessageLogic