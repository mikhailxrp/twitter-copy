import React, { useState, useEffect } from 'react';
import MessageLogic from '../components/MessageLogic';
import Profile from '../components/Profile';
import AsideTopics from '../components/AsideTopics'
import TopicPopular from '../components/TopicPopular'
import PreloaderComponent from '../components/PreloadComponent'

import { useSelector, useDispatch } from 'react-redux';
import { getUserPosts } from '../store/userSlice'


const Peofile = () => {
    const user = useSelector(state => state.user)
    const [userPosts, setUsersPosts] = useState([])
    const [userProfile, setUserProfile] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        if (user.id) {
            dispatch(getUserPosts(user.id)).then(res => {
                setUsersPosts(res.payload)
            })
            setUserProfile([{ ...user }])
        }
    }, [user.id])
    return (
        <div className='profile-page'>
            <div className="container">

                <div className='content-wrapper profile'>
                    <div className="content-block">
                        <Profile />
                        <div className="message-wrapper">
                            {userPosts.length === 0 & user !== null ? <PreloaderComponent /> : <MessageLogic posts={userPosts} users={userProfile} />}
                        </div>
                    </div>
                    <div className="aside-block">
                        <AsideTopics />
                        <TopicPopular />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Peofile;