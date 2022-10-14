const GM = 'GM'
const GN = 'GN'
let gmAction = () => {
    console.log("Hello, Good Evening, not Good M")
    return { type: GM }
}
let gnAction = () => {
    console.log("gn action")
    return { type: GN }
}
//what is action?
//action is function, it return actionable object
export { gmAction, gnAction, GM, GN }