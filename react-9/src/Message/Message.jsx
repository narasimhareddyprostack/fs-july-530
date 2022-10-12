import React from 'react'
import { gmAction, gnAction } from '../redux/message/message.action'

import { useDispatch, useSelector } from 'react-redux'
const Message = () => {
    let dispatch = useDispatch()
    //let [message, setMessage] = React.useState("Hello")
    let message = useSelector((state) => {
        return state.message
    })
    let gmHandler = () => {
        //dispatch action
        dispatch(gmAction())
    }
    let gnHandler = () => {
        dispatch(gnAction())
    }

    return (
        <div>
            <h4>Message:{message.msg}</h4>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GN</button>
        </div>
    )
}

export default Message
