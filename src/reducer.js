import releasesSlice from "./features/reducers/releasesSlice";
import {combineReducers} from "@reduxjs/toolkit";
import newsReducer from "./features/reducers/newsSlice";
import userReducer from "./features/reducers/userSlice";
import serviceReducer from "./features/reducers/serviceSlice";
import shopCartReducer from "./features/reducers/shopCartSlice";
import notificationSlice from "./features/reducers/notificationSlice";
import ordersSlice from "./features/reducers/ordersSlice";

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
