import React, { useState } from 'react'

const Product = () => {
    let [msg, setMsg] = useState("Hello")
    let [counter, setCounter] = useState(1);
    let [users, setUsers] = useState([]);
    let [product, setProduct] = useState({
        product_Name: "Iphone 12 Mini",
        price: 28000,
        qty: 1
    })
    let decrHandler = () => {
        setProduct({ ...product, qty: product.qty - 1 })
    }
    let incrHandler = () => {
        setProduct({ ...product, qty: product.qty + 1 })
    }
    return (
        <div>
            <pre>{JSON.stringify(product)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <table className="table table-hover">
                            <thead className="bg-primary text-warning">
                                <tr>
                                    <th>Name</th>
                                    <th>price</th>
                                    <th>QTY</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{product.product_Name}</td>
                                    <td>{product.price}</td>

                                    <td>  <i className="fa fa-minus-circle" onClick={decrHandler} ></i>{product.qty}<i className="fa fa-plus-circle" onClick={incrHandler}></i></td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
