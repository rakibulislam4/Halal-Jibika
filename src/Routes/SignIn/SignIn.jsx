/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import "./SignIn.css";
import auth from "./../../FIrebase/firebase";
import { useState } from "react";
import Loading from "../../Components/Loading/Loading";
export default function SignIn() {
  // ........................................Declared all hooks...................................................//

  const [userData, setUserData] = useState({});
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState("");
  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, gitHubUser, gitHubLoading, gitHubError] =
    useSignInWithGithub(auth);

  //..................................................Regex for email and password...............................//

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  //.............................. Main submit Function ...........................................//

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setUserData((prevData) => ({
      ...prevData,
      email,
      password,
    }));
    await signInWithEmailAndPassword(email, password);
    navigate("/");
  };

  //.....................................................Error Handling..........................................//

  if (emailLoading || googleLoading || gitHubLoading) {
    return <Loading />;
  }
  if (emailError || googleError || gitHubError) {
    return <p>{emailError.message}</p>;
  }
  if (emailUser || googleUser || gitHubUser) {
    console.log(emailUser);
  }

  //..................................................Password Visibility Function..................................//

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  //..................................................Google and Github Login Function....................................//

  const googleLogin = async () => {
    await signInWithGoogle();
    navigate("/");
  };

  const gitHub = async () => {
    await signInWithGithub();
    navigate("/");
  };

  //..................................................Main Function..........................................//

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
                    value={input}
                    id={validateEmail(input) ? "valid-email" : "invalid-email"}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    placeholder="Email"
                    name="email"
                  />
                  {
                    <p className="invalid-email-message">
                      {validateEmail(input) ? " " : "Please enter valid Email"}
                    </p>
                  }

                  <div className="password-container">
                    <input
                      id="valid-password"
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

                  <button
                    disabled={!validateEmail(input) || password.length == 0}
                    className={
                      !validateEmail(input) || password.length == 0
                        ? "disabled-btn"
                        : "sign-in-btn"
                    }
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
              <button
                onClick={googleLogin}
                className="google"
              >
                <FcGoogle />
              </button>
              <button
                onClick={gitHub}
                className="github"
              >
                <FaGithub />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
