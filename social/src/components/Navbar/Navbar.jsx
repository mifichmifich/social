import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'
function Navbar(props) {
    console.log(style)
    return (
        <div className="navbar">
            <ul className={style.navbar_list}>
                {/* <li><a className={style.navbar_link} href="">Профиль</a></li>
                <li><a className={style.navbar_link} href="">Сообщения</a></li> */}
                <li><NavLink to="/profile">Профиль</NavLink></li>
                <li><NavLink to="/dialogs">Сообщения</NavLink></li>
                <li><NavLink to="/users">Пользователи</NavLink></li>
                <li><NavLink to="/foto">Фото</NavLink></li>
                {/* <li><a className={style.navbar_link} href="">Пользователи</a></li>
                <li><a className={style.navbar_link} href="">Фото</a></li> */}
            </ul>
        </div>
    )
}
export default Navbar