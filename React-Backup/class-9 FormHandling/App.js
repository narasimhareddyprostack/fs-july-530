import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Login from './Login/Login'
import Registration from './Login/Registration'
class App extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <Registration />
            </div>
        )
    }
}

export default App
