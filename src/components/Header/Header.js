import React from 'react'
import s from './Header.module.css'


const Header = () => {
    return (
        <header className={s.header}>
            <img width="50px" height="50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/600px-Telegram_logo.svg.png" alt='tr'/>
        </header>
    )
}

export default Header;