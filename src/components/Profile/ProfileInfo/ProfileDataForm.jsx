import React from 'react'
import { Form } from 'semantic-ui-react'
import { reduxForm } from 'redux-form';
import styles from './Profileinfo.module.css'
import { createField, Element } from '../../common/FormsControls/FormsControls';
import s from './../../common/FormsControls/FormsControls.module.css'

const Input = Element('input');
const Textarea = Element('textarea');


let ProfileDataForm = ({ handleSubmit, activateEditMode, profile, error }) => {
      return <form onSubmit={handleSubmit}>
            <div>
                  <button>Save</button>
            </div>
            {error && <div className={s.formSummaryError}>
                  {error}
            </div>
            }
            <div>
                  <b>Full Name:</b> {createField('Full name', 'fullName', [], Input)}
            </div>
            <div>
                  <b>Looking for a job:</b> {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
            </div>
            <div>
                  <b>My professional skills:</b> {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
            </div>
            <div>
                  <b>About me:</b>
                  {createField('About me', 'aboutMe', [], Textarea)}
            </div>
            <div>
                  <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                        return <div key={key} className={styles.contact}>
                              <b>
                                    {key}: {createField(key, 'contacts.' + key.toLocaleLowerCase(), [], Input)}
                              </b>
                        </div>
                  })}
            </div>
      </form>
};

const ProfileDataReduxForm = reduxForm({ form: 'profile-edit' })(ProfileDataForm);


export default ProfileDataReduxForm;