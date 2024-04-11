import React from 'react';
import { NavLink } from 'react-router-dom';

const AsideMenuSettings = () => {
    return (
        <div className="aside-setings-menu">
            <h4 className="aside-menu-title">Настройки</h4>
            <NavLink
                to={'/settings/profile'}
                className='settings-nav-link aside-nav-link'>Настройки профиля
            </NavLink>
            <NavLink
                to={'/settings/password'}
                className='settings-nav-link aside-nav-link'>Сменить пароль
            </NavLink>
            <NavLink
                to={'/settings/email'}
                className='settings-nav-link aside-nav-link'>Сменить e-mail
            </NavLink>
        </div>
    );
};

export default AsideMenuSettings;