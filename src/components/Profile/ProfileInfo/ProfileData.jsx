import React from 'react'
import { profileAPI } from '../../../api/api';
import styles from './Profileinfo.module.css'


let ProfileData = ({ profile, isOwner, activateEditMode }) => {
      return (
            <div>
                  {isOwner && <div><button onClick={activateEditMode}>edit</button></div>}
                  <div>
                        <b>Full Name:</b> {profile.fullName}
                  </div>
                  <div>
                        <b>Looking for a job:</b> {profile.lookingForAJob ? 'Yes' : 'No'}
                        {profile.lookingForAJob &&
                              <div>
                                    <b>My professional skills</b> : {profile.lookingForAJobDescription}
                              </div>
                        }
                  </div>
                  <div>
                        <b>About Me:</b> {profile.aboutMe}
                  </div>
                  <div>
                        <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                              return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                        })}
                  </div>
            </div>
      )
};

const Contacts = ({ contactTitle, contactValue }) => {
      return <div>
            <b className={styles.contact}>{contactTitle}:</b> {contactValue}
      </div>
};

export default ProfileData;