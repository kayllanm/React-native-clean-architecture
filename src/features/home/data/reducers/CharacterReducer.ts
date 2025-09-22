// store.js
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CharactersApi from '../../../../core/api/CharactersApi';
import { ListOfCharacters } from '../../../../core/entities/Character';

// Create a thunk to handle the async API call
export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async (_, { rejectWithValue }) => {
    try {
      const response = await CharactersApi.getCharacters();
      const formattedData = response.data as ListOfCharacters;
      return formattedData.results;
    } catch (error) {
      console.error('API Error:', error);
      return rejectWithValue('Failed to fetch characters.');
    }
  }
);

import { Character } from '../../../../core/entities/Character';
import { toCharacterDto } from '../formatters/toCharacterDto';
import { CharacterDto } from '../../domain/models/CharacterDto';

interface CharactersState {
  list: CharacterDto[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CharactersState = {
  list: [],
  status: 'idle',
  error: null,
};

// Define the characters slice
export const charactersSlice = createSlice({
  name: 'characters', // (NOTE: This corresponds with => "characters/fetchCharacters")
  initialState,
  reducers: {},
  // Use extraReducers to handle the state transitions of our async thunk
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = toCharacterDto(action.payload); // Store the fetched data
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = 'failed';
        // state.error = action.payload; // Store the error message
      });
  },
});

