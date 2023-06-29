import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        //SET USER INFO TO LOCAL STORAGE
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInffo', JSON.stringify(action.payload))
        },
        //REMOVE USER INFO OUT OF LOCAL STORAGE
        clearCredentials: (state, action) =>{
            state.userInfo = null;
            localStorage.removeItem('userInfo')
        }
    }
})

export const {
    setCredentials,
    clearCredentials
} = authSlice.actions;

export default authSlice.reducer;

