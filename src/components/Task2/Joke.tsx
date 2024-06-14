import React from "react";

interface Props {
    joke: string;
    fetchJoke: () => Promise<void>;
}

const Joke: React.FC<Props> = ({ joke, fetchJoke }) => {
    return (
        <div>
            <button type="button" className="btn btn-info mb-3 my-4 text-light" onClick={fetchJoke}>Get joke</button>
            <p className="px-2 text-black">{joke}</p>
        </div>
    );
};

export default Joke;
