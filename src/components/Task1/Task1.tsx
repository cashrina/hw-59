import  { useState } from "react";
import Task1Form from "./Task1Form.tsx";
import { Movie } from "../../types.ts";
import Movies from "./Movies.tsx";

const Task1 = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    const addMovie = (item: Movie) => {
        setMovies((prev) => [...prev, item]);
    };

    const removeMovie = (id: string) => {
        setMovies((prev) => prev.filter((movie) => movie.id !== id));
    };

    return (
        <div>
            <div className="ms-4 mt-2 text-danger">
                Task 1
                <Task1Form onSubmit={addMovie} />
            </div>
            <div>
                <Movies movies={movies} onRemove={removeMovie} />
            </div>
        </div>
    );
};

export default Task1;