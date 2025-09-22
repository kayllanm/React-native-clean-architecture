import { useState, useEffect } from 'react';
import { GetListOfCharactersUseCase } from '../../domain/usecases/GetListOfCharactersUseCase';
import { CharacterRepositoryImpl } from '../../data/repositories/CharacterRepositoryImpl';
import { useSelector } from 'react-redux';
import { EpisodeRepositoryImpl } from '../../data/repositories/EpisodesRepositoryImpl';
import { GetListOfEpisodesUseCase } from '../../domain/usecases/GetListOfEpisodesUseCase';
import { EpisodeDto } from '../../domain/models/EpisodeDto';

export const useCharacterViewModel = () => {

  const characters = useSelector((state: any) => state.characters.list);
  const status = useSelector((state: any) => state.characters.status);
  const error = useSelector((state: any) => state.characters.error);

  useEffect(() => {
    (async () => {
      try {
        const repo = new CharacterRepositoryImpl();
        const getListOfCharactersUseCase = new GetListOfCharactersUseCase(repo);
        getListOfCharactersUseCase.execute();
        // setCharacters(data);
      } catch (err) {
        // setError(err);
      } finally {
        // setLoading(false);
      }
    })();
  }, []);

  return {
    characters,
    error,
    // loading,
  };
};

export const useEpisodeViewModel = () => {

  const [episodes, setEpisodes] = useState<EpisodeDto[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

    useEffect(() => {
    (async () => {
      try {
         setLoading(true);
        const repo = new EpisodeRepositoryImpl();
        const getListOfEpisodesUseCase = new GetListOfEpisodesUseCase(repo);
        const data = await getListOfEpisodesUseCase.execute();
        setEpisodes(data);
      } catch (err) {
        setLoading(false);
        setError('Error fetching episodes');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return {
    episodes,
    error,
    isLoading,
  };
};
