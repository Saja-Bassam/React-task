import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
        <h1>People's Info</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create">Add New Person</Link>
        </div>
    </nav>
      );
}
 
export default Navbar;
