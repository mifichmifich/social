import style from './ProfileInfo.module.css'
import userLogo from './../../../assets/img/userlogo-transformed.png'
import { useState } from 'react';
function ProfileInfo(props) {
    let [status, setStatus] = useState('Hello World');
    let [edit, setEdit] = useState(false)
    let some
    return (
        <div className={style.profileInfo}>
            <div className={style.ProfileInfo_container}>
                <h2 className={style.user_name}>User</h2>
                <img className={style.user_logo} src={userLogo} alt="" />
                {!edit && <p onClick={() => setEdit(true)} className={style.user_status}>{status}</p>}
                {edit && <p> <input className={style.status_input} onBlur={() => setEdit(false)} autoFocus={true} value={status} type="text" onChange={(e) => setStatus(e.currentTarget.value)} /></p>}
            </div>

        </div>
    )
}
export default ProfileInfo