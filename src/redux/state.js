import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
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

            newMessageBody: ''
        }
    },

    _callSubsriber() {
        console.log('change')
    },

    getState() {
        return this._state;
    },
  
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText
        };
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText =  "";
        this._callSubsriber(this._state);
    },

    updateNewText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubsriber(this._state);
    },

    subscribe(observer) {
        this._callSubsriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubsriber(this._state);

    }
}
export default store;