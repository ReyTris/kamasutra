import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import TwoPost from './TwoPost/TwoPost'
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div>
            <div>
                <img className={s.content__img} src="https://naked-science.ru/wp-content/uploads/2018/04/field_image_istock-516189065.jpg" alt='1'/>
            </div>
            <div>
                ava + description
            </div>
            <div className={s.double}>
                <MyPosts/>
                <TwoPost/>
            </div>
        </div>
    )
}

export default Profile;

