import { Character } from "../../data/entities/Character";
import { CharacterRepository } from "../repositories/CharacterRepository";

export class GetListOfCharactersUseCase {
  constructor(private characterRepository: CharacterRepository) {}

  execute(): Promise<Character[]> {
    return this.characterRepository.getAllCharacters();
  }
}