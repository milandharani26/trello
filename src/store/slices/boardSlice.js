import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    boards:[]

    // userID, 
    // boardID, 
    // boardName

    //currentboardID ????
}

const boardSlice = createSlice({
    name:"board",
    initialState,
    reducers:{

        createBoard:{
            prepare(userID, boardID, boardName){
                return {
                    payload:{userID, boardID, boardName}
                }
            },

            reducer(state, action){
                const userID = action.payload.userID
                const boardID = action.payload.boardID
                const boardName = action.payload.boardName

                state.boards = [...state.boards,{userID, boardID, boardName}]
            }
        }
    }
})

export const {createBoard} = boardSlice.actions;

export default boardSlice.reducer;