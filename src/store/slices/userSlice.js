import { createSlice } from "@reduxjs/toolkit";

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
                const email = action.payload.email
                const password = action.payload.password

                state.users = [...state.users , {userID, email, password, isloggedIn:false}]
            }
        },

        loginUser(state, action){

            console.log(state, action, "from  login reducer");

            const foundUser = state.users.find(user => user.userID === action.payload);
                if (foundUser) {
                    foundUser.isloggedIn = true;
                    state.currentUser = foundUser;
                }
        }

}});




export const { registerUser,loginUser } = userSlice.actions;

export default userSlice.reducer;
