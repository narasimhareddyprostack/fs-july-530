import React from 'react'

const Message = () => {
    //let msg = "Hello"
    //let [state, setState] = React.useState("Hello")
    let [msg, setMsg] = React.useState("Hello")
    //let [var, fun] = useState("0")
    let gmHandler = () => {
        setMsg("GM Rahul Gandhi")
    }
    let gaHandler = () => {
        setMsg("GA Rahul Gandhi")
    }
    let gnHandler = () => {
        setMsg("GN Rahul Gandhi")
    }
    return (
        <div>
            <h1>Message:{msg}</h1>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gaHandler}>GA</button>
            <button onClick={gnHandler}>GN</button>
        </div>
    )
}

export default Message
