import { createSlice } from "@reduxjs/toolkit";
import { createUniqueID } from "../../utils/halper";


const initialState = {
    lists:[],
    currentList:"",

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
            prepare(cardID, title, description){
                return{
                    payload:{cardID, title, description}
                }
            },

            reducer(state, action){
                const cardID = action.payload.cardID
                // const listID = action.payload.listID
                const listID = createUniqueID()
                const title = action.payload.title
                const description = action.payload.description

                state.lists = [...state.lists , {cardID, listID, title, description}]
            }
        }
    }
})


export const { createList } = listsSlice.actions;

export default listsSlice.reducer