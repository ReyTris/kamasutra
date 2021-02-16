import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {

    let dialogsData = [
        {name: "Dimych", id:1},
        {name: "Andrey", id:2},
        {name: "Sveta", id:3},
        {name: "Sasha", id:4},
        {name: "Viktor", id:5},
        {name: "Valera", id:6},
    ]

    let messagesData = [
        {message: "Hi", id: 1},
        {message: "Fck you", id: 1},
        {message: "how are you", id: 1},
        {message: "i will learn React", id: 1},
        {message: "how are you", id: 1},
    ]

    let dialogsElements = dialogsData.map(item => {
        return <DialogItem name={item.name} id={item.id}/>
    });

    let messagesElements = messagesData.map(item => {
        return <Message message={item.message}/>
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;