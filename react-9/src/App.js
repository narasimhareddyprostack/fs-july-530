import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import User from './User/User'
import Product from './Product/Product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
class App extends Component {

    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route exact path="/user" element={<User />} />
                        <Route exact path="/product" element={<Product />} />

                    </Routes>
                </Router>
            </div>
        )
    }
}

export default App
