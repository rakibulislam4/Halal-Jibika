import { FaGithub } from "react-icons/fa";
import "./SignUp.css";
import { FcGoogle } from "react-icons/fc";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import auth from "./../../FIrebase/firebase";
import { useState } from "react";
import Loading from "../../Components/Loading/Loading";
export default function SignUp() {
  // ........................................Declared all hooks...................................................//

  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState("");
  const [userData, setUserData] = useState({});
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, gitHubUser, gitHubLoading, gitHubError] =
    useSignInWithGithub(auth);

  //..........................................End of hooks declaration.............................................//

  //................................................Regex for email and password...............................//

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const passwordRegex =
    // eslint-disable-next-line no-useless-escape
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]:;<>,.?/\|~-]).{8,}$/;

  const isValidPassword = (password) => {
    return passwordRegex.test(password);
  };

  //..................................................End of Regex for email and password...............................//

  //.............................................Main submit Function ...........................................//
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
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
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({
      displayName: name,
      photoURL: "https://picsum.photos/200/300",
    });
    navigate("/");
  };

  //.............................................End of Main submit Function ...........................................//

  //.............................................Google and Github login Function .........................................//
  const googleLogin = async () => {
    await signInWithGoogle();
    navigate("/");
  };

  const gitHub = async () => {
    await signInWithGithub();
    navigate("/");
  };
  //.............................................End of Google and Github login Function ..............................//

  //.............................................Error handling ..........................................................//
  if (emailLoading || googleLoading || updating || gitHubLoading) {
    return <Loading />;
  }
  if (emailError || googleError || gitHubError) {
    return <p>{emailError.message}</p>;
  }
  if (emailUser || googleUser || gitHubUser) {
    console.log(emailUser);
  }
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  //.............................................End of Error handling ................................................//

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
