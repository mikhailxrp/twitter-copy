// import {  useState, useEffect } from "react"
import postTime from "/public/assets/post_time.js";
import MessageItem from "./MessageItem"
import Preloader from './PreloadComponent'
// import { useSelector } from 'react-redux';


const MessageLogic = ({ posts, users, usersStatus, status }) => {

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
        // Object.assign({...postItem},)
        postItem = {
            ...postItem,
            postTime: postTime(timeMessage)
        }
        if (users.length !== 0) {
            users.map(userItem => {
                if (postItem.user_id === userItem.id) {
                    if (userItem.user_avatar !== null) {
                        postItem = {
                            ...postItem,
                            avatar: userItem.user_avatar
                        }
                    } else {
                        postItem = {
                            ...postItem,
                            avatar: './img/first_page/no-avatar.png'
                        }
                    }
                    postItem = {
                        ...postItem,
                        user_name: userItem.user_name
                    }
                    postItem = {
                        ...postItem,
                        user_nikname: userItem.user_nikname,
                    }


                }
            })
        }


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
            {status === "Loading" && usersStatus === "Loading" && <Preloader />}
            {post}
        </div>
    </>
}

export default MessageLogic