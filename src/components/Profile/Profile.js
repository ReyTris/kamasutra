import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import TwoPost from './TwoPost/TwoPost'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <div className={s.double}>
                <MyPostsContainer store={props.store}/>
                <TwoPost store={props.store}/>
            </div>
        </div>
    )
}

export default Profile;

