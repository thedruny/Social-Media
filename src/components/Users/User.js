import React from 'react';
import s from './Users.module.css';
import userDefaultPhoto from '../../assets/image/user-man.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

let User = ({ user, ...props }) => {
    return <div>
        <span>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userDefaultPhoto} alt={'avatar'} className={s.avatar} />
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <Button disabled={props.followingInProgress.some(id => id === user.id)}
                        onClick={() => { props.unfollow(user.id) }}>
                        Unfollow</Button>
                    : <Button color='teal' disabled={props.followingInProgress.some(id => id === user.id)}
                        onClick={() => { props.follow(user.id) }}>
                        Follow</Button>}
            </div>
        </span>
        <span>
            <span>
                <div>{user.name} </div>
                <div>{user.status || 'No status'}</div>
            </span>
            <span>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
            </span>
        </span>
    </div >
}

export default User;