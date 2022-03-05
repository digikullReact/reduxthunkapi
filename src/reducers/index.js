import { createSlice } from "@reduxjs/toolkit";
import {
  createNotes,
  deleteNotes,
  getNotes,
  editNotes,
  login,
  signup,
} from "../thunks";

const initialState = {
  notes: [],

};

export const notesSlice = createSlice({
  name: "notesApp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(createNotes.fulfilled, (state, action) => {
       // state.notes.push(action.payload);

        //
      })
      .addCase(createNotes.pending, (state, action) => {})
      .addCase(createNotes.rejected, (state, action) => {});

    // Get Notes ---->

    builder
      .addCase(getNotes.fulfilled, (state, action) => {
        state.notes.push(...action.payload); /// destructring the array and pushing it to notes object -----

        // Her we will get the data ---->
      })
      .addCase(getNotes.pending, (state, action) => {})
      .addCase(getNotes.rejected, (state, action) => {});

    builder
      .addCase(deleteNotes.fulfilled, (state, action) => {
        state.notes = state.notes.filter(
          (ele) => ele._id != action.payload.note._id
        );

        // Her we will get the data ---->
      })
      .addCase(deleteNotes.pending, (state, action) => {})
      .addCase(deleteNotes.rejected, (state, action) => {});

    builder
      .addCase(editNotes.fulfilled, (state, action) => {
        state.notes = state.notes.filter(
          (ele) => ele._id != action.payload.note._id
        );
        state.notes.push(action.payload.note);

        //   state.notes=state.notes.filter(ele=>ele._id!=action.payload.note._id)

        // Her we will get the data ---->
      })
      .addCase(editNotes.pending, (state, action) => {})
      .addCase(editNotes.rejected, (state, action) => {});

    builder
      .addCase(login.fulfilled, (state, action) => {

        localStorage.setItem("token",action.payload.authtoken)
        
       
      })
      .addCase(login.pending, (state, action) => {})
      .addCase(login.rejected, (state, action) => {});


      builder
      .addCase(signup.fulfilled, (state, action) => {
        localStorage.setItem("token",action.payload.authtoken)

        
       
      })
      .addCase(signup.pending, (state, action) => {})
      .addCase(signup.rejected, (state, action) => {});
  },
});

// Action creators are generated for each case reducer function
export const {} = notesSlice.actions;

export default notesSlice.reducer;
