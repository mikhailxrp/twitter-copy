import user from '../img/user-img1.png'
const ProfileComponent = () => {
    return <>
    <div className="profile-wrapper">
        <div className="profile-top">
            <div className="profile-img">
                <img src={user} alt="" />
            </div>
            <div className="profile-wrapper-name">
                <p className="profile-name">Александр</p>
                <div className="profile-nikname">@alex</div>
            </div>
        </div>
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
    </div>
    </>
}

export default ProfileComponent