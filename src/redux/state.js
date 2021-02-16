
let rerenderEntireTree = () => {
    console.log('change')
}

let state = {
    profilePage: {
        posts: [
            {message: "Hi, how are you", id: 1},
            {message: "It's my first post", id: 2},
        ],
        newPostText: "Samson"
    },
    
    dialogsPage: {
        messages: [
            {message: "Hi", id: 1},
            {message: "Fck you", id: 1},
            {message: "how are you", id: 1},
            {message: "i will learn React", id: 1},
            {message: "how are you", id: 1},
        ],

        dialogs: [
            {name: "Dimych", id:1},
            {name: "Andrey", id:2},
            {name: "Sveta", id:3},
            {name: "Sasha", id:4},
            {name: "Viktor", id:5},
            {name: "Valera", id:6},
        ],
    }
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText
    };
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText =  "";
    rerenderEntireTree();
    
}

export const updateNewText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;