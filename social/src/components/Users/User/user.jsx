import style from './user.module.css'
function User(props) {
    return (
        <div className={style.user}>
            <div className={style.user_left}>
                <img src="https://avatars.mds.yandex.net/get-dialogs/758954/1d1c9784f593a70db7a8/orig" alt="" />
                <button>Подписаться</button>
            </div>
            <div className={style.user_right}>
                <div className={style.user_right_top}>
                    <p className={style.user_right_name}>{props.name}</p>
                    <p className={style.user_right_city}>{props.city}</p>
                </div>
                <div className={style.user_right_bottom}>
                    <p className={style.user_right_status}>{props.status}</p>
                    <p className={style.user_right_zipcode}>{props.zipcode}</p>
                </div>
            </div>

        </div>

    )
}
export default User