import React from 'react';
import s from './Post.module.css'
import avatar from './../../../../assets/image/UserDefaultPhoto.png'

const Post = (props) => {
    return <div className={s.item}>
        <img src={avatar} alt="ava"></img>
        {props.massage}
        <div>
            <span>Like</span> {props.likesCont}
        </div>
    </div>
}

export default Post; 