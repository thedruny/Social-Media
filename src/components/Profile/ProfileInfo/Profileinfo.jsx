import React from 'react';
import s from './Profileinfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://spacenews.com/wp-content/uploads/2018/05/24359364107_152b0152ff_k-879x485.jpg" alt="banner" />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;