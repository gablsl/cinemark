import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { MovieResponse } from '@/@types/movies';

const fetchMovies = async (): Promise<MovieResponse> => {
  const response = await axios.get<MovieResponse>(
    'https://api.themoviedb.org/3/discover/movie',
    {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        language: 'pt-BR',
      },
    }
  );
  return response.data;
};

export const useMovies = () => {
  return useQuery<MovieResponse>({
    queryFn: fetchMovies,
    queryKey: ['movies'],
  });
};
