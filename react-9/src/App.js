import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Employee from './Employee/Employee'
import Product from './Product/Product'
import Message from './Message/Message'
export class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Employee />
            </div>
        )
    }
}

export default App
