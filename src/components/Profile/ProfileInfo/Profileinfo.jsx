import React from 'react';
import s from './Profileinfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userDefaultPhoto from './../../../assets/image/user-man.png'

const ProfileInfo = ({ profile, status, updateStatus }) => {

    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userDefaultPhoto} />
                <h3>Profile Status</h3>
                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;