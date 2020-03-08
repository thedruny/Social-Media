import React from 'react';
import styles from './FormsControls.module.css'
import { Field } from 'redux-form';

export const Element = Element => ({ input, meta: { touched, error }, ...props }) => {
      const hasError = touched && error;
      return (
            <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
                  <Element {...input} {...props} />
                  {hasError && <span> {error} </span>}
            </div>
      );
};

export const createField = (placeholder, name, validators, component, props) => (
      <div>
            <Field placeholder={placeholder}
                  name={name}
                  validate={validators}
                  component={component}
                  {...props} />
      </div>

);