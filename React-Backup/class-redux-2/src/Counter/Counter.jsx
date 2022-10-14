import React from 'react'
import { decrAction, incrAction } from '../redux/counter/counter.action'
import { useDispatch, useSelector } from 'react-redux'
const Counter = () => {
    let counter = useSelector((state) => {
        return state.product
    })
    let dispatch = useDispatch()
    let decrHandler = () => {

        //dispactch action
        dispatch(decrAction())
    }
    let incrHandler = () => {
        dispatch(incrAction())
    }
    return (

        <div className="container">
            <pre>{JSON.stringify(counter)}</pre>
            <div className="row">
                <div className="col-md-6">
                    <table className="table table-hover">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{counter.product_Name}</td>
                                <td>{counter.product_Name}</td>
                                <td>{counter.price}</td>
                                <td> <i className="fa fa-minus-circle" onClick={decrHandler}></i> {counter.qty} <i className="fa fa-plus-circle" onClick={incrHandler}></i></td>
                                <td>{counter.qty * counter.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Counter
