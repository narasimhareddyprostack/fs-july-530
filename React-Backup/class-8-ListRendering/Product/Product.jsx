import React, { Component } from 'react'
class Product extends Component {
    state = {
        product: {
            product_Name: "MOTOROLA edge 30",
            price: 25000,
            image: "https://rukminim1.flixcart.com/image/224/224/l2xmqvk0/mobile/3/k/f/-original-image674nvdc4aws.jpeg?q=90",
            qty: 1
        }
    }
    incrHandler = () => {
        this.setState({
            product: {
                ...this.state.product,
                qty: this.state.product.qty + 1
            }
        })
    }
    decrHandler = () => {
        this.setState({
            product: {
                ...this.state.product,
                qty: this.state.product.qty - 1
            }
        })
    }
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <table className="table">
                        <thead className="bg-dark text-white">
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>QTY</th>
                            <th>Total</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.product.product_Name}</td>
                                <td> <img src={this.state.product.image} height="100px" alt="" /> </td>
                                <td>{this.state.product.price}</td>
                                <td><i className="fa fa-minus-circle" onClick={this.decrHandler}></i> {this.state.product.qty} <i className="fa fa-plus-circle" onClick={this.incrHandler}></i></td>
                                <td>{this.state.product.price * this.state.product.qty}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
}

export default Product
