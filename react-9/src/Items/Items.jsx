
import React, { Component } from 'react'
import Axios from 'axios'
export class Items extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: {}
        }
    }
    componentDidMount() {
        Axios.get('https://dummyjson.com/products').then((response) => {
            this.setState({
                items: response.data
            })
        }).catch()
    }
    render() {
        return (
            <div>
                {
                    Object.keys(this.state.items).length > 0 ?
                        <>
                            <pre>{JSON.stringify(this.state.items)}</pre>
                            <div className="container">
                                <div className="row">
                                    {
                                        this.state.items.products.map((product) => {
                                            return <div className="col-md-3">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <img height="100px" width="100px" src={product.thumbnail} alt="" />
                                                    </div>
                                                    <div className="card-body">
                                                        <ul className="list-group">
                                                            <li className="list-group-item">
                                                                {product.title}
                                                            </li>
                                                            <li className="list-group-item">
                                                                &#36; <b>{product.price}</b>
                                                            </li>
                                                            <li className="list-group-item">
                                                                Rating : {product.rating}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </> : null

                }
            </div>
        )
    }
}

export default Items
