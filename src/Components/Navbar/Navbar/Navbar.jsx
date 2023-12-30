import { NavLink } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";

import { MdLogin } from "react-icons/md";
import "./Navbar.css";
import logo from "../../../assets/logo1.png";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="nav-h1">
          <NavLink to="/">
            <img
              src={logo}
              alt=""
            />
          </NavLink>
        </div>
        <div className="nav-links">
          <NavLink to="/"> Home</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/favorite">Favorite</NavLink>
        </div>
        <div className="nav-auth">
          <NavLink to="/login"> Sign-In</NavLink>
          <NavLink
            style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}
            to="/signUp"
          >
            <MdLogin /> Sign-Up
          </NavLink>

          <div className="user-details">
            <FaUserCheck style={{ color: "#0f69e7", fontSize: "1.2rem" }} />
            <p>User</p>
          </div>
        </div>
      </nav>
    </div>
  );
}
