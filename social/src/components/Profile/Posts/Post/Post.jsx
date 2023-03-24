import style from './Post.module.css'
import logo from './../../../../assets/img/userlogo-transformed.png'
function Post(props) {
    return (
        <div className={style.post}>
            <div className={style.post_left}>
                <img className={style.logo} src={logo} alt="" />
                <p>{props.message}</p>
            </div>
            <div className={style.post_right}>
                <p>likes:{props.likes}</p>
                <p>reposts:{props.reposts}</p>
            </div>
        </div>
    )
}
export default Post