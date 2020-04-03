import React from 'react';
import s from './Users.module.css';
import userDefaultPhoto from '../../assets/image/UserDefaultPhoto.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react';

let User = ({ user, ...props }) => {
    return (
        <Card>
            <Card.Content>
                <Image
                    as={NavLink}
                    to={'/profile/' + user.id}
                    floated='right'
                    size='mini'
                    src={user.photos.small != null ? user.photos.small : userDefaultPhoto} />
                <Card.Header>{user.name}</Card.Header>
                <Card.Meta>{user.status || 'No status'}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    {user.followed
                        ? <Button disabled={props.followingInProgress.some(id => id === user.id)}
                            onClick={() => { props.unfollow(user.id) }}>
                            Unfollow</Button>
                        : <Button color='teal' disabled={props.followingInProgress.some(id => id === user.id)}
                            onClick={() => { props.follow(user.id) }}>
                            Follow</Button>}
                </div>
            </Card.Content>
        </Card>
    )
}
export default User;