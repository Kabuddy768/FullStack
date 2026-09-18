// Greet.jsx
import { useState } from "react";
import AxiosInstance from './axios.jsx';

const Greet = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleClick = () => {
        AxiosInstance.get('greet/', {
            params: { name: name }
        }).then((res) => {
            setMessage(res.data.message);
        });
    };

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <button onClick={handleClick}>Greet</button>
            <p>{message}</p>
        </div>
    );
};

export default Greet;