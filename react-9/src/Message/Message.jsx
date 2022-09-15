import React from 'react'
class Message extends React.Component {
    state = {
        msg: "Hello,"
    }
    gmHandler = () => {
        this.setState({ msg: "Good Morning.............." })
    }
    gnHandler = () => {
        this.setState({ msg: 'Good Night' })
    }
    render() {
        console.log("Mic Testing 123")
        return <div>
            <pre>{JSON.stringify(this.state)}</pre>
            <h3>Wish Message:{this.state.msg}</h3>
            <button onClick={this.gmHandler}>GM</button>  &nbsp;&nbsp;
            <button onClick={this.gnHandler}>GN</button>
        </div>
    }
}
export default Message