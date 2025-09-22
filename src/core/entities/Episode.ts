import { Info } from "./Info";

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

export interface ListOfEpisodes {
  info: Info;
  results: Episode[];
}
