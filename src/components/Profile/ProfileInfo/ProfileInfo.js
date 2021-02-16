import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.content__img} src="https://naked-science.ru/wp-content/uploads/2018/04/field_image_istock-516189065.jpg" alt='1'/>
            </div>
            <div className={s.profileDescription}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;

