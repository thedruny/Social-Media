import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators';
import { Element, createField } from '../../common/FormsControls/FormsControls';
import { Button, Message, Form } from 'semantic-ui-react'

const maxLength10 = maxLengthCreator(10);
const Input = Element('input')

const MyPosts = React.memo((props) => {
    let postsElements = props.posts.map(post => <Post massage={post.message} likesCont={post.likesCount} key={post.id} />).reverse();

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    };

    return (
        <div className={s.postsBlock}>
            <AddNewPostReduxForm onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div >
    )
});


const AddNewPostForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <h2>Create a post:</h2>
            <Form.Field>
                {createField('Hi world!', 'newPostText', [required, maxLength10], Input)}
            </Form.Field >
            <Button color='teal'>Add Post </Button >
        </Form >
    )
};

const AddNewPostReduxForm = reduxForm({ form: 'profileAddNewPostForm' })(AddNewPostForm);

export default MyPosts;