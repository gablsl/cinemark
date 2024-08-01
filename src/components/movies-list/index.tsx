'use client';

import { Description, MoviesLi } from './styles';
import { useMovies } from '@/libs/fetchTmdbData';

export function MoviesList() {
  const { data, isLoading } = useMovies();

  if (isLoading) return <p>Os filmes estão sendo carregados...</p>;

  const movies = data?.results || [];

  return (
    <ul>
      {movies.map((movie) => (
        <MoviesLi key={movie.id}>
          <p>{movie.title}</p>
          <Description>{movie.overview}</Description>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={`capa do ${movie.title}`}
          />
          <p>{movie.vote_average}</p>
        </MoviesLi>
      ))}
    </ul>
  );
}
