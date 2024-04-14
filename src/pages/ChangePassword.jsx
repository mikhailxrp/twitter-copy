import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { savePasswordUser } from '../store/userSlice'
import SettingsMenuTop from '../components/SettingsMenuTop';
import AsideMenuSettings from '../components/AsideMenuSettings';
import PasswordInput from '../ui/input/PasswordInput';
import MyButtonFill from '../ui/button/MyButtonFill';

import ModalSucsses from '../ui/modalWindow/ModalSucsses';
import Overlay from '../ui/overlay/Overlay';

const ChangePassword = () => {
    const user = useSelector(state => state.user)
    const [errorOldPass, setErrorOldPass] = useState('')
    const [newPassError, setNewPassError] = useState('')
    const [newUserPassword, setNewUserPassword] = useState({ password: '', newPass: '', repeatNewPass: '' })
    const [saveSucsses, setSaveSucsses] = useState(true)

    const dispatch = useDispatch()

    const handleChangePassword = (prop, e) => {
        setNewUserPassword(
            {
                ...newUserPassword,
                ...{ [prop]: e.target.value },
                ...{ id: user.id },
                ...{ currentPass: user.user_password }
            })
    }

    const saveChangePassword = () => {
        dispatch(savePasswordUser(newUserPassword)).then(res => {
            if (res.payload.error === 'Не верный пароль' || res.payload.error === 'Поле не может быть пустым') {
                setErrorOldPass(res.payload.error)
            } else {
                setNewPassError(res.payload.error)
                setErrorOldPass('')
            }
            if (res.payload.message) {
                setErrorOldPass('')
                setNewPassError('')
                setNewUserPassword(
                    {
                        ...newUserPassword,
                        ...{ password: '' },
                        ...{ newPass: '' },
                        ...{ repeatNewPass: '' }
                    })
                setSaveSucsses(false)
            }

        })

    }

    const closeModal = () => {
        setSaveSucsses(!saveSucsses)
    }

    return (
        <div className='conatiner'>
            <h2 className='settings-page-title' >Сменить пароль</h2>
            <SettingsMenuTop />
            <div className='content-wrapper settings'>
                <div className="content-block">
                    <div className="edit-password-wrapper">
                        <div className='edit-password-inner'>
                            <div className={!errorOldPass ? 'profile-field error-message-bg hidden' : 'profile-field error-message-bg'}>
                                <span className='label-field hidden'>Старый пароль</span>
                                <PasswordInput
                                    value={newUserPassword.password}
                                    onChange={(e) => handleChangePassword('password', e)} />
                                <span className={!errorOldPass ? "error-message hidden" : "error-message"}>{errorOldPass}</span>
                            </div>
                            <div className={!newPassError ? 'profile-field' : 'profile-field error-message-bg'} >
                                <span className='label-field'>Новый пароль</span>
                                <PasswordInput
                                    value={newUserPassword.newPass}
                                    onChange={(e) => handleChangePassword('newPass', e)}
                                />
                                <span className={!newPassError ? "error-message hidden" : "error-message"}>{newPassError}</span>
                            </div>
                            <div className={!newPassError ? 'profile-field' : 'profile-field error-message-bg'} >
                                <span className='label-field '>Новый пароль еще раз</span>
                                <PasswordInput
                                    value={newUserPassword.repeatNewPass}
                                    onChange={(e) => handleChangePassword('repeatNewPass', e)}
                                />
                                <span className={!newPassError ? "error-message hidden" : "error-message"}>{newPassError}</span>
                            </div>
                        </div>
                        <MyButtonFill style={{ marginTop: '20px' }} onClick={saveChangePassword} >Сохранить</MyButtonFill>
                    </div>
                </div>
                <div className="aside-block">
                    <AsideMenuSettings />
                </div>
            </div>

            {!saveSucsses && <ModalSucsses closeModal={closeModal} >Пароль успешно сохранен!</ModalSucsses>}
            {!saveSucsses && <Overlay />}
        </div>
    );
};

export default ChangePassword;