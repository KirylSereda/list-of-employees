import { NavLink } from "react-router-dom"
import s from './NavBar.module.css';

function NavBar() {
    return (
      <div className={s.main_app_wrapper}>
        <NavLink className={s.main_app_link} to='/main'> Главная </NavLink>
        <NavLink className={s.main_app_link} to='/staff'> Сотрудники </NavLink>
      </div>
    )
}

export default NavBar;