import { NavLink } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import { MdLogin } from "react-icons/md";
import "./Navbar.css";
import logo from "../../../assets/logo1.png";
import auth from "../../../FIrebase/firebase";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { MdMenu } from 'react-icons/md';
import Loading from "../../Loading/Loading";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  
  const logout = () => {
    signOut(auth);
  };
  if (loading) {
    return (
     <Loading/>
    );
  }
  if (error) {
    console.log(error.message);
  }
  return (
    <div className="navbar-container">
      <nav className={isMenuOpen ? "newNavBar" : "navbar"}>
      
        <div className="nav-h1">
          <NavLink to="/">
            <img
              src={logo}
              alt=""
            />
          </NavLink>
        </div>
      
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/favorite">Favorite</NavLink>
        <NavLink to="/applied">Applied</NavLink>
      </div>
      
        <div className={`${isMenuOpen ? 'active-auth' : "nav-auth"}`}>
          {user ? (
            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <NavLink to="/login"> Sign-In</NavLink>
          )}

          {user ? (
            <NavLink to="/addjobs">Add Jobs</NavLink>
          ) : (
            <NavLink
              style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}
              to="/signUp"
            >
              <MdLogin /> Sign-Up
            </NavLink>
          )}

          <div className="user-details">
            {user ? (
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}
              >
                <img
                  style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                  src={user.photoURL}
                  alt=""
                />
                <p>{user?.displayName}</p>
              </div>
            ) : (
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}
              >
                <FaUserCheck style={{ color: "#0f69e7", fontSize: "1.2rem" }} />
                <p>Guest</p>
              </div>
            )}

          </div>
        </div>

          <div fontSize="30px" className="nav-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <MdMenu style={{ fontSize: "30px" }} />
      </div>
      </nav>
    </div>
  );
}
