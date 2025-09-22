import { Episode } from "../../../../core/entities/Episode";
import { EpisodeDto } from "../../domain/models/EpisodeDto";

export const toEpisodeDto = (data: any): EpisodeDto[] => {
    const episodes: EpisodeDto[] = [ ];
    data.forEach((ep: Episode) => {
        episodes.push({
            ep_id: ep.id,
            ep_name: ep.name,
            ep_air_date: ep.air_date,
            episode: ep.episode
        })
    });
  return episodes;
};
