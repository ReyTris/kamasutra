import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'


const Header = (props) => {
    return (
        <header className={s.header}>
            <img width="50px" height="50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/600px-Telegram_logo.svg.png" alt='tr'/>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;