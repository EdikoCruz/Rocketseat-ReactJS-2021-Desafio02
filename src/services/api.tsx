import axios from 'axios';

import { GenreResponseProps, MovieProps } from './types';
export type { GenreResponseProps, MovieProps };

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export function getGenres(): Promise<GenreResponseProps[]> {
  return api.get<GenreResponseProps[]>('genres').then(response => response.data);
}

export function getGenre(genreId: number): Promise<GenreResponseProps>  {
  return api.get<GenreResponseProps>(`genres/${genreId}`).then(response => response.data);
}

export function getMovieByGenreId(genreId: number): Promise<MovieProps[]> {
  return api.get<MovieProps[]>(`movies/?Genre_id=${genreId}`).then(response => response.data);
}
