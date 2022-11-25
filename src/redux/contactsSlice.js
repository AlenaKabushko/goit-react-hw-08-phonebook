import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, deleteContacts, addContacts } from './operations'

const allPending = [fetchContacts.pending, deleteContacts.pending, addContacts.pending];
const allFulfilled = [fetchContacts.fulfilled, deleteContacts.fulfilled, addContacts.fulfilled];
const allRejected = [fetchContacts.rejected, deleteContacts.rejected, addContacts.rejected];

const pendingReduser = state => {
    state.isLoading = true;
};

const fulfilledReduser = state => {
    state.isLoading = false;
};

const rejectedReducer = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const fetchContactsReduser = (state, action) => {
    state.items = action.payload;
};

const deleteContactsReduser = (state, action) => {
    state.items = state.items.filter((item) =>
        item.id !== action.payload.id);
    
};

const addContactsReduser = (state, action) => {
    state.items.push(action.payload);
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
            isLoading: false,
            error: null,
        },
    extraReducers: builder => builder
        .addCase(fetchContacts.fulfilled, fetchContactsReduser)
        .addCase(deleteContacts.fulfilled, deleteContactsReduser)
        .addCase(addContacts.fulfilled, addContactsReduser)
        .addMatcher(isAnyOf(...allPending), pendingReduser)
        .addMatcher(isAnyOf(...allFulfilled), fulfilledReduser)
        .addMatcher(isAnyOf(...allRejected), rejectedReducer)
});

export const contactsReducer = contactsSlice.reducer; 

