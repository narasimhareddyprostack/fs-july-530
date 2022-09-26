import { Link } from 'react-router-dom'
function Navbar() {
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">React Routing  Example</Link>
        <div className="ml-auto">
            <ul className="navbar-nav">
                <li className="nav-list"><Link className="nav-link" to="/user">User</Link></li>
                <li className="nav-list"><Link className="nav-link" to="/emp">Employee</Link></li>
                <li className="nav-list"><Link className="nav-link" to="/product">Product</Link></li>

            </ul>
        </div>
    </nav>
}
export default Navbar