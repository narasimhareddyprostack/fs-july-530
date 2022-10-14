//action types 
const INCR = 'INCR'
const DECR = 'DECR'
//actions
let decrAction = () => {
    console.log("action - Test 1")
    return { type: DECR, payload: "Rahul Gandhi" }
}
let incrAction = () => {
    console.log("action - Test 1")
    return { type: INCR, payload: "Sonia Gandhi" }
}
export { incrAction, decrAction, INCR, DECR } 