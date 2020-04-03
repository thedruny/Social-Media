import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';


let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {
    return (
        <div className='container'>
            <div className='d-flex justify-content-center'>
                <Paginator currentPage={currentPage}
                    onPageChanged={onPageChanged}
                    totalItemsCount={totalUsersCount}
                    pageSize={pageSize} />
            </div>
            <div className='d-flex flex-row flex-wrap justify-content-center'>
                {
                    users.map(u => <div className='col-12 col-md-4 col-sm-6 mt-5' >
                        <User
                            user={u}
                            followingInProgress={props.followingInProgress}
                            key={u.id}
                            unfollow={props.unfollow}
                            follow={props.follow}
                        />
                    </div>)
                }
            </div>
        </div >
    )
}

export default Users;