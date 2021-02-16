import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import TwoPost from './TwoPost/TwoPost'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({posts, addPost, updateNewText, newPost}) => {
    return (
        <div>
            <ProfileInfo/>
            <div className={s.double}>
                <MyPosts posts={posts} addPosts={addPost} newPost={newPost} updateNewText={updateNewText}/>
                <TwoPost posts={posts}/>
            </div>
        </div>
    )
}

export default Profile;

