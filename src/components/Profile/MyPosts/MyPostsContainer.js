import React from 'react'
import { addPostActionCreator, updateNewTextActionCreator} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'

//обертка для MyPost компоненты


const MyPostsContainer = (props) => {

    let state = props.store.getState()


    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewTextActionCreator(text))
    }

    return (
        <MyPosts updateNewText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
    )
}

export default MyPostsContainer;
