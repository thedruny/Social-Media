import React from 'react';
import { reduxForm } from 'redux-form';
import { required } from '../../utils/validators';
import { Element, createField } from '../common/FormsControls/FormsControls';
import { connect } from 'react-redux';
import { login } from './../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import styles from './../common/FormsControls/FormsControls.module.css';
import { Button, Form } from 'semantic-ui-react'

const Input = Element('input');

let LoginForm = ({ handleSubmit, error }) => {
      return (
            <Form onSubmit={handleSubmit}>
                  <Form.Field>
                        <label>Login</label>
                        {createField('Email', 'email', [required], Input)}
                  </Form.Field>
                  <Form.Field >
                        <label>Password</label>
                        {createField('Password', 'password', [required], Input, { type: 'password' })}
                  </Form.Field>
                  {error && <div className={styles.formSummaryError}>
                        {error}
                  </div>
                  }
                  <Button color='blue'>Login</Button>
            </Form >
      )
};

let Login = (props) => {
      const onSubmit = (formData) => {
            props.login(formData.email, formData.password, formData.rememberMe)
      }

      if (props.isAuth) {
            return (
                  <Redirect to='/profile' />
            )
      } else {
            return <div className={styles.formContainer}>
                  <h1>Login</h1>
                  <LoginReduxForm onSubmit={onSubmit} />
            </div>
      }
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const mapStateToProps = (state) => ({
      isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);