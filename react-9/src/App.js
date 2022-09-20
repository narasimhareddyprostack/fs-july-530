import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Login from './Login/Login'
class App extends Component {
 
    render() {
        return (
            <div>
                <Navbar />
                <Login />
            </div>
        )
    }
}

export default App