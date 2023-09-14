import React, { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/UI/SectionHeader";
import { ToggleContext } from "../App";
import "../styles/signin.css";

export default function SignIn() {
  const setDisplayHeader = useContext(ToggleContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    setDisplayHeader(false);
    document.title = "Sign In"
  }, []);

  const [isOnView, setIsOnView] = useState(false);
  const inputRef = useRef();

  function togglePasswordView() {
    setIsOnView((prevView) => !prevView);
    if (!isOnView) {
      inputRef.current.setAttribute("type", "text");
    } else {
      inputRef.current.setAttribute("type", "password");
    }
  }

  return (
    <div>
      <SectionHeader title="SIGN IN" />
      <form className="signin-form constant-margin sec-bg" action="">
        <p
          className="standard-fz header-margin align sec-font sec-font-clr"
          data-aos="fade"
        >
          Sign In To Your Account
        </p>
        <div className="form-wrapper">
          <input required type="email" placeholder="Enter email" />
        </div>
        <div className="form-wrapper password-div">
          <input
            required
            ref={inputRef}
            type="password"
            placeholder="Enter password"
          />
          <i
            onClick={togglePasswordView}
            className={`fa-solid fa-${
              isOnView === true ? "eye-slash" : "eye"
            } sec-font-clr2 standard-fz`}
          ></i>
        </div>
        <button className="pri-bg transition standard-weight header-margin">
          Sign In
        </button>
        <Link style={{ textDecoration: "none" }} to="/">
          <p className="min-fz sec-font-clr2 sub-header-margin standard-weight align">
            Forgot password?
          </p>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/register">
          <p className="min-fz sec-font-clr2 sub-header-margin standard-weight align">
            Don't have an account?
          </p>
        </Link>
      </form>
    </div>
  );
}
