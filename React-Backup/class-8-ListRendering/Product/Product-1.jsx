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
        return (
            <div>
                <pre>{JSON.stringify(this.state.product)}</pre>
                <h2>Product Name:{this.state.product.product_Name}</h2>
                <h2>Product Price:{this.state.product.price}</h2>
                <img src={this.state.product.image} alt="" />
                <i className="fa fa-minus-square " onClick={this.decrHandler} >  </i> {this.state.product.qty}<i onClick={this.incrHandler} className="fa fa-plus-square "></i>
                <h5>Total: {this.state.product.qty * this.state.product.price} </h5>
            </div>
        )
    }
}

export default Product
