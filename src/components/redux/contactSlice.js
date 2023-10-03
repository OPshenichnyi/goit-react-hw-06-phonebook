import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage'
const { createSlice } = require("@reduxjs/toolkit");


const slice = createSlice({
    name: 'contacts',
    initialState: {
        contacts:[],
    },
    reducers: {
        addContacts(state, action) {
            const checkNameUser = state.contacts.some(user =>
                user.name.toLowerCase() === action.payload.name.toLowerCase())
            if (checkNameUser) {
                alert(`${action.payload.name} is already in contacts`)
                return
            }
            state.contacts.push(action.payload)
        },
        removeContact(state, action) {
            const index = state.contacts.findIndex(user => user.id === action.payload)
            state.contacts.splice(index, 1);
        }

    }
})
export const contactsReducer = slice.reducer
export const { addContacts, removeContact } = slice.actions

const persistConfig = {
    key: 'root',
    storage,
}

export const persistReducerContacts = persistReducer(persistConfig, contactsReducer)


