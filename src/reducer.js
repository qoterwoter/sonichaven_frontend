import artistReducer from "./features/reducers/artistSlice";
import {combineReducers} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  artist: artistReducer
})

export default rootReducer
