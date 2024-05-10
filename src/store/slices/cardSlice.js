import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cards:[]

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
            prepare(boardID, cardID, cardTitle){
                return{
                    payload:{boardID, cardID, cardTitle}
                }
            },
            reducer(state, action){
                const boardID = action.payload.boardID
                const cardID = action.payload.cardID
                const cardTitle = action.payload.cardTitle

                state.cards = [...state.cards , {boardID, cardID, cardTitle}]
            }
        }
    }
})

export const { createCard } = cardSlice.actions;

export default cardSlice.reducer;