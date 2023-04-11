import artistReducer from "./features/reducers/artistSlice";
import {combineReducers} from "@reduxjs/toolkit";
import newsReducer from "./features/reducers/newsSlice";
import userReducer from "./features/reducers/userSlice";

const rootReducer = combineReducers({
  artist: artistReducer,
  news: newsReducer,
  user: userReducer,
})

export default rootReducer
