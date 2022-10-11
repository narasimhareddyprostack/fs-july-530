//action types 
const INCR = 'INCR'
const DECR = 'DECR'
//actions
let decrAction = () => {
    return { type: DECR, payload: "Rahul Gandhi" }
}
let incrAction = () => {
    return { type: INCR, payload: "Sonia Gandhi" }
}
export { incrAction, decrAction, INCR, DECR } 