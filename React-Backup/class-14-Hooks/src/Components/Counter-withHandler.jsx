import React, { useState } from 'react'

const Counter = () => {
    let [counter, setCounter] = useState(0);
    let decrHandler = () => {
        setCounter(counter - 1)
    }
    let incrHandler = () => {
        setCounter(counter + 1)
    }
    return (
        <div>
            <h1>Counter Value:{counter}</h1>
            <button onClick={decrHandler}>DECR</button>
            <button onClick={incrHandler}>INCR</button>
        </div>
    )
}

export default Counter
