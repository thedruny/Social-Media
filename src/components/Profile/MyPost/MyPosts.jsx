import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post massage={p.message} likesCont={p.likesCount} />)

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    };

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <AddNewPostReduxForm onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div >
    )
};


const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newPostText' />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const AddNewPostReduxForm = reduxForm({ form: 'profileAddNewPostForm' })(AddNewPostForm);

export default MyPosts;