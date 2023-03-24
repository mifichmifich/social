import Posts from './Posts/Posts'
import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
function Profile(props) {
    return (
        <div className={style.profile}>
            <ProfileInfo />
            <Posts />
        </div>
    )
}
export default Profile