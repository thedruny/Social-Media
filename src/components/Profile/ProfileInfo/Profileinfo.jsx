import React from 'react';
import s from './Profileinfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({ profile, status, updateStatus }) => {

    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} />
                <h3>Profile Status</h3>
                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;