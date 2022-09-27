import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import User from './User/User'
import Product from './Product/Product'
import Employee from './Employee/Employee'
import Items from './Items/Items'
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
                        <Route exact path="/emp" element={<Employee />} />
                        <Route exact path="/item" element={<Items />} />

                    </Routes>
                </Router>
            </div>
        )
    }
}

export default App
