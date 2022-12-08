import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    
});

export const deleteContacts = createAsyncThunk('contacts/deleteContact',
    async (deleteId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${deleteId}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    
    });

    export const addContacts = createAsyncThunk('contacts/addContact',
    async (contactInfo, thunkAPI) => {
        try {
            const response = await axios.post(`/contacts`, contactInfo);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    
});
