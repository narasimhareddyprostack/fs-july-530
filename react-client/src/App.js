import React from 'react'
import Navbar from './Navbar/Navbar'
import CreateProduct from './Product/CreateProduct'
import ProductList from './Product/ProductList'
import ProductAdmin from './Product/ProductAdmin'
import Home from './Product/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/create" element={<CreateProduct />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/admin" element={<ProductAdmin />} />
                </Routes>
            </Router>

        </div>
    )
}

export default App
