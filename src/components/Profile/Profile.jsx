import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/Profileinfo';
import MyPostsContainer from './MyPost/MyPostsContainer';

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;
