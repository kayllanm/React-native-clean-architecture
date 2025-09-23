import { configureStore } from "@reduxjs/toolkit";
import { charactersSlice } from "../features/home/data/reducers/CharacterReducer";
 
export const store = configureStore({
  reducer: {
    characters: charactersSlice.reducer,
  },
});
 