import React, { Component } from 'react'

class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    emailHandler = (event) => {
        this.setState({ email: event.target.value })
    }
    passwordHandler = (event) => {
        this.setState({ password: event.target.value })
    }
    loginHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return <div className="container mt-5">
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="row">

                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h4>Login Details</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.loginHandler}>
                                <div className="form-group">
                                    <input type="text" className="form-control" onChange={this.emailHandler} placeholder="Email Id" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" onChange={this.passwordHandler} placeholder="Password" />
                                </div>
                                <input type="submit" value="Login" className="btn btn-success" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Login
