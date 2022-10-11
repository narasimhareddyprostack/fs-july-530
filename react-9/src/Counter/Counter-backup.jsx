import React from 'react'
import { decrAction, incrAction } from '../redux/counter/counter.action'
import { useDispatch, useSelector } from 'react-redux'
const Counter = () => {
    let counter = useSelector((state) => {
        return state
    })
    let dispatch = useDispatch()
    let decrHandler = () => {
        //dispactch action
        dispatch(decrAction())
    }
    let incrHandler = () => {
        dispatch(incrAction())
    }
    return (
        <div>
            <pre>{JSON.stringify(counter)}</pre>
            <button onClick={decrHandler}>DECR</button>
            {
                counter.qty
            }
            <button onClick={incrHandler}>INCR</button>
        </div>
    )
}

export default Counter
