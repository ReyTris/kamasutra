import React from 'react';
import Post from '../MyPosts/Post/Post'
import s from './TwoPosts.module.css'

const TwoPost = ({posts}) => {

    let postElements = posts.map(item => {
        return <Post message={item.message}/> 
    })

    return (
        <div>
                two Post
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

export default TwoPost;
