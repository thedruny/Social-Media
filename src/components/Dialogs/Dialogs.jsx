import React from 'react';
import s from './Dialogs.module.css';
import DialogsUserItem from './DialogsUserItem/DialogsUserItem';
import DialogsMessage from './Message/DialogsMessage';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators';
import { Element } from '../common/FormsControls/FormsControls';
import { Button } from 'semantic-ui-react';
import './../../App'

const maxLength50 = maxLengthCreator(50);
const Textarea = Element('textarea');

const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogsUserItem name={d.name} key={d.id} id={d.id} />).reverse();
    let messagesElements = state.messages.map(m => <DialogsMessage message={m.message} key={m.id} />).reverse();

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
