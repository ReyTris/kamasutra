import { usersAPI } from "../api/api";

let SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    posts: [
        {message: "Hi, how are you", id: 1},
        {message: "It's my first post", id: 2},
    ],
    newPostText: "Samson",
    profile: null
}
 
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                message: state.newPostText
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        }
            
        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        
        case 'SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
            
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}

export const updateNewTextActionCreator = (text) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text}
}
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    });
} 

export default profileReducer