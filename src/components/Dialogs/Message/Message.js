import React from 'react'
import s from './Message.css'

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default Message;