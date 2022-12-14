import React from 'react';
import cl from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={cl.dialog}>
            <NavLink to={path}>{props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={cl.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dmitry'},
        {id: 2, name: 'Daruya'},
        {id: 3, name: 'Kirill'}
    ]

    let messagesData = [
        {id: 1, message: 'Sasi'},
        {id: 2, message: 'Privet'},
        {id: 3, message: 'Uchu kurs'}
    ]

    let dialogsElement = dialogsData
        .map((d) => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = messagesData
        .map((m) => <Message message={m.message}/>);

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={cl.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;