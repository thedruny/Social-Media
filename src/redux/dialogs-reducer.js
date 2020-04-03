const SEND_MESSAGE = 'social-network/dialogs/SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Kolya' }
    ],
    messages: [
        { id: 1, message: 'Hello my friends!' },
        { id: 2, message: 'This is another post.' },
        { id: 3, message: 'Hi, how are you, Zach?' },
        { id: 4, message: 'New message text for post.' }
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 5, message: body }]
            }
        default:
            return state;
    }
};


export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;