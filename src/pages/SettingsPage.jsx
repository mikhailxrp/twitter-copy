import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { saveUserSettings } from '../store/userSlice'
import { Widget } from '@uploadcare/react-widget'

import SettingsMenuTop from '../components/SettingsMenuTop';
import AsideMenuSettings from '../components/AsideMenuSettings';

import userAvatarStub from '../img/no-avatar.png'
import camera from '../img/camera.svg'

import TextInput from '../ui/input/TextInput';
import TextArea from '../ui/textarea/TextArea';
import MyButtonFill from '../ui/button/MyButtonFill';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

import './style/settings.css'

const SettingsPage = () => {
    const user = useSelector(state => state.user)
    const [newUser, setNewUser] = useState(user)
    const [avatar, setAvatar] = useState(user.user_avatar)
    const dispatch = useDispatch()

    const [select, setSelect] = useState('Показать всем')
    const [blur, setBlur] = useState(false)

    const handleBlur = (e) => {
        setBlur(!blur)
    }

    const handleChange = (e) => {
        setSelect(e.target.value)
    }

    const selectFile = (prop, str) => {
        setAvatar(str)
        setNewUser({ ...newUser, ...{ [prop]: str } })
    }

    const handleChangeNewUser = (prop, e) => {
        setNewUser({ ...newUser, ...{ [prop]: e.target.value } })
    }

    const saveSettings = async () => {
        const user = await dispatch(saveUserSettings(newUser))
        setNewUser({ ...user.payload })
    }


    useEffect(() => {
        setNewUser({ ...user })
    }, [user])


    return (
        <div className='container'>
            <h2 className='settings-page-title' >Редактировать профиль</h2>
            <SettingsMenuTop />
            <div className='content-wrapper settings'>
                <div className="content-block">
                    <div className="edit-profile-wrapper">
                        <div className='edit-profile-inner'>
                            <div className="profile-image">
                                <img src={avatar !== '' ? avatar : userAvatarStub} alt="" />
                                <div className="profile-img-overlay">
                                    <label htmlFor="uploadcare--widget__text">
                                        <Widget onChange={(info) => selectFile('user_avatar', info.cdnUrl)} />
                                        <img src={camera} alt="" className='avatar-camera' />
                                    </label>
                                </div>
                            </div>
                            <div className='profile-top-field-inner'>
                                <div className='profile-field'>
                                    <span className='label-field'>Ваше имя</span>
                                    {
                                        blur && <TextInput
                                            value={newUser.user_name}
                                            onChange={(e) => handleChangeNewUser('user_name', e)}
                                            onBlur={handleBlur} />
                                    }
                                    {
                                        !blur && <p className="profile-text-wrapper" onClick={handleBlur} >{newUser.user_name}
                                        </p>
                                    }
                                </div>
                                {/* класс ошибки -> error-message-bg */}
                                <div className='profile-field '>
                                    <span className='label-field'>Никнейм</span>
                                    {blur && <TextInput
                                        value={newUser.user_nikname}
                                        onChange={(e) => handleChangeNewUser('user_nikname', e)}
                                        onBlur={handleBlur} />
                                    }
                                    {
                                        !blur && <p className="profile-text-wrapper" onClick={handleBlur}>{newUser.user_nikname}
                                        </p>
                                    }
                                    {/* <span className="error-message">К сожалению, этот никнейм занят</span> */}
                                </div>
                            </div>
                        </div>
                        <div className='profile-field'>
                            <label htmlFor='about-label' className='label-field' onClick={handleBlur}>О себе</label>
                            {blur && <TextArea
                                value={newUser.user_about}
                                onChange={(e) => handleChangeNewUser('user_about', e)}
                                onBlur={handleBlur}
                                id="about-label"
                            />
                            }

                            {!blur && <div className="profile-text-wrapper" onClick={handleBlur}>{newUser.user_about}
                            </div>}
                        </div>

                        <div className="profile-field">
                            <label htmlFor='location' className='label-field' onClick={handleBlur}>Геолокация</label>
                            {blur && <TextInput
                                value={newUser.user_location}
                                onChange={(e) => handleChangeNewUser('user_location', e)}
                                onBlur={handleBlur}
                                id='location'
                            />}
                            {
                                !blur && <p className="profile-text-wrapper" onClick={handleBlur}>{newUser.user_location}</p>
                            }
                        </div>

                        <div className="profile-field">
                            <label htmlFor='website' className='label-field' onClick={handleBlur}>Веб-сайт</label>
                            {blur && <TextInput
                                value={newUser.user_site}
                                onChange={(e) => handleChangeNewUser('user_site', e)}
                                onBlur={handleBlur}
                                id='website'
                            />}
                            {
                                !blur && <p className="profile-text-wrapper" onClick={handleBlur}>{newUser.user_site}</p>
                            }
                        </div>

                        <div className="date-field-wrapper">
                            <div className="profile-field date-field">
                                <span className='label-field'>День рожденья</span>
                                <DatePicker selected={newUser.date_of_birth}
                                    onChange={(date) => setNewUser(
                                        {
                                            ...newUser,
                                            ...{ 'date_of_birth': date.toISOString() }
                                        })}
                                />
                            </div>
                            <div className="profile-field select-field">
                                <span className='label-field'>Показывать дату рождения</span>
                                <select name="select" onChange={handleChange}>
                                    <option value="показать всем">{select}</option>
                                    <option value="не показывать">{select}</option>
                                </select>

                            </div>
                        </div>

                        <MyButtonFill style={{ marginTop: '15px' }} onClick={saveSettings} >Сохранить</MyButtonFill>
                    </div>
                </div>
                <div className="aside-block">
                    <AsideMenuSettings />
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;