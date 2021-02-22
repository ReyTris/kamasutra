import React from 'react'
import { addPostActionCreator, updateNewTextActionCreator} from '../../../redux/profile-reducer'

import s from './MyPosts.module.css'
import Post from './Post/Post'



const MyPosts = (props) => {

    let postElements = props.posts.map(item => {
        return <Post message={item.message}/> 
    })

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
        // store.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewText(text)
        // store.dispatch(updateNewTextActionCreator(text))
    }

    return (
        <div className={s.postsBlock}>
                <h3>My Post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;
