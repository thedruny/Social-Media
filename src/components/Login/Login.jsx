import React from 'react';
import { reduxForm, Field } from 'redux-form';

let LoginForm = (props) => {
      return (
            <form onSubmit={props.handleSubmit}>
                  <div>
                        <Field placeholder={'Login'} name={'login'} component={'input'} />
                  </div>
                  <div>
                        <Field placeholder='Password' name={'password'} component={'input'} />
                  </div>
                  <div>
                        <Field component={'input'} name={'rememberMe'} type={'checkbox'} />
                  </div>
                  <div>
                        <button>Login</button>
                  </div>
            </form >
      )
};

let Login = (props) => {
      const onSubmit = (formData) => {
            console.log(formData)
      }
      return <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
      </div>
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default Login;