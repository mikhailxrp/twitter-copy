import React from 'react';
import ProfileCount from './ProfileCount';
import MyButtonEdit from '../ui/button/MyButtonEdit';
import cover from '../img/profile/profile-cover-large.jpeg'
import userAvatar from '../img/no-avatar.png'
import { useSelector } from 'react-redux'
import './style/profile.css'

const Profile = () => {
    const user = useSelector(state => state.user)

    return (
        <>
            <div className='profile'>
                <div className="profile-cover">
                    <img src={cover} alt="" />
                </div>
                <div className="profile-page-wrapper">
                    <div className="profile-user-img">
                        <img src={!user.user_avatar && userAvatar} alt="" />
                    </div>

                    <div className='profile-top-inner'>
                        <ProfileCount />
                        <MyButtonEdit >Редактировать профиль</MyButtonEdit>
                    </div>

                    <div className="profile-page-inner">
                        <div className='profile-inner-name'>
                            <div className="user-name">{user.user_name}</div>
                            <div className="user-nikname">{user.user_nikname}</div>
                        </div>

                        <div className="user-description">Предприниматель и ментор по программированию</div>
                        <div className='user-wrapper-icon'>
                            <div className="user-inner-icon">
                                <div className="user-profile-icon">
                                    <svg width="9.000000" height="15.000000" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <desc>
                                            Created with Pixso.
                                        </desc>
                                        <defs />
                                        <path id="Vector" d="M4 6.5C2.89 6.5 2 5.6 2 4.5C2 3.39 2.89 2.5 4 2.5C5.1 2.5 6 3.39 6 4.5C6 5.6 5.1 6.5 4 6.5Z" stroke="#ABACB1" strokeOpacity="1.000000" strokeWidth="0.700000" strokeLinejoin="round" />
                                        <path id="Vector" d="M3.99 14C3.99 14 1.49 10 -3.06e-5 6.5C-1.51 3 0.99 0 3.99 0C6.99 0 9.49 3 7.99 6.5C6.49 10 3.99 14 3.99 14Z" stroke="#ABACB1" strokeOpacity="1.000000" strokeWidth="0.700000" strokeLinejoin="round" />
                                    </svg>

                                </div>
                                <p className="user-icon-text">Волгоград</p>
                            </div>
                            <div className="user-inner-icon">
                                <div className="user-profile-icon">
                                    <svg width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <desc>
                                            Created with Pixso.
                                        </desc>
                                        <defs />
                                        <path id="Vector" d="M14.76 1.23C13.97 0.43 12.91 0 11.78 0C10.66 0 9.6 0.43 8.81 1.23L5.48 4.55L6.19 5.25L9.51 1.93C10.12 1.32 10.92 0.99 11.78 0.99C12.64 0.99 13.45 1.32 14.06 1.93C14.67 2.54 15 3.35 15 4.21C15 5.07 14.67 5.87 14.06 6.48L10.74 9.8L11.44 10.51L14.76 7.18C15.56 6.39 16 5.33 16 4.21C16 3.08 15.56 2.02 14.76 1.23Z" fill="#ABACB1" fillOpacity="1.000000" fillRule="nonzero" />
                                        <path id="Vector" d="M6.48 14.06C5.87 14.67 5.07 15 4.21 15C3.35 15 2.54 14.67 1.93 14.06C1.32 13.45 0.99 12.64 0.99 11.78C0.99 10.92 1.32 10.12 1.93 9.51L5.25 6.19L4.55 5.48L1.23 8.81C0.43 9.6 0 10.66 0 11.78C0 12.91 0.43 13.97 1.23 14.76C2.02 15.56 3.08 16 4.21 16C5.33 16 6.39 15.56 7.18 14.76L10.51 11.44L9.8 10.74L6.48 14.06Z" fill="#ABACB1" fillOpacity="1.000000" fillRule="nonzero" />
                                        <path id="Vector" d="M10.62 4.67L11.32 5.37L5.37 11.32L4.67 10.62L10.62 4.67Z" fill="#ABACB1" fillOpacity="1.000000" fillRule="nonzero" />
                                    </svg>

                                </div>
                                <p className="user-icon-text">burtovoy.org</p>
                            </div>
                            <div className="user-inner-icon">
                                <div className="user-profile-icon">
                                    <svg width="15.000000" height="14.000000" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <desc>
                                            Created with Pixso.
                                        </desc>
                                        <defs />
                                        <path id="Vector" d="M0 13L14 13L14 1L0 1L0 13ZM14 5.5L0 5.5L14 5.5ZM2.5 2.5L2.5 -0.5L2.5 2.5ZM5.5 2.5L5.5 -0.5L5.5 2.5ZM8.5 2.5L8.5 -0.5L8.5 2.5ZM11.5 -0.5L11.5 " stroke="#ABACB1" strokeOpacity="1.000000" strokeWidth="0.750000" strokeLinejoin="round" strokeLinecap="round" />
                                    </svg>

                                </div>
                                <p className="user-icon-text">День рождения 16 апреля</p>
                            </div>
                        </div>
                    </div>
                    <div className='profile-buttom-inner'>
                        <ProfileCount />
                        <MyButtonEdit >Редактировать профиль</MyButtonEdit>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;