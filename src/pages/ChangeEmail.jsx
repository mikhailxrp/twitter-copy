import React from 'react';
import SettingsMenuTop from '../components/SettingsMenuTop';
import TextInput from '../ui/input/TextInput';
import MyButtonFill from '../ui/button/MyButtonFill';
import AsideMenuSettings from '../components/AsideMenuSettings';

const ChangeEmail = () => {
    return (
        <div>
            <h2 className='settings-page-title' >Сменить e-mail</h2>
            <SettingsMenuTop />

            <div className='content-wrapper settings'>
                <div className="content-block">
                    <div className="edit-password-wrapper">
                        <div className='edit-password-inner'>
                            <div className='profile-field error-message-bg' >
                                <span className='label-field'>Новый e-mail</span>
                                <TextInput />
                                <span className="error-message">Неправильный e-mai</span>
                            </div>
                            <div className='profile-field error-message-bg' >
                                <span className='label-field'>Пароль для подтверждения</span>
                                <TextInput />
                                <span className="error-message">Пароль не совпадает</span>
                            </div>
                        </div>
                        <MyButtonFill style={{ marginTop: '30px' }} >Сохранить</MyButtonFill>
                    </div>
                </div>
                <div className="aside-block">
                    <AsideMenuSettings />
                </div>
            </div>
        </div>
    );
};

export default ChangeEmail;