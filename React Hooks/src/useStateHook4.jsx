import React from "react";
import './App.css'
import { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count => count + 1) // 1
        setCount(count => count + 1) // 2
        setCount(count => count + 1) // 3
        setCount(count => count + 1) // 4
    }

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={increaseCount}>Increase by 4</button>
        </>
    )
}

export default App