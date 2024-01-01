import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import "./SignIn.css";
export default function SignIn() {



  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="sign-in-main">
        <div className="sign-in">
          <div className="sign-in-container">
            <h1>Sign In</h1>
            <p style={{ marginBottom: "1rem" }}>
              Get access to all the features of Halal Jibika
            </p>
            <div className="sign-in-form">
              <form onSubmit={handleSubmit}>
                <div className="form">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                  <button
                    className="sign-in-btn"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
              </form>

              <p style={{ marginTop: "0.5rem" }}>
                Don't have an account? <Link to="/signUp">Sign Up </Link>
                or go to <Link to="/">home</Link>
              </p>
            </div>
            <p style={{ marginTop: "0.5rem" }}>Sign-in or Sign-Up with</p>
            <div className="sign-in-icons">
              <button className="google">
                <FcGoogle />
              </button>
              <button className="github">
                <FaGithub />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
