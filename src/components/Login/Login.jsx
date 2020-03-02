import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { required } from '../../utils/validators';
import { Element } from '../common/FormsControls/FormsControls';
import { connect } from 'react-redux';
import { login } from './../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';

const Input = Element('input');

let LoginForm = (props) => {
      return (
            <form onSubmit={props.handleSubmit}>
                  <div>
                        <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]} />
                  </div>
                  <div>
                        <Field placeholder='Password' name={'password'} component={Input} validate={[required]} />
                  </div>
                  <div>
                        <Field name={'rememberMe'} type={'checkbox'} component={Input} validate={[required]} />
                  </div>
                  <div>
                        <button>Login</button>
                  </div>
            </form >
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
            return <div>
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