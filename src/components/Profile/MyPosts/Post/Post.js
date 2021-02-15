import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    debugger;
    return (
        <div>
            <div className={s.item}>
                <img src="https://resizer.mail.ru/p/0c45ae3d-306a-5054-aca8-07c6b247f8d1/AAACFRljFUym2wtEnxZAoXZv2hazyD9Dev6M4g47MxQpqzg6K2SD6j9D5VU-RVCFqPfJFGym6GnwPe57Wf56A2PaEWQ.jpg"/>
                {props.message}
                <div>
                    <span>like</span>
                </div>
            </div>
        </div>
    )
}

export default Post;
