import { createStore, combineReducers } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer'
import userReducer from "./users-reducer";
import setAuthUserData from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer,
    auth: setAuthUserData
});

let store = createStore(reducers);

export default store;