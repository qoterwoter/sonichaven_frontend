import artistReducer from "./features/reducers/artistSlice";
import {combineReducers} from "@reduxjs/toolkit";
import newsReducer from "./features/reducers/newsSlice";

const rootReducer = combineReducers({
  artist: artistReducer,
  news: newsReducer
})

export default rootReducer
