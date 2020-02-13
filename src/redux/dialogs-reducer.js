const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Kolya' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are u' },
        { id: 3, message: 'Smile' },
        { id: 4, message: 'Lol' }
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                messages: [...state.messages],
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 5, message: body }]
            }
        default:
            return state;
    }
};


export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
});



export default dialogsReducer;