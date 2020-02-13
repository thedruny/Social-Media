// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";

// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 { id: 1, message: 'Hi, how are you', likesCount: 12 },
//                 { id: 2, message: 'Hi guys, it\'s my first post', likesCount: 34 },
//                 { id: 3, message: 'I love this year 2019', likesCount: 3 },
//                 { id: 4, message: 'Post Malone best writer', likesCount: 123 }
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             dialogs: [
//                 { id: 1, name: 'Andrey' },
//                 { id: 2, name: 'Kolya' }
//             ],
//             messages: [
//                 { id: 1, message: 'Hi' },
//                 { id: 2, message: 'How are u' },
//                 { id: 3, message: 'Smile' },
//                 { id: 4, message: 'Lol' }
//             ],
//             newMessageBody: ''
//         },
//     },

//     _callSubscriber() {
//         console.log('state changed')
//     },

//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },

//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._callSubscriber(this._state);
//     }
// }

// export default store;
// window.store = store;


