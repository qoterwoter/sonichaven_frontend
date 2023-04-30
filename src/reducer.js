import releasesSlice from "./reducers/releasesSlice";
import {combineReducers} from "@reduxjs/toolkit";
import newsReducer from "./reducers/newsSlice";
import userReducer from "./reducers/userSlice";
import serviceReducer from "./reducers/serviceSlice";
import shopCartReducer from "./reducers/shopCartSlice";
import notificationSlice from "./reducers/notificationSlice";
import ordersSlice from "./reducers/ordersSlice";

const rootReducer = combineReducers({
  releases: releasesSlice,
  news: newsReducer,
  user: userReducer,
  services: serviceReducer,
  shopCart: shopCartReducer,
  notifications: notificationSlice,
  orders: ordersSlice,
})

export default rootReducer
