import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from './operations'

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
        .addCase(fetchContacts.fulfilled, (state, action) => {
            console.log('action payload', action.payload)
            state.items = action.payload;
            state.isLoading = false;
        })
    .addCase(fetchContacts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
    })
        


        // [fetchContacts.pending](state, action) {console.log(action.payload) },
        // [fetchContacts.fulfilled](state, action) {console.log(action.payload) },
        // [fetchContacts.rejected](state, action) {console.log(action.payload) }
        
        // addContact: {
        //     reducer(state, action) {
        //         console.log('state items for add', state.items)
        //         state.items.push(action.payload);
        //     }
        // },
        // deleteContact: {
        //     reducer(state, action) {
        //         console.log('action.payload for delete', action.payload)
        //         return state.items.filter(item => {
        //             console.log('item.id', item.id)
        //             return item.id !== action.payload
        //         })
        //     }
        // },
    
});

//export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer; 

