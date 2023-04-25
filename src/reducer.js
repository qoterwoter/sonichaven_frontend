import artistReducer from "./features/reducers/artistSlice";
import {combineReducers} from "@reduxjs/toolkit";
import newsReducer from "./features/reducers/newsSlice";
import userReducer from "./features/reducers/userSlice";
import serviceReducer from "./features/reducers/serviceSlice";
import shopCartReducer from "./features/reducers/shopCartSlice";
import notificationSlice from "./features/reducers/notificationSlice";

const rootReducer = combineReducers({
  artist: artistReducer,
  news: newsReducer,
  user: userReducer,
  services: serviceReducer,
  shopCart: shopCartReducer,
  notifications: notificationSlice
})

export default rootReducer
