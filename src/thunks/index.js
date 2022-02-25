import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";



export const createNotes = createAsyncThunk(
    'notes/createNotes',
    async (data) => {

        const config={
            headers:{
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIxOGRjZTFjZTRmMDM0MTk5MjI3MDg5In0sImlhdCI6MTY0NTc5NjU3N30.cb_jx-n7mvOUC2ZcAOZ8U2AXl6nf76rgHjBETFsu_NM"
            }

        }
        const response = await axios.post("http://localhost:8000/api/notes/addnote",data,config)
        return response.data
    }
)

export const getNotes = createAsyncThunk(
    'notes/getNotes',
    async (data) => {

        const config={
            headers:{
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIxOGRjZTFjZTRmMDM0MTk5MjI3MDg5In0sImlhdCI6MTY0NTc5NjU3N30.cb_jx-n7mvOUC2ZcAOZ8U2AXl6nf76rgHjBETFsu_NM"
            }

        }
        const response = await axios.get("http://localhost:8000/api/notes/fetchallnotes",config)
        return response.data
    }
)