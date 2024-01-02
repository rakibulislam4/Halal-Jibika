import { NavLink } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import { MdLogin } from "react-icons/md";
import "./Navbar.css";
import { Audio } from "react-loader-spinner";
import logo from "../../../assets/logo1.png";
import auth from "../../../FIrebase/firebase";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const logout = () => {
    signOut(auth);
  };

  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    );
  }
  if (error) {
    console.log(error.message);
  }
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
          <NavLink to="/applied">Applied</NavLink>
        </div>
        <div className="nav-auth">
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
                <p>{user.displayName}</p>
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
      </nav>
    </div>
  );
}
