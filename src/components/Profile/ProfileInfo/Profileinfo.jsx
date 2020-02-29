import React from 'react';
import s from './Profileinfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src="https://spacenews.com/wp-content/uploads/2018/05/24359364107_152b0152ff_k-879x485.jpg" alt="banner" />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatus
                    status={props.status}
                    updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;