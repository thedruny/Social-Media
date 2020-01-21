import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPost/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://spacenews.com/wp-content/uploads/2018/05/24359364107_152b0152ff_k-879x485.jpg" alt="banner" />
            </div>
            <div>
                ava + description
          <img src="https://avatars.mds.yandex.net/get-pdb/2833210/e9dc7fa6-c6e1-4558-9441-7f3247f68a96/s375" alt="logo" />
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;