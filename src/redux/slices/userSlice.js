import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: []
    },
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload)
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter((user)=>
            user.id !== action.payload)
        },
        editUser: (state, action) => {
            state.users.find((user) => user.id === action.payload)
        }
    }
})
 
export const {addUser, deleteUser, editUser} = userSlice.actions;
export default userSlice.reducer;