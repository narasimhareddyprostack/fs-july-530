import React from 'react'
import Axios from 'axios'
class Employee extends React.Component {
    constructor(props) {
        super(props)
        console.log("First constructor")
        this.state = {
            employees: {}
        }
    }
    componentDidMount() {
        Axios.get('https://dummyjson.com/users')
            .then((res) => {
                this.setState({
                    employees: res.data
                })
            })
            .catch()
    }
    render() {
        return <>
            {
                Object.keys(this.state.employees).length > 0 ?
                    <>
                        <pre>{JSON.stringify(this.state.employees.users)}</pre>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <table className="table table-hover">
                                        <thead className="bg-primary text-white">
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Image</th>
                                                <th>Age</th>
                                                <th>Hair Color</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.employees.users.map((user) => {
                                                return <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                    <td>{user.firstName}</td>
                                                    <td>
                                                        <img src={user.image} height="40px" alt="" />
                                                    </td>
                                                    <td>{user.age}</td>
                                                    <td>{user.hair.color} &nbsp;&nbsp; <b>{user.hair.type}</b></td>
                                                </tr>
                                            })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </> : null
            }
        </>
    }

}
export default Employee