import { combineReducers } from "redux";
import postReducer from "./postReducer";

export default combineReducers({
    posts: postReducer,
    //users: userReducer
    // photos: photosReducer
})