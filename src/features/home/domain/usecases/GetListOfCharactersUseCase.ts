import { CharacterDto } from "../models/CharacterDto";
import { CharacterRepository } from "../repositories/CharacterRepository";

export class GetListOfCharactersUseCase {
  constructor(private characterRepository: CharacterRepository) {}

  execute(): void {
    this.characterRepository.getAllCharacters();
  }
}