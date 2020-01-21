import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return <div className={s.item}>
        <img src="https://pbs.twimg.com/profile_images/1210987730299166721/jSUc6abq_400x400.jpg" alt="ava"></img>
        {props.massage}
        <div>
            <span>Like</span> {props.likesCont}
        </div>
    </div>
}

export default Post;