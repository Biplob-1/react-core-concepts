import { useState } from "react";

export default function Team() {
    const [count, setCount] = useState(11);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '10px'
    }
    return (
        <div style={teamStyle}>
            <h3>Team: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}