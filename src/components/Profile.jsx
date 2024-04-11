import React from 'react';
import ProfileCount from './ProfileCount';
import MyButtonEdit from '../ui/button/MyButtonEdit';
import cover from '../img/profile/profile-cover-large.jpeg'
import userAvatar from '../img/no-avatar.png'
import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom';

import convertDate from '../helpers/dateConversion';

import date from '../img/profile/icon/date.svg'
import link from '../img/profile/icon/link.svg'
import geo from '../img/profile/icon/geo.svg'
import './style/profile.css'

const Profile = () => {
    const user = useSelector(state => state.user)
    const navigate = useNavigate()

    let birthDay = user.date_of_birth
    let userBirthDay = null

    if (birthDay) {
        userBirthDay = convertDate(birthDay)
    }


    return (
        <>
            <div className='profile'>
                <div className="profile-cover">
                    <img src={cover} alt="" />
                </div>
                <div className="profile-page-wrapper">
                    <div className="profile-user-img">
                        <img src={user.user_avatar !== '' ? user.user_avatar : userAvatar} alt="" />
                    </div>

                    <div className='profile-top-inner'>
                        <ProfileCount />
                        <MyButtonEdit
                            onClick={() => navigate('/settings/profile')}
                        >
                            Редактировать профиль
                        </MyButtonEdit>
                    </div>

                    <div className="profile-page-inner">
                        <div className='profile-inner-name'>
                            <div className="user-name">{user.user_name}</div>
                            <div className="user-nikname">{user.user_nikname}</div>
                        </div>

                        <div className="user-description">{user.user_about}</div>
                        <div className='user-wrapper-icon'>
                            <div className="user-inner-icon">
                                <div className="user-profile-icon">
                                    <img src={geo} alt="" />
                                </div>
                                <p className="user-icon-text">{user.user_location}</p>
                            </div>
                            <div className="user-inner-icon">
                                <div className="user-profile-icon">
                                    <img src={link} alt="" />

                                </div>
                                <p className="user-icon-text">{user.user_site}</p>
                            </div>
                            <div className="user-inner-icon">
                                <div className="user-profile-icon">
                                    <img src={date} alt="" />
                                </div>
                                <p className="user-icon-text">День рождения {userBirthDay}</p>
                            </div>
                        </div>
                    </div>
                    <div className='profile-buttom-inner'>
                        <ProfileCount />
                        <MyButtonEdit
                            onClick={() => navigate('/settings/profile')}
                        >
                            Редактировать профиль
                        </MyButtonEdit>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;