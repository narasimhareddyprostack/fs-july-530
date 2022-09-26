import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
class App extends Component {

    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/service" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default App
