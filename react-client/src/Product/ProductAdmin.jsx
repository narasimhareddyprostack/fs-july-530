import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link, Navigate } from 'react-router-dom'
const ProductAdmin = () => {
    let [products, setProducts] = useState([])
    let [dummy, setDummy] = useState(false)
    useEffect(() => {
        Axios.get('http://127.0.0.1:5000/api/products')
            .then((response) => {
                setProducts(response.data)
            }).catch()
    }, [])

    let deleteProduct = (id) => {
        let url = `http://127.0.0.1:5000/api/products/${id}`
        Axios.delete(url).then(() => { }).catch((response) => {
            setDummy(true)
        });
    }
    return (
        <div className="container">
            <pre>{JSON.stringify(products)}</pre>

            {
                dummy ? <>
                    <Navigate to="/admin" />
                </> : <>
                        <div className="row">
                            <div className="col-md-9">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Image</th>
                                            <th>Price</th>
                                            <th>QTY</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            products.length > 0 ? <>
                                                {
                                                    products.map((product) => {
                                                        return <tr>
                                                            <td>{product.name}</td>
                                                            <td><img src={product.image} height="50px" alt="" /></td>
                                                            <td>{product.price}</td>
                                                            <td>{product.qty}</td>
                                                            <td>
                                                                <Link to="/update" className="btn btn-warning">Update</Link>
                                                                <button onClick={deleteProduct.bind(this, product._id)} className="btn btn-danger">Delete</button>
                                                            </td>
                                                        </tr>
                                                    })
                                                }
                                            </> : null
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
            }

        </div>
    )
}

export default ProductAdmin
