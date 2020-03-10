import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';


let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {
    return (
        <div>
            <h1 class="d-inline-flex p-2 bd-highlight">Recent Posts</h1>
            <div>
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
        </div>
    )
}

export default Users;