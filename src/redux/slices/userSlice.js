import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        
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
            const user = state.users.find((user) => user.id === action.payload.id);
            if(user){
                user.name = action.payload.name;
                user.age = action.payload.age;
                user.email = action.payload.email;
            }
        }
    }
})
 
export const {addUser, deleteUser, editUser} = userSlice.actions;
export default userSlice;