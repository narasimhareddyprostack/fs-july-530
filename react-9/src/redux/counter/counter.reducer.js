//import action types 
import { INCR, DECR } from './counter.action'
let initialState = {
    product_Name: "Iphone 14",
    price: 45000,
    image: '',
    qty: 1
}
let counterReducer = (state = initialState, action) => {
    console.log(action)
    console.log(action.type)
    switch (action.type) {
        case INCR:
            return { ...state, qty: state.qty + 1 }
        case DECR:
            return { ...state, qty: state.qty - 1 }
        default:
            return state
    }
}
export { counterReducer }