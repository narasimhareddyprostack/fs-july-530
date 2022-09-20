import React, { Component } from 'react'

class Message extends Component {
    state = {
        msg: "Hello.."
    }
    updateHandler = (value) => {
        this.setState({
            msg: value
        })
    }
    render() {
        return (
            <div>
                <h3>Message:{this.state.msg}</h3>
                <button onClick={this.updateHandler.bind(this, "Good Morning")} >GM  </button>&nbsp;
                <button onClick={this.updateHandler.bind(this, "Good Afternoon")}>GA  </button>&nbsp;
                <button onClick={this.updateHandler.bind(this, "Good Evening")}>GE </button>&nbsp;
                <button onClick={this.updateHandler.bind(this, "Good Night")} > GN </button>&nbsp;

            </div>
        )
    }
}

export default Message
