import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer'
import userReducer from "./users-reducer";
import setAuthUserData from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer,
    auth: setAuthUserData,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;