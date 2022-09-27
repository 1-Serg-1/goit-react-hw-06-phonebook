import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
    },
    reducers: {
        addContact(state, action) {
            state.contacts.unshift(action.payload);
        },
        deleteContact(state, action) {
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        },
    },
});

const persistConfig = {
    key: 'contacts',
    version: 1,
    storage,
};

export const contactsReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter:'',
    },
    reducers: {
        filter(state, action) {
            state.filter = action.payload;
        },
        
    },
});

export const { filter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;


// Selectors

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.filter.filter;

