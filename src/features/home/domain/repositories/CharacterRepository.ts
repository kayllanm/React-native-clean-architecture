import { Character } from "../../data/entities/Character";

export interface CharacterRepository {
  getAllCharacters(): Promise<Character[]>;
}