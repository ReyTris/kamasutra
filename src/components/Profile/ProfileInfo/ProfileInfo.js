import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/Preloader'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            {/* <div>
                <img className={s.content__img} src="https://naked-science.ru/wp-content/uploads/2018/04/field_image_istock-516189065.jpg" alt='1'/>
            </div> */}
            <div className={s.profileDescription}>
                <img src={props.profile.photos.small}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;

