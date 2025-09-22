// import { configureStore } from '@reduxjs/toolkit';
// import { characterApi } from '../features/home/data/api/CharacterApi';
// import { setupListeners } from '@reduxjs/toolkit/query';
// import { episodesApi } from '../features/home/data/api/EpisodesApi';

// export const store = configureStore({
//   reducer: {
//     // Add the generated RTK Query API reducer.
//     // The key here, `characterApi.reducerPath`, is specified in the service file.
//     [characterApi.reducerPath]: characterApi.reducer,
//     [episodesApi.reducerPath]: episodesApi.reducer,
//     // Add other application slices here.
//     // counter: counterReducer,
//   },
//   // Add the RTK Query middleware to enable caching, invalidation, and more.
//   // middleware: (getDefaultMiddleware) =>
//   //   getDefaultMiddleware().concat(characterApi.middleware, episodesApi.middleware),
// });

// setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself.
// This is crucial for type-safe usage with TypeScript.
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
import { configureStore } from "@reduxjs/toolkit";
import api from "../core/api/axios";
import { charactersSlice } from "../features/home/data/reducers/CharacterReducer";

// const customMiddleware = (storeAPI: any) => (next: any) => (action: any) => {
//   if (typeof action === "object" && typeof action.then === "function") {
//     action.then(storeAPI.dispatch);
//   } else {
//     next(action);
//   }
// };
 
export const store = configureStore({
  reducer: {
    characters: charactersSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(customMiddleware),
});
 