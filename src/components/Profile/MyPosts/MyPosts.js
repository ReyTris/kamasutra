import React from 'react'
import { Field, reduxForm } from 'redux-form'

import s from './MyPosts.module.css'
import Post from './Post/Post'



const MyPosts = (props) => {

    let postElements = props.posts.map(item => {
        return <Post message={item.message}/> 
    })

    let newPostElement = React.createRef()

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
        // store.dispatch(addPostActionCreator())
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Post</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component="textarea"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddnewPostForm"})(AddNewPostForm)

export default MyPosts;
