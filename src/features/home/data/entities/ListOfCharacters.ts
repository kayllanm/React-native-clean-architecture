import { Character } from "./Character";

export interface ListOfCharacters {
    count: number;
    pages: number;
    next: string;
    prev: string;
    results: Character[];
}