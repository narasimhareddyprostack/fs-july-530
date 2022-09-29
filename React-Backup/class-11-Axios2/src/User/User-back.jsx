import React from 'react'
import Axios from 'axios'
class User extends React.Component {
    state = {
        users: []
    }
    get_UserData = () => {
        Axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            console.log(response.data)
            this.setState({ users: response.data })
        }).catch()
    }
    render() {
        return <>
            <h1>Hello,User</h1>
            <pre>{JSON.stringify(this.state)}</pre>
            <button onClick={this.get_UserData}> Click Buddy.... </button>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <table className="table table-hover">
                            <thead className="bg-primary text-white">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.length > 0 ?
                                        <>
                                            {
                                                this.state.users.map((user) => {
                                                    return <tr>
                                                        <td>{user.id}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.email}</td>
                                                    </tr>
                                                })
                                            }

                                        </> : null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    }
}
export default User