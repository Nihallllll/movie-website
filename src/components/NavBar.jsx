import { Link } from "react-router-dom";
import "../css/Navbar.css"
export default function Navbar(){
    return(
        <nav className="navbar">
        <div className="navbar-brand ">
         <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
         <Link to="/">Home</Link>
        </div>
        <div className="navbar-links">
         <Link to="/favorites">Favourites</Link>
        </div>
        </nav>
    )
}