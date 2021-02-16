import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'




const Dialogs = ({dialogs, messages}) => {

    let dialogsElements = dialogs.map(item => {
        return <DialogItem name={item.name} id={item.id}/>
    });

    let messagesElements = messages.map(item => {
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