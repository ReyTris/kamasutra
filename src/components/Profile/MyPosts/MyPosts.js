import React from 'react'

import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = ({posts, addPosts, updateNewText, newPost}) => {

    let postElements = posts.map(item => {
        return <Post message={item.message}/> 
    })

    let newPostElement = React.createRef()

    let addPost = () => {
        addPosts()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        updateNewText(text)
    }

    return (
        <div className={s.postsBlock}>
                <h3>My Post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={newPost}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;
