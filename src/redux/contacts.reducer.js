import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contacts: [],
    filter: ""
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact(state, action) {
            state.contacts = [...state.contacts, action.payload];
        },
        deleteContact(state, action) {
            state.contacts = state.contacts.filter(item => item.id !== action.payload);
        },
        addFilter(state, action) {
            state.filter = action.payload;
        },
    },
});

export const { addContact, deleteContact, addFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
