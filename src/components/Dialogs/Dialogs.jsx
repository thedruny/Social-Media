import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators';
import { Element } from '../common/FormsControls/FormsControls';
import { Button, Input } from 'semantic-ui-react';
import './../../App'

const maxLength50 = maxLengthCreator(50);
const Textarea = Element('textarea');

const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} key={d.id} id={d.id} />)
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    };

    return (
        <div className='form-container'>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.massages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage} />
        </div>
    )
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.addMessageItem}>
            <div>
                <Field component={Textarea} placeholder="Ender your message" name="newMessageBody" validate={[required, maxLength50]} />
            </div>
            <div>
                <Button variant="primary" type="submit">Send</Button>
            </div>
        </form>
    )
};

const AddMessageReduxForm = reduxForm({ form: 'dialogsAddMessageForm' })(AddMessageForm);

export default Dialogs;
