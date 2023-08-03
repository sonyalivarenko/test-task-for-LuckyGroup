export default function HeaderNavPopup(props) {

  return (
   <div className={`header-nav header__${props.name} ${props.isOpen && 'header-nav__mobile header-nav__mobile_active' }`}>
    <nav className="header__nav">
     <ul className="header__columns">
     {props.isOpen && <button className="header__close" type="button" onClick={props.onClose}></button>}
      <li><a className="header__link" href="#">Mobile Top Up</a></li>
      <li><a className="header__link" href="#">About</a></li>
      <li><a className="header__link" href="#">Rate</a></li>
      <li><a className="header__link" href="#">Help</a></li>
     </ul>
    </nav>
    {/* <nav className="header-nav__container">
       <ul className="header-nav__links">
       {props.isOpen && <button className="header-nav__close" type="button" onClick={props.onClose}></button>}
         {props.isOpen && <NavLink to='/'  className={({ isActive }) => `header-nav__link
           ${isActive && "header-nav__link_active"}`} >Главная</NavLink>}
         <li><NavLink to='/movies' className={({ isActive }) => `header-nav__link
           ${isActive && "header-nav__link_active"}`}>Фильмы</NavLink></li>
         <li><NavLink to="/saved-movies" className={({ isActive }) => `header-nav__link
           ${isActive && "header-nav__link_active"}`}>Сохранённые фильмы</NavLink></li>
       </ul>
       <div className="header-nav__auth">
         <Link to='/profile' className="header-nav__account">Аккаунт
           <img className="header-nav__link-logo" src={accountLogo} alt="Иконка с изображением пользователя для возвращения в профиль" />
         </Link>
       </div>
     </nav> */}
   </div>
   )
 }