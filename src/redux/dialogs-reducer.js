let initialState = {
    messages: [
        {message: "Hi", id: 1},
        {message: "Fck you", id: 2},
        {message: "how are you", id: 3},
        {message: "i will learn React", id: 4},
        {message: "how are you", id: 5},
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

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY':
            return { 
                ...state,
                newMessageBody: action.body
            }
        case 'SEND_MESSAGE':
            let body = state.newMessageBody
            return { 
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id:6, message: body}] 
            }
            
        default:
            return state
    }
}

export const sendMessageCreator = () => {
    return {
        type: 'SEND_MESSAGE'
    }
}

export const updateNewMessageBodyCreator = (text) => {
    return {type: 'UPDATE_NEW_MESSAGE_BODY', body: text}
}

export default dialogsReducer;