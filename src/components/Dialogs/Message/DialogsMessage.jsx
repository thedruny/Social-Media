import React from 'react';
import { Message } from 'semantic-ui-react';

const DialogsMessage = (props) => {
    return (
        <Message content={props.message} />
    )
};

export default DialogsMessage;