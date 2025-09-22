import { Character } from '../entities/Character';
import { BaseQueryApi, createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ListOfCharacters } from '../entities/ListOfCharacters';
import { CharacterDto } from '../../domain/models/CharacterDto';

const withAuth = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/',
    prepareHeaders: (headers, { getState }) => {
      const token = ''
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  })

  return baseQuery(args, api, extraOptions)
}

// Logging middleware that wraps authentication middleware
const withLogging = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
  console.log('Request:', args)

  const startTime = Date.now()
  const result = await withAuth(args, api, extraOptions)
  const duration = Date.now() - startTime

  if (result.error) {
    console.error('Error:', result.error, `(${duration}ms)`)
  } else {
    console.log('Response:', result.data, `(${duration}ms)`)
  }

  return result
}

// Error handling middleware that wraps logging middleware
const withErrorHandling = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
  try {
    const result = await withLogging(args, api, extraOptions)

    if (result.error) {
      if (result.error.status === 401) {
        // api.dispatch({ type: 'auth/logout' })
      }
    }

    return result
  } catch (error) {
    return { error: { status: 'FETCH_ERROR', error: String(error) } }
  }
}

export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: withErrorHandling,
  endpoints: (builder) => ({
    getAllCharacters: builder.query<CharacterDto[], void>({
      query: () => `character`,
      transformResponse: (rawResponse: { info: { count: number; pages: number; next: string; prev: string }, results: Character[] }) => {
        const characters: CharacterDto[] = [ ];
        rawResponse.results.forEach((ch: Character) => {
            characters.push({
                userId: ch.id,
                characterName: ch.name,
                status: ch.status,
                species: ch.species,
                type: ch.type
            })
        });
        return characters;
      },
    }),
  }),
});

export const { useGetAllCharactersQuery } = characterApi;