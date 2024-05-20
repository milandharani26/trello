import { createSlice } from "@reduxjs/toolkit";
import { createUniqueID } from "../../utils/halper";

const initialState = {
    users:[],
    currentUser:""

    // userID, 
    // email, 
    // password
    //isloggedIn ???
};


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

        registerUser:{
            prepare(userID, email, password){
                return {
                    payload:{userID, email, password}
                };
            },

            reducer(state, action){
                const userID = action.payload.userID
                // const userID = createUniqueID()
                const email = action.payload.email
                const password = action.payload.password

                state.users = [...state.users , {userID, email, password, isloggedIn:false}]
            }
        },

        loginUser(state, action){
            const foundUser = state.users.find(user => user.userID === action.payload);
                if (foundUser) {
                    foundUser.isloggedIn = true;
                    state.currentUser = foundUser;
                }

                // state.users = [...state.users, ]
        },

        logoutUser(state, action){
            const foundUser = state.users.find(user => user.userID === action.payload);
            if (foundUser) {
                foundUser.isloggedIn = false;
                state.currentUser = "";
            }
        }

        

}});




export const { registerUser,loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
