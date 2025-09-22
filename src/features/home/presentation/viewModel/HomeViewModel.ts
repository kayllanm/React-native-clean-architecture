import { useGetAllCharactersQuery } from '../../data/services/CharacterApi';

export const useHomeViewModel = () => {
  const { data: characters, error, isLoading } = useGetAllCharactersQuery();

  return {
    characters,
    error,
    isLoading,
  };
};
