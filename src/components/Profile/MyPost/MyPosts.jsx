import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>

            </div>
            <div className={s.posts}>
                <Post massage="Hi, how are you?" likesCont="3" />
                <Post massage="Hi guys, it's my first post" likesCont="23" />
            </div>
        </div >
    )
}

export default MyPosts;