import { createSlice } from '@reduxjs/toolkit'

const sliceReducers = createSlice({
        name: 'user',
        initialState: {
            connected: false,
            user: {}
        },
        reducers:{
            userReducer: (state, action)=>{
                state.connected= action.payload.connected
                state.user= action.payload.user
            }
        }
})

export const { userReducer } = sliceReducers.actions
export default sliceReducers.reducer