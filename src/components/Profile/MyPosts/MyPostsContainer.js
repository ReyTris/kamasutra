import React from 'react'
import { connect } from 'react-redux'
import { addPostActionCreator, updateNewTextActionCreator} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'

//обертка для MyPost компоненты



const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewText: (text) => {
            dispatch(updateNewTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }

}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
