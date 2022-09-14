import React from 'react'
import Employee from './Employee'
class User extends React.Component {
    loc = ['wayanad', 'Amethi', 'New Delhi']
    emp = {
        id: 101,
        name: "Rahul Gandhi",
        sal: 45000
    }
    render() {
        return <div>
            <h1>User Component</h1>
            <hr />
            <Employee area={this.loc} employee={this.emp} />
        </div>
    }
}
export default User