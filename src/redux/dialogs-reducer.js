let initialState = {
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

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY':
            state.newMessageBody = action.body;
            return state
        case 'SEND_MESSAGE':
            let body = state.newMessageBody
            state.messages.push({id:6, message: body});
            state.newMessageBody = '';
            return state
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