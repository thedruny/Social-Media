import React from 'react';
import style from './Dialogs.module.css';
import DialogsUserItem from './DialogsUserItem/DialogsUserItem';
import DialogsMessage from './Message/DialogsMessage';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators';
import { Element, createField } from '../common/FormsControls/FormsControls';
import { Button, Form, TextArea } from 'semantic-ui-react';
import './../../App'

const maxLength50 = maxLengthCreator(50);
const Textarea = Element('textarea');

const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogsUserItem name={d.name} key={d.id} id={d.id} />).reverse();
    let messagesElements = state.messages.map(m => <DialogsMessage message={m.message} key={m.id} />);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-xl-8 py-3'>
                    {messagesElements}
                </div>
                <div className='col-xl-4 py-3'>
                    {dialogsElements}
                </div>

                <div className='col-xl-8 py-3'>
                    <AddMessageReduxForm onSubmit={addNewMessage} />
                </div>
            </div >
        </div>
    )
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.addMessageItem}>
            <div>
                {createField('Enter your message', 'newMessageBody', [required, maxLength50], Textarea)}
            </div>
            <div>
                <Button variant="primary" type="submit">Send</Button>
            </div>
        </form>
    )
};

const AddMessageReduxForm = reduxForm({ form: 'dialogsAddMessageForm' })(AddMessageForm);

export default Dialogs;
