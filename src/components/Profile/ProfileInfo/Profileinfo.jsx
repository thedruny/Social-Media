import React from 'react';
import s from './Profileinfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <h3>Profile Status</h3>
                <ProfileStatusWithHooks
                    status={props.status}
                    updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;