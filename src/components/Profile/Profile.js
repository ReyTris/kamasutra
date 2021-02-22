import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <div className={s.double}>
                <MyPostsContainer />
            </div>
        </div>
    )
}

export default Profile;

