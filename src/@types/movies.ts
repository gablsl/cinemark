export type MovieType = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
};

export type MovieResponse = {
  results: MovieType[];
};
