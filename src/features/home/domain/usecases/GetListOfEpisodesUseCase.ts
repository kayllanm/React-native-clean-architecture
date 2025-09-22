import { EpisodeDto } from "../models/EpisodeDto";
import { EpisodeRepository } from "../repositories/EpisodeRepository";

export class GetListOfEpisodesUseCase {
  constructor(private episodeRepository: EpisodeRepository) {}

  async execute(): Promise<EpisodeDto[]> {
    return await this.episodeRepository.getAllEpisodes();
  }
}