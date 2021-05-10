import { ReactReduxContext } from "react-redux";
import {createStore,applyMiddleware,combineReducers} from "redux";
import BookReducer from "./reducer/bookReducer.js";
import UserReducer from "./reducer/userReducer.js";

import logger from "redux-logger";
import thunk from "redux-thunk";
const thunkMiddleware=require("redux-thunk").default;

const mainReducer=combineReducers(
{
    user:UserReducer,
pass:BookReducer
}
);
const store=createStore(mainReducer,applyMiddleware(thunkMiddleware));

export default store;


