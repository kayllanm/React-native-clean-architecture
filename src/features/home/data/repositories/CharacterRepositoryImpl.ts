import { store } from "../../../../store";
// import { useDispatch } from 'react-redux';
import { CharacterDto } from "../../domain/models/CharacterDto";
import { CharacterRepository } from "../../domain/repositories/CharacterRepository";
import { fetchCharacters } from "../reducers/CharacterReducer";
// import { characterApi } from "../api/CharacterApi";

export class CharacterRepositoryImpl implements CharacterRepository {
     async getAllCharacters(): Promise<void> {
        await store.dispatch(fetchCharacters());
    }
}