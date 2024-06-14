import React from 'react';
import { Movie } from '../../types';
import MoviesItem from './MoviesItem';

interface Props {
    movies: Movie[];
    onRemove: (id: string) => void;
}

const Movies: React.FC<Props> = React.memo(({ movies, onRemove }) => {

    return (
        <div className="container-fluid">
            {movies.map((movie) => (
                <MoviesItem key={movie.id} moviesItem={movie} onRemove={() => onRemove(movie.id)} />
            ))}
        </div>
    );
}, (prevProps, nextProps) => {
    return prevProps.movies === nextProps.movies;
});

export default Movies;