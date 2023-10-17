import { createSlice } from '@reduxjs/toolkit'

const sliceReducers = createSlice({
        name: 'sidebar',
        initialState: {
            sidebarShow: false
        },
        reducers:{
            sidebarShowReducer: (state, action)=>{
                state.sidebarShow= action.payload.sidebarShow
            }
        }
})

export const { sidebarShowReducer } = sliceReducers.actions
export default sliceReducers.reducer