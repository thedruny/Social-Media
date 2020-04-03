import React, { useState } from 'react';
import s from './Profileinfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userDefaultPhoto from './../../../assets/image/UserDefaultPhoto.png'
import { Image, Card, Message } from 'semantic-ui-react';
import ProfileData from './ProfileData'
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (event) => {
        if (event.target.files.length) {
            savePhoto(event.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    };

    return (
        <div className='container'>
            <div className="row">
                <div className='col-sm-3 '>
                    <Card>
                        <Image src={profile.photos.large || userDefaultPhoto} />
                    </Card>
                    {isOwner && <input type={'file'} onChange={onMainPhotoSelected}></input>}
                </div>
                <div>
                    {editMode
                        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                        : <ProfileData profile={profile} isOwner={isOwner} activateEditMode={() => { setEditMode(true) }} />}
                </div>
                <div className='col-sm-6 py-3'>
                    <h2>Profile Status:</h2>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;