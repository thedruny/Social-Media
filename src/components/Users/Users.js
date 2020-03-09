import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import { Pagination } from 'semantic-ui-react';


let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {
    return <div>
        <Paginator currentPage={currentPage}
            onPageChanged={onPageChanged}
            totalItemsCount={totalUsersCount}
            pageSize={pageSize} />
        <div>
            {
                users.map(u => <User user={u}
                    followingInProgress={props.followingInProgress}
                    key={u.id}
                    unfollow={props.unfollow}
                    follow={props.follow}
                />)
            }
        </div>
    </div>
}

export default Users;