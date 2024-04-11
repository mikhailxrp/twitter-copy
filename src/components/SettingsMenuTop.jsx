import React from 'react';
import { NavLink } from 'react-router-dom';

const SettingsMenuTop = () => {
    return (
        <div className="top-setings-menu">
            <NavLink
                to={'/settings/profile'}
                className='settings-nav-link'>Настройки профиля
            </NavLink>
            <NavLink
                to={'/settings/password'}
                className='settings-nav-link'>Сменить пароль
            </NavLink>
            <NavLink
                to={'/settings/email'}
                className='settings-nav-link'>Сменить e-mail
            </NavLink>
        </div>
    );
};

export default SettingsMenuTop;