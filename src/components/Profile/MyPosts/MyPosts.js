import React from 'react'

import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {

    let postData = [
        {message: "Hi, how are you", id: 1},
        {message: "It's my first post", id: 2},
    ]

    let postElements = postData.map(item => {
        return <Post message={item.message}/> 
    })

    return (
        <div className={s.postsBlock}>
                <h3>My Post</h3>
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button> Remove Post </button>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;
