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
        return <div className="container mt-4">
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="row">

                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header bg-primary text-white">Registration Page</div>
                        <div className="card-body">
                            <form onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="userName" onChange={this.updateHandler} placeholder="User Name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" onChange={this.updateHandler} placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="number" className="form-control" name="mobile" onChange={this.updateHandler} placeholder="Mobile" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" name="password" onChange={this.updateHandler} placeholder="Password" />
                                </div>
                                <div>
                                    <input type="radio" /> Male
                                    <input type="radio" /> Female
                                </div>
                                <input type="submit" value="SignUp" className="btn btn-success" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

}
export default Registration