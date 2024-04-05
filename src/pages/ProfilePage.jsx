import React from 'react';
import MessageLogic from '../components/MessageLogic';
import Profile from '../components/Profile';
import AsideTopics from '../components/AsideTopics'
import TopicPopular from '../components/TopicPopular'


const Peofile = () => {
    return (
        <div className='profile-page'>
            <div className="container">

                <div className='content-wrapper profile'>
                    <div className="content-block">
                        <Profile />
                        <div className="message-wrapper">
                            <MessageLogic />
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