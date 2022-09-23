import React from 'react'
class Registration extends React.Component {
    state;
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            email: "",
            mobile: ""
        }
    }
    updateHandler = (event) => {
        this.setState({
            userName: event.target.value
        })
    }
    render() {
        return <div>
            <pre>{JSON.stringify(this.state)}</pre>
            <form>
                <label>User Name:</label>
                <input type="text" onChange={this.updateHandler} /> <br /><br />
                <label>Email Id:</label>
                <input type="email" onChange={this.updateHandler} /> <br /><br />
                <label>Mobile:</label>
                <input type="number" onChange={this.updateHandler} /> <br /><br />
                <input type="submit" value="SignUp" />
            </form>
        </div>
    }
}
export default Registration