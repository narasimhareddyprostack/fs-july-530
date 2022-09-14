import React, { Component } from 'react'

class Employee extends Component {
    render() {
        return (
            <div>
                <h2>Employee Component</h2>
                <pre>{JSON.stringify(this.props)}</pre>
                <h4>Polical Ifno</h4>
                <span>MP of: {this.props.area[0]}</span>
        <b>Employee Salary:{this.props.employee.sal}</b>
            </div>
        )
    }
}

export default Employee
