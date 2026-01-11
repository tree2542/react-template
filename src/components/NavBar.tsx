import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
            <Link to="/main" style={{ marginRight: 12 }}>Home</Link>
            {/* <Link to="/register" style={{ marginRight: 12 }}>Users</Link>
            <Link to="/login">Login</Link> */}
        </nav>
    )
}

export default NavBar