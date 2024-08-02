/* eslint-disable @next/next/no-img-element */
import { MovieType } from '@/@types/movies';
import {
  Button,
  HiddenContent,
  MovieCardContainer,
  MovieInfos,
} from './styles';
import { StarRating } from '@/components/star-rating';

export function MovieCard({
  id,
  title,
  overview,
  poster_path,
  vote_average,
}: MovieType) {
  return (
    <MovieCardContainer key={id}>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={`capa do ${title}`}
        />
      </div>
      <MovieInfos>
        <p>{title}</p>
        {vote_average > 0 && <StarRating rating={vote_average} />}
        {overview && (
          <HiddenContent>
            <p className='description'>
              {overview.length > 100
                ? `${overview.substring(0, 100)}...`
                : overview}
            </p>
            <Button>Ver mais</Button>
          </HiddenContent>
        )}
      </MovieInfos>
    </MovieCardContainer>
  );
}
