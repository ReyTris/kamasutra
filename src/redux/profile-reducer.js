 
 
 let initialState = {
    posts: [
        {message: "Hi, how are you", id: 1},
        {message: "It's my first post", id: 2},
    ],
    newPostText: "Samson"
}
 
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 5,
                message: state.newPostText
            };
            state.posts.push(newPost)
            state.newPostText =  "";
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
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

export default profileReducer