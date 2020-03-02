import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators';
import { Element } from '../../common/FormsControls/FormsControls';
import { Button } from 'react-bootstrap';

const maxLength10 = maxLengthCreator(10);
const Textarea = Element('textarea')

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
                <Field component={Textarea} placeholder='Post message' name='newPostText' validate={[required, maxLength10]} />
            </div>
            <div>
                <Button variant="primary" type="submit">Add Post </Button >
            </div>
        </form >
    )
};

const AddNewPostReduxForm = reduxForm({ form: 'profileAddNewPostForm' })(AddNewPostForm);

export default MyPosts;