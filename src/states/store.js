import { configureStore } from "@reduxjs/toolkit"
import sliceReducer from './sliceReducers'
import userReducer from "./userReducers"

const store= configureStore({
  reducer: {
    slice: sliceReducer,
    acount: userReducer
  }
})


export {store}
