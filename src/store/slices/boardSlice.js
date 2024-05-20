import { createSlice } from "@reduxjs/toolkit"
import { createUniqueID } from "../../utils/halper"

const initialState = {
    boards:[],
    currentboard:"",

    // userID, 
    // boardID, 
    // boardName
    //currentboard ????
}

const boardSlice = createSlice({
    name:"board",
    initialState,
    reducers:{

        createBoard:{
            prepare(userID, boardName, ){
                return {
                    payload:{userID, boardName}
                }
            },

            reducer(state, action){
                const userID = action.payload.userID
                // const boardID = action.payload.boardID
                const boardID = createUniqueID()
                const boardName = action.payload.boardName

                state.boards = [...state.boards,{userID, boardID, boardName}]
            }
        }
    }
})

export const {createBoard} = boardSlice.actions;

export default boardSlice.reducer;