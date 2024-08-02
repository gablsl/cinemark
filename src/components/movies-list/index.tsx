'use client';

import { useMovies } from '@/libs/fetchTmdbData';
import { MovieCard } from './movie-card';
import { LoadingContainer, MovieListContainer } from './styles';
import ReactLoading from 'react-loading';

export function MoviesList() {
  const { data, isLoading } = useMovies();

  if (isLoading)
    return (
      <LoadingContainer>
        <ReactLoading type='spin' color='#6046ff' height={'5%'} width={'5%'} />
      </LoadingContainer>
    );

  const movies = data?.results || [];

  return (
    <MovieListContainer>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          overview={movie.overview}
          poster_path={movie.poster_path}
          vote_average={movie.vote_average}
        />
      ))}
    </MovieListContainer>
  );
}
