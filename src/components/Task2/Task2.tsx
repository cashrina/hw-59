import { useEffect, useState } from "react";
import Joke from "./Joke";

const Task2 = () => {
    const [joke, setJoke] = useState("");

    useEffect(() => {
        const fetchJoke = async () => {
            const response = await fetch("https://api.chucknorris.io/jokes/random");
            if (response.ok) {
                const data = await response.json();
                setJoke(data.value);
            }
        };
        fetchJoke().catch(e => console.error(e));
    }, []);

    const fetchNewJoke = async () => {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        if (response.ok) {
            const data = await response.json();
            setJoke(data.value);
        }
    };

    return (
        <div className="mt-2 text-danger">
            Task2
            <h5 className="mt-3 px-2 text-black">Click on the button if you want to get a joke</h5>
            <Joke joke={joke} fetchJoke={fetchNewJoke} />
        </div>
    );
};

export default Task2;

