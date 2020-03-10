import React from 'react';
import s from './Profileinfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userDefaultPhoto from './../../../assets/image/UserDefaultPhoto.png'
import { Image, Card, Message } from 'semantic-ui-react';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (event) => {
        if (event.target.files.length) {
            savePhoto(event.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <Card>
                    <Image src={profile.photos.large || userDefaultPhoto} />
                </Card>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}></input>}
                <div>
                    <h2>Profile Status:</h2>
                </div>
                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;