import { configureStore } from '@reduxjs/toolkit'
import notesSlice from "../reducers";

export const store = configureStore({
    reducer: {
        notes:notesSlice
    },
})