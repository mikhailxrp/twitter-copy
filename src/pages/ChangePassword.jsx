import React, { useState } from 'react';
import SettingsMenuTop from '../components/SettingsMenuTop';
import AsideMenuSettings from '../components/AsideMenuSettings';
import TextInput from '../ui/input/TextInput';
import MyButtonFill from '../ui/button/MyButtonFill';

const ChangePassword = () => {

    return (
        <div className='conatiner'>
            <h2 className='settings-page-title' >Сменить пароль</h2>
            <SettingsMenuTop />
            <div className='content-wrapper settings'>
                <div className="content-block">
                    <div className="edit-password-wrapper">
                        <div className='edit-password-inner'>
                            <div className='profile-field error-message-bg' >
                                <span className='label-field'>Старый пароль</span>
                                <TextInput />
                                <span className="error-message">Пароли не совпадают</span>
                            </div>
                            <div className='profile-field' >
                                <span className='label-field'>Новый пароль</span>
                                <TextInput />
                            </div>
                            <div className='profile-field error-message-bg' >
                                <span className='label-field'>Новый пароль еще раз</span>
                                <TextInput />
                                <span className="error-message">Пароли не совпадают</span>
                            </div>
                        </div>
                        <MyButtonFill style={{ marginTop: '20px' }} >Сохранить</MyButtonFill>
                    </div>
                </div>
                <div className="aside-block">
                    <AsideMenuSettings />
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;