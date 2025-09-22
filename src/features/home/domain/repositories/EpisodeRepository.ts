import { EpisodeDto } from "../models/EpisodeDto";

export interface EpisodeRepository {
  getAllEpisodes(): Promise<EpisodeDto[]>;
}