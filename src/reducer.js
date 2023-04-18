import artistReducer from "./features/reducers/artistSlice";
import {combineReducers} from "@reduxjs/toolkit";
import newsReducer from "./features/reducers/newsSlice";
import userReducer from "./features/reducers/userSlice";
import serviceReducer from "./features/reducers/serviceSlice";

const rootReducer = combineReducers({
  artist: artistReducer,
  news: newsReducer,
  user: userReducer,
  services: serviceReducer
})

export default rootReducer
