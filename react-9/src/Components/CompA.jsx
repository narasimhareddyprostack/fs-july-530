import CompB from './CompB'
function CompA() {
    let ename = "Rahul";
    let email = "rahul@ibm.com"
    return <div>
        <h1>Component A</h1>
        <h3>Employee Information</h3>
        <span>Employee Name:{ename}</span> & Employee Email : {email}
        <hr />
        <CompB prop1={"GM"} name={ename} mail={email} />
    </div>
}
export default CompA