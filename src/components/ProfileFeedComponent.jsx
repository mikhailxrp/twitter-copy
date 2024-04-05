import ProfileCount from './ProfileCount'
import userAvatar from '../img/no-avatar.png'
import { useSelector } from 'react-redux'

const ProfileComponent = () => {
    const user = useSelector(state => state.user)

    return <>
        <div className="profile-wrapper">
            <div className="profile-top">
                <div className="profile-img" >
                    <img src={!user.user_avatar && userAvatar} alt="" />
                </div>
                <div className="profile-wrapper-name">
                    <p className="profile-name">{user.user_name}</p>
                    <div className="profile-nikname">{user.user_nikname}</div>
                </div>
            </div>
            <ProfileCount />
        </div>
    </>
}

export default ProfileComponent