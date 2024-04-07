import React from 'react';

const ProfileCount = () => {
    return (
        <div className="profile-count-wrapper">
            <div className="profile-count-item">
                <div className="profile-count">45K</div>
                <div className="profile-text">Сообщений</div>
            </div>
            <div className="profile-count-item">
                <div className="profile-count">28</div>
                <div className="profile-text">Читаемых</div>
            </div>
            <div className="profile-count-item">
                <div className="profile-count">118</div>
                <div className="profile-text">Читателей</div>
            </div>
        </div>
    );
};

export default ProfileCount;