import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { contactsReducer, filterReducer } from './redusers';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer, 
    },
    middleware(getDefaultMiddleware) {
            return getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            });
        },
});

export const persistor = persistStore(store);