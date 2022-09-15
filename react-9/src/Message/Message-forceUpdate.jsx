import React from 'react'
class Message extends React.Component {
    msg = "Hello,"
    gmHandler = () => {

        this.msg = "Good Morning!"
        console.log(this.msg)
        this.forceUpdate()
    }
    gnHandler = () => {

        this.msg = "Good Night"
        console.log(this.msg)
    }
    render() {
        return <div>
            <h1>Message Component</h1>
            <h3>Wish Message: {this.msg} </h3>
            &nbsp;&nbsp;
             <button onClick={this.gmHandler}>GM</button> &nbsp;&nbsp;
            <button onClick={this.gnHandler}>GN</button>
        </div>
    }
}
export default Message