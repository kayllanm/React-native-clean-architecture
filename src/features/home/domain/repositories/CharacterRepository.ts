import { CharacterDto } from "../models/CharacterDto";

export interface CharacterRepository {
  getAllCharacters(): Promise<void>;
}