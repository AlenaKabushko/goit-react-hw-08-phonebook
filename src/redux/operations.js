import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://637d0b3e16c1b892ebc65c87.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contactsItem');
            console.log('response', response.data);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    
});

export const deleteContacts = createAsyncThunk('contacts/deleteContact',
    async (deleteId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contactsItem/${deleteId}`);
            console.log('response', response.data);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    
    });

    export const addContacts = createAsyncThunk('contacts/addContact',
    async (contactInfo, thunkAPI) => {
        try {
            const response = await axios.post(`/contactsItem`, contactInfo);
            console.log('response', response.data);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    
});

// console.log('responce', response)