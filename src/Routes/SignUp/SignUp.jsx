import { FaGithub } from "react-icons/fa";
import "./SignUp.css";
import { FcGoogle } from "react-icons/fc";
import { Audio } from "react-loader-spinner";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import auth from "./../../FIrebase/firebase";
import { useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState("");
  const [userData, setUserData] = useState({});
  const [password, setPassword] = useState("");
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]:;<>,.?/\|~-]).{8,}$/;

  const isValidPassword = (password) => {
    return passwordRegex.test(password);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    setUserData((prevData) => ({
      ...prevData,
      name,
      email,
      password,
    }));
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("userData", JSON.stringify({ userData, user }));
        console.log("User registered successfully:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error registering user:", errorCode, errorMessage);
      });

    <Navigate to={"/"} />;
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <>
      <div className="sign-in-main">
        <div className="sign-in">
          <div className="sign-in-container">
            <h1>Sign Up</h1>
            <p style={{ marginBottom: "1rem" }}>
              Get access to all the features of Halal Jibika
            </p>
            <div className="sign-in-form">
              <form onSubmit={handleSubmit}>
                <div className="form">
                  <input
                    placeholder="Full Name"
                    name="name"
                    type="text"
                  />
                  <input
                    value={input}
                    id={validateEmail(input) ? "valid-email" : "invalid-email"}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    placeholder="Email"
                    name="email"
                  />
                  {
                    <small>
                      <p className="invalid-email-message">
                        {validateEmail(input)
                          ? " "
                          : "Please enter valid Email"}
                      </p>
                    </small>
                  }
                  <div className="password-container">
                    <input
                      id={
                        isValidPassword(password)
                          ? "valid-password"
                          : "invalid-password"
                      }
                      onChange={(e) => setPassword(e.target.value)}
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={togglePasswordVisibility}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <small>
                    <p
                      style={{ marginLeft: "3px" }}
                      className="invalid-password-message"
                    >
                      {isValidPassword(password)
                        ? " "
                        : "Password contains at least eight characters, including one number and includes both lower and uppercase letters and special characters"}
                    </p>
                  </small>
                  <button
                    disabled={
                      !validateEmail(input) || !isValidPassword(password)
                    }
                    className={
                      !validateEmail(input) || !isValidPassword(password)
                        ? "disabled-btn"
                        : "sign-in-btn"
                    }
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </form>

              <p style={{ marginTop: "0.5rem" }}>
                Already have an account? <Link to="/login">Sign In </Link>
                instead or go to <Link to="/">home</Link>
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
