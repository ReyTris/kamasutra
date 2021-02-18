import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import TwoPost from './TwoPost/TwoPost'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({posts, dispatch, newPost}) => {
    return (
        <div>
            <ProfileInfo/>
            <div className={s.double}>
                <MyPosts posts={posts} dispatch={dispatch} newPost={newPost}/>
                <TwoPost posts={posts}/>
            </div>
        </div>
    )
}

export default Profile;

