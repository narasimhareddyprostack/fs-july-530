import React, { useState } from 'react'

const Counter = () => {
    let [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>Counter Value:{counter}</h1>
            <button onClick={() => {
                setCounter(counter - 1)
            }}>DECR</button>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>INCR</button>
        </div>
    )
}

export default Counter
//writing test cases