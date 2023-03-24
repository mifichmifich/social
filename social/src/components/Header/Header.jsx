import style from './Header.module.css'
import logo from './../../logo.svg';
function Header(props) {
  return (
    <div className="header">
      <img src={logo} alt="" className={style.header_logo} />
      <h1 className={style.header_title}>Social Network</h1>
    </div>
  )
}
export default Header