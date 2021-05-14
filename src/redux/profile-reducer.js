import { usersAPI, profileAPI } from "../api/api";

let SET_USER_PROFILE = "SET_USER_PROFILE";
let SET_STATUS = "SET_STATUS"

let initialState = {
    posts: [
        {message: "Hi, how are you", id: 1},
        {message: "It's my first post", id: 2},
    ],
    profile: null,
    status: ""
}
 
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                message: action.newPostText
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        }
        case 'SET_STATUS': {
            return {
                ...state,
                status: action.status
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

export const addPostActionCreator = (newPostText) => {
    return {
        type: 'ADD-POST', newPostText
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})



export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    });
} 

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    });
} 
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
} 

export default profileReducer