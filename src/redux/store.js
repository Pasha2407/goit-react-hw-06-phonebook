import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts.reducer';
import { filterReducer } from './filter.reducer';

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ["conatacts"]
};

export const store = configureStore({
    reducer: {
        contactsStore: persistReducer(persistConfig, contactsReducer),
        filterStore: filterReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);