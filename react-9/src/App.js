import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import ContactApp from './Contact/ContactApp'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route exact path="/contact" element={<ContactApp />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default App
