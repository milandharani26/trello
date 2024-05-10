import { StarSharp } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    lists:[]

    // cardId,
    // listID
    //title,
    // description

    //currentList ?????
}

const listsSlice = createSlice({
    name:"list",
    initialState,
    reducers:{

        createList :{
            prepare(cardID, listID, title, description){
                return{
                    payload:{cardID, listID, title, description}
                }
            },

            reducer(state, action){
                const cardID = action.payload.cardID
                const listID = action.payload.listID
                const title = action.payload.title
                const description = action.payload.description

                state.lists = [...state.lists , {cardID, listID, title, description}]
            }
        }
    }
})


export const { createList } = listsSlice.actions;

export default createList.reducer