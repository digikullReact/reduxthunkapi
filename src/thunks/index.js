import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";
const url="https://limitless-fortress-44163.herokuapp.com"



export const createNotes = createAsyncThunk(
    'notes/createNotes',
    async (data) => {

        const config={
            headers:{
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIxOGRjZTFjZTRmMDM0MTk5MjI3MDg5In0sImlhdCI6MTY0NTc5NjU3N30.cb_jx-n7mvOUC2ZcAOZ8U2AXl6nf76rgHjBETFsu_NM"
            }

        }
        const response = await axios.post(`${url}/api/notes/addnote`,data,config)
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
        const response = await axios.get(`${url}/api/notes/fetchallnotes`,config)
        return response.data
    }
)

export const deleteNotes = createAsyncThunk(
    'notes/deleteNotes',
    async (id) => {

        const config={
            headers:{
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIxOGRjZTFjZTRmMDM0MTk5MjI3MDg5In0sImlhdCI6MTY0NTc5NjU3N30.cb_jx-n7mvOUC2ZcAOZ8U2AXl6nf76rgHjBETFsu_NM"
            }

        }
        const response = await axios.delete(`${url}/api/notes/deletenote/${id}`,config)
        return response.data
    }
)


export const editNotes = createAsyncThunk(
    'notes/editNotes',
    async (data) => {

        // it should come from local storage
        const config={
            headers:{
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIxOGRjZTFjZTRmMDM0MTk5MjI3MDg5In0sImlhdCI6MTY0NTc5NjU3N30.cb_jx-n7mvOUC2ZcAOZ8U2AXl6nf76rgHjBETFsu_NM"
            }

        }
        const response = await axios.put(`${url}/api/notes/updatenote/${data._id}`,data,config)
        return response.data
    }
)

export const login = createAsyncThunk(
    'notes/login',
    async (data) => {

       
        const response = await axios.post(`${url}/api/auth/login`,data)
        return response.data
    }
)

export const signup = createAsyncThunk(
    'notes/signup',
    async (data) => {

       
        const response = await axios.post(`${url}/api/auth/singup`,data)
        return response.data
    }
)