import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import TwoPost from './TwoPost/TwoPost'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <div className={s.double}>
                <MyPosts/>
                <TwoPost/>
            </div>
        </div>
    )
}

export default Profile;

