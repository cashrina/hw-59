import React, {useState} from "react";
import {Movie} from "../../types.ts";

interface Props {
    onSubmit: (movie: Movie) => void;
}
const Task1Form: React.FC<Props> = ({onSubmit}) => {
    const[MovieMutation, setMovieMutation] = useState<Movie>({
        id: '',
        title: '',
    });

    const changeMovies = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMovieMutation((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    const onFormSubmit =(event:React.FormEvent) => {
        event.preventDefault();

        onSubmit({
            ...MovieMutation,
            id: Math.random().toString(),
        });

        setMovieMutation({
            id: '',
            title: '',
        });
    };

    return (
        <form className="form-inline" onSubmit={onFormSubmit}>
            <div className="form-group mb-2 d-flex align-items-center">
                <div className="form-group mb-2 me-3">
                    <label className="sr-only"></label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Movie"
                        name="title"
                        id="movie"
                        style={{cursor: "pointer"}}
                        onChange={changeMovies}
                        value={MovieMutation.title}/>
                </div>
                <button type="submit" className="btn btn-outline-warning mb-2 my-4">Add</button>
            </div>
        </form>
    );
};

export default Task1Form;