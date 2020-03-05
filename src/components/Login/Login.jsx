import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { required } from '../../utils/validators';
import { Element } from '../common/FormsControls/FormsControls';
import { connect } from 'react-redux';
import { login } from './../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import styles from './../common/FormsControls/FormsControls.module.css';
import { Button, Form } from 'semantic-ui-react'

const Input = Element('input');

let LoginForm = (props) => {
      return (
            <Form onSubmit={props.handleSubmit} >
                  <h4>Login form</h4>
                  <div>
                        <Field label="Username" placeholder={'Email'} name={'email'} component={Input} validate={[required]} />
                  </div>
                  <div>
                        <Field placeholder='Password' name={'password'} component={Input} validate={[required]} />
                  </div>
                  <div>
                        <Field name={'rememberMe'} type={'checkbox'} component={Input} validate={[required]} />
                  </div>
                  {props.error && <div className={styles.formSummaryError}>
                        {props.error}
                  </div>
                  }
                  <div>
                        <Button type='submit' color='blue'>Login</Button>
                  </div>
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
            return <div className="form-container">
                  <h1>Login</h1>
                  <LoginReduxForm onSubmit={onSubmit} />
            </div>
      }
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const mapStateToProps = (state) => ({
      isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login); 