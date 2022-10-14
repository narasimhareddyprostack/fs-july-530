//import action types
import { GM, GN } from './message.action'
let initialState = {
    msg: "Hello,Rahul Gandhi"
}
let messageReducer = (state = initialState, action) => {
    //vadidate action types
    console.log(action)
    switch (action.type) {
        case GM:
            return { msg: "Hello,Good Monring" }
        case GN:
            return { msg: "Hello,Good Night" }
        default:
            return state
    }
}
export { messageReducer }
//what is reducer?
//reducer is pure funciton, it take two paramenter
//ie state, action