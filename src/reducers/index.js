import { createSlice } from '@reduxjs/toolkit'
import {createNotes, getNotes} from "../thunks";

const initialState = {

    notes:[

    ]
}

export const notesSlice = createSlice({
    name: 'notesApp',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(createNotes.fulfilled, (state, action) => {

         

            state.notes=[...action.payload]

            // 


        }).addCase(createNotes.pending,(state,action)=>{



        }).addCase(createNotes.rejected,(state,action)=>{
            state.notes.length=0;


        });

        // Get Notes ---->

        builder.addCase(getNotes.fulfilled, (state, action) => {

            state.notes.push(...action.payload)  /// destructring the array and pushing it to notes object -----



            // Her we will get the data ---->


        }).addCase(getNotes.pending,(state,action)=>{


        }).addCase(getNotes.rejected,(state,action)=>{


        })

    },
})

// Action creators are generated for each case reducer function
export const {  } = notesSlice.actions

export default notesSlice.reducer