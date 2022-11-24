import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContacts, addContacts } from './operations'

// const fulfilledReducer = state => {
//   state.isLoading = false;
//   state.error = null;
// };

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
            isLoading: false,
            error: null,
        },
    extraReducers: builder => builder
        .addCase(fetchContacts.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(deleteContacts.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(addContacts.pending, (state, action) => {
            state.isLoading = true;
    })
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        })
        .addCase(deleteContacts.fulfilled, (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
            
            state.isLoading = false;
        })
        .addCase(addContacts.fulfilled, (state, action) => {
            state.items.push(action.payload);
            
            state.isLoading = false;
        })
    .addCase(fetchContacts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
    })
    .addCase(deleteContacts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
    })
     .addCase(addContacts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
    })
});

export const contactsReducer = contactsSlice.reducer; 

