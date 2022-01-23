import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} /> );
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id}/> );
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
       props.sendMessage (values.newMessageBody);/*такое же как и name*/
    };

    if(!props.isAuth) return <Redirect to={"/login"} />;

    return (
        <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            { dialogsElements}     {/*диалоги*/}
        </div>
            <div className={s.messages}>
               <div>{ messagesElements }</div> {/*сообщения*/}
                <AddMessageForm  onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;





