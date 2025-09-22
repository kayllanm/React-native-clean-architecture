import { configureStore } from '@reduxjs/toolkit';
import { characterApi } from '../features/home/data/services/CharacterApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    // Add the generated RTK Query API reducer.
    // The key here, `characterApi.reducerPath`, is specified in the service file.
    [characterApi.reducerPath]: characterApi.reducer,
    // Add other application slices here.
    // counter: counterReducer,
  },
  // Add the RTK Query middleware to enable caching, invalidation, and more.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(characterApi.middleware),
});

setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself.
// This is crucial for type-safe usage with TypeScript.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;