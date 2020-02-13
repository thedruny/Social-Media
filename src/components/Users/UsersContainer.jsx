import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAc, setUsersAC } from '../../redux/users-reducer';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAc(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);