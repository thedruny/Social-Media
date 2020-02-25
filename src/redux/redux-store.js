import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer'
import userReducer from "./users-reducer";
import setAuthUserData from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer,
    auth: setAuthUserData
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;