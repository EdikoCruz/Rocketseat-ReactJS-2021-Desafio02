import { useState, useEffect } from 'react';

import { MovieCard } from './MovieCard';

import {
  GenreResponseProps,
  MovieProps,
  getGenre,
  getMovieByGenreId,
} from '../services/api';

interface ContentProps {
  selectedGenreId: number
}

export function Content({selectedGenreId}:ContentProps) {

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  useEffect(() => {
    getMovieByGenreId(selectedGenreId).then(setMovies);
    getGenre(selectedGenreId).then(setSelectedGenre);
  }, [selectedGenreId]);

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  )
}