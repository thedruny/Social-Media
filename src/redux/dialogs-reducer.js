const SEND_MESSAGE = 'social-network/dialogs/SEND_MESSAGE';

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