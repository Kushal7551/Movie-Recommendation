// NavBar Component
import { Link } from "react-router-dom";
import "./styles/NavBarStyles.css";
import Logo from "./images/Logo2.png";

const NavBar = () => {
    return (
        <div className="container header">
            <Link to="/ ">
                <img src={Logo} className="logo" alt="" />
            </Link>
            <a href="/" className="header-btn1 bouncy">
                <i className="fas fa-home"></i> Home
            </a>
        </div>
    );
};

export default NavBar;
