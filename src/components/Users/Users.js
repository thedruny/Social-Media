import React from 'react';
import s from './Users.module.css';
import userDefaultPhoto from '../../assets/image/user-man.png';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return < div >

        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPages}
                    onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>

        {
            props.users.map(u => <div key={u.id} className={s.postsBlock}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userDefaultPhoto} alt={'avatar'} className={s.avatar} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <Button variant="danger" onClick={() => { props.unfollow(u.id) }}>Unfollow</Button>
                            : <Button variant="primary" onClick={() => { props.follow(u.id) }}>Follow</Button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
    </div >
}

export default Users;