import React, {useState} from 'react';
import {Movie} from "../../types.ts";

interface MoviesProps {
    moviesItem: Movie;
    onRemove: React.MouseEventHandler<HTMLButtonElement>;
}

const MoviesItem: React.FC<MoviesProps> = ({moviesItem,onRemove}) => {
    const[MovieMutation, setMovieMutation] = useState<Movie>({
        id: '',
        title: moviesItem.title,
    });
    const ChangeMovie = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMovieMutation((prevState) => ({
            ...prevState,
            title: event.target.value
        }));
    };

    return (
        <div className="d-flex align-items-center ms-3">
            <input className="card mb-3 me-2 mt-3 border-warning shadow-lg card-title py-1 px-3"
                   value={`${MovieMutation.title} `}
                   onChange={(event) => ChangeMovie(event)}/>
            <button className="btn btn-outline-danger shadow-lg card-title text-danger ms-3" onClick={onRemove}>X</button>
        </div>

    )
};

export default MoviesItem;