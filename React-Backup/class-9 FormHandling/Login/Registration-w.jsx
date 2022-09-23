import React from 'react'
class Registration extends React.Component {
    state;
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            email: "",
            mobile: "",
            password: ""
        }
    }
    updateHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return <div>
            <pre>{JSON.stringify(this.state)}</pre>
            <form onSubmit={this.submitHandler}>
                <label>User Name:</label>
                <input type="text" name="userName" onChange={this.updateHandler} /> <br /><br />
                <label>Email Id:</label>
                <input type="email" name="email" onChange={this.updateHandler} /> <br /><br />
                <label>Mobile:</label>
                <input type="number" name="mobile" onChange={this.updateHandler} /> <br /><br />
                <br />
                <label>Password:</label>
                <input type="password" name="password" onChange={this.updateHandler} />
                <br />
                <input type="submit" value="SignUp" />
            </form>
        </div>
    }
}
export default Registration