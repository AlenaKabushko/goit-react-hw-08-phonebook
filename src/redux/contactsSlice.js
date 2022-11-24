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
            console.log('action payload', action.payload.id)
            state.items = action.payload;
            state.isLoading = false;
        })
        .addCase(deleteContacts.fulfilled, (state, action) => {
            console.log('action payload id', action.payload.id)
            state.items = state.items.filter((item) => item.id !== action.payload.id);
            
            state.isLoading = false;
        })
        .addCase(addContacts.fulfilled, (state, action) => {
            console.log('action payload id', action.payload.id)
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

