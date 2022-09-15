import React from 'react'
class Counter extends React.Component {
    //qty=1
    state = {
        qty: 1
    }
    incrHandler = () => {
        this.setState({ qty: this.state.qty + 1 })
    }
    decrHandler = () => {
        this.setState({ qty: this.state.qty - 1 })
    }
    render() {
        return <div>
            <h3>Product Counter/QTY : {this.state.qty}</h3>
            &nbsp;<button onClick={this.decrHandler}>- </button> &nbsp;
            <button onClick={this.incrHandler}>+</button>
        </div>
    }
}
export default Counter  