import React from 'react';
import ProfileInfo from './ProfileInfo/Profileinfo';
import MyPostsContainer from './MyPost/MyPostsContainer';

const Profile = (props) => {
    return (
        <div className='ui-container'>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;
