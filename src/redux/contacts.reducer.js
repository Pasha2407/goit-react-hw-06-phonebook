import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = {
    contacts: [
        { id: '1', name: 'Alisa', number: '+3800000' },
        { id: '2', name: 'Robert', number: '+380000' }
    ],
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts = [...state.contacts, action.payload];
            },
            prepare(name, number) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid(),
                    },
                };
            },
        },
        deleteContact(state, action) {
            state.contacts = state.contacts.filter(item => item.id !== action.payload);
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
