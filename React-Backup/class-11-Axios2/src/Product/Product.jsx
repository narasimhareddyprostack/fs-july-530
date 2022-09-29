import React, { Component } from 'react'
import Axios from 'axios'
class Product extends Component {
    constructor(props) {
        super(props)
        console.log("Always constructor - will execute first")
        this.state = {
            products: []
        }
    }
    //component life cycle methods 
    componentDidMount() {
        console.log("Third - after render")
        Axios.get('http://127.0.0.1:8080/api/products/').then((resonspe) => {
            this.setState({
                products: resonspe.data
            })
        }).catch()
    }
    render() {
        console.log("Second - render method")
        return <div className="container">
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="row">
                {
                    this.state.products.length > 0 ? <>
                        {
                            this.state.products.map((product, index) => {
                                return <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-header">
                                            <img src={product.image} alt="" />
                                        </div>
                                        <div className="card-body">
                                            <ul>
                                                <li>{product.name}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            })
                        }</> : null
                }
            </div>
        </div>
    }
}

export default Product
