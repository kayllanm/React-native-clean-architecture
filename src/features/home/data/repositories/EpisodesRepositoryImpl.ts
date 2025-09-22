import EpisodesApi from "../../../../core/api/EpisodesApi";
import { EpisodeDto } from "../../domain/models/EpisodeDto";
import { EpisodeRepository } from "../../domain/repositories/EpisodeRepository";
import { toEpisodeDto } from "../formatters/toEpisodeDto";

export class EpisodeRepositoryImpl implements EpisodeRepository {
     async getAllEpisodes(): Promise<EpisodeDto[]> {
        const results = await EpisodesApi.getEpisodes();
        const formattedData = toEpisodeDto(results.data.results);
        return formattedData;
    }
}