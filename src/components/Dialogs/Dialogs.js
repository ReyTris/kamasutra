import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer'
import { Redirect } from 'react-router'



const Dialogs = (props) => {

    let state = props.dialogsPage;


    let dialogsElements = state.dialogs.map(item => {
        return <DialogItem name={item.name} id={item.id} key={item.id}/>
    });

    let messagesElements = state.messages.map(item => {
        return <Message message={item.message} key={item.id}/>
    })
    // let newMessageBody = state.dialogs.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }

    if (props.isAuth === false) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea onChange={onNewMessageChange} value={state.newMessageBody} placeholder="EnterYourMessage"></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;