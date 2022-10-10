import React from 'react'
import Axios from 'axios'
const Product = () => {
    let [product, setProduct] = React.useState({})
    let [productArray, setProductArray] = React.useState([])

    React.useEffect(() => {
        Axios.get('https://dummyjson.com/products').then((response) => {
            setProduct({ product: response.data })
            setProductArray(product.product.products)

        }).catch()
    }, []);
    return (
        <div className="container">
            <pre>{JSON.stringify(product)}</pre>
            <pre>{JSON.stringify(productArray)}</pre>
            <div className="row">
                <div className="col-md-8">
                    <table className="table table-hover">
                        <thead className="bg-warning text-white">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productArray.length > 0 ? <>
                                    {
                                        productArray.map((product) => {
                                            return <tr>
                                                <td>{product.id}</td>
                                                <td>{product.title}</td>
                                                <td>{product.price}</td>
                                            </tr>
                                        })
                                    }

                                </> : null
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Product
