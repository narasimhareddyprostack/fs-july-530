function CompB(props) {

    return <div>
        <h1>Component B</h1>
        <pre>{JSON.stringify(props)}</pre>
        <h4>Employee Name:{props.name}</h4>
    </div>
}


export default CompB