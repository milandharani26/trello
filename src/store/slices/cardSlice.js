import { createSlice } from "@reduxjs/toolkit"
import { createUniqueID } from "../../utils/halper"

const initialState = {
    cards:[],
    currntcardId:""

    // boardID, 
    // cardID, 
    // cardTitle


    //currntcardId
}

const cardSlice = createSlice({
    name:"card",
    initialState,
    reducers:{

        createCard:{
            prepare(boardID, cardTitle){
                return{
                    payload:{boardID, cardTitle}
                }
            },
            reducer(state, action){
                const boardID = action.payload.boardID
                // const cardID = action.payload.cardID
                const cardID = createUniqueID()
                const cardTitle = action.payload.cardTitle

                state.cards = [...state.cards , {boardID, cardID, cardTitle}]
            }
        }
    }
})

export const { createCard } = cardSlice.actions;

export default cardSlice.reducer;