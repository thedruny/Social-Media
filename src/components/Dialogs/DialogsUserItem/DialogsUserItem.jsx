import React from 'react';
import { NavLink } from 'react-router-dom';
import { List, Image } from 'semantic-ui-react';

const DialogsUserItem = (props) => {

    return (
        <div>
            <List selection verticalAlign='middle'>
                <List.Item
                    as={NavLink}
                    to={'/dialogs/' + props.id}>
                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
                    <List.Content>
                        <List.Header>{props.name}</List.Header>
                    </List.Content>
                </List.Item>
            </List>
        </div>
    );
}

export default DialogsUserItem;