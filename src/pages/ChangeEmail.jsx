import React, { useState } from 'react';
import SettingsMenuTop from '../components/SettingsMenuTop';

import PasswordInput from '../ui/input/PasswordInput'
import EmailInput from '../ui/input/EmailInput'
import MyButtonFill from '../ui/button/MyButtonFill';
import AsideMenuSettings from '../components/AsideMenuSettings';
import ModalSucsses from '../ui/modalWindow/ModalSucsses'
import Overlay from '../ui/overlay/Overlay'

import { useSelector, useDispatch } from 'react-redux';
import { saveChangeEmail } from '../store/userSlice'

const ChangeEmail = () => {
    const user = useSelector(state => state.user)
    const [newUserEmail, setNewUserEmail] = useState({ email: '', password: '' })
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [saveSucsses, setSaveSucsses] = useState(true)

    const dispatch = useDispatch()

    const handleUserEmail = (prop, e) => {
        setNewUserEmail(
            {
                ...newUserEmail,
                ...{ [prop]: e.target.value },
                ...{ currentPass: user.user_password },
                ...{ id: user.id },
            }
        )
    }

    const saveEmail = (e) => {
        e.preventDefault()
        dispatch(saveChangeEmail(newUserEmail)).then(res => {
            if (res.payload.error === 'Введите правильный email') {
                setErrorEmail(res.payload.error)
            } else if (res.payload.error === 'Не верный пароль') {
                setErrorPassword(res.payload.error)
                setErrorEmail('')
            }
            if (res.payload.message) {
                setErrorEmail('')
                setErrorPassword('')
                setNewUserEmail({ email: '', password: '' })

                setSaveSucsses(false)
            }
        })
    }

    const closeModal = () => {
        setSaveSucsses(!saveSucsses)
    }

    return (
        <div>
            <h2 className='settings-page-title' >Сменить e-mail</h2>
            <SettingsMenuTop />

            <div className='content-wrapper settings'>
                <div className="content-block">
                    <form className="edit-password-wrapper" onSubmit={saveEmail} >
                        <div className='edit-password-inner'>
                            <div className={errorEmail ? 'profile-field error-message-bg' : 'profile-field '} >
                                <span className='label-field'>Новый e-mail</span>
                                <EmailInput
                                    value={newUserEmail.email}
                                    onChange={(e) => handleUserEmail('email', e)}
                                />
                                <span className="error-message">{errorEmail}</span>
                            </div>
                            <div className={errorPassword ? 'profile-field error-message-bg' : 'profile-field '} >
                                <span className='label-field'>Пароль для подтверждения</span>
                                <PasswordInput
                                    value={newUserEmail.password}
                                    onChange={(e) => handleUserEmail('password', e)}
                                />
                                <span className="error-message">{errorPassword}</span>
                            </div>
                        </div>
                        <MyButtonFill style={{ marginTop: '30px' }}  >Сохранить</MyButtonFill>
                    </form>
                </div>
                <div className="aside-block">
                    <AsideMenuSettings />
                </div>
            </div>
            {!saveSucsses && <ModalSucsses closeModal={closeModal} >Email успешно изменен</ModalSucsses>}
            {!saveSucsses && <Overlay />}
        </div>
    );
};

export default ChangeEmail;