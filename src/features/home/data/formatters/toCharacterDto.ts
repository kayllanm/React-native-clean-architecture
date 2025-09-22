import { Character } from "../../../../core/entities/Character";
import { CharacterDto } from "../../domain/models/CharacterDto";

export const toCharacterDto = (data: any): CharacterDto[] => {
    const characters: CharacterDto[] = [ ];
    data.forEach((ch: Character) => {
        characters.push({
            userId: ch.id,
            characterName: ch.name,
            status: ch.status,
            species: ch.species,
            type: ch.type
        })
    });
  return characters;
};
