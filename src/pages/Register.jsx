import React from "react";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/UI/SectionHeader";
import { ToggleContext } from "../App";

export default function Register() {
  const setDisplayHeader = useContext(ToggleContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    setDisplayHeader(false);
    document.title = "Register"
  }, []);

  return (
    <div>
      <SectionHeader title="REGISTER" />
      <form className="signin-form constant-margin sec-bg" action="">
        <p
          className="standard-fz header-margin align sec-font sec-font-clr"
          data-aos="fade"
        >
          Register Your Account
        </p>
        <div
          style={{ gap: ".7em" }}
          className="flex-main form-wrapper form-wrapper"
        >
          <input required type="text" placeholder="Enter First Name" />
          <input required type="text" placeholder="Enter Last Name" />
        </div>
        <div className="form-wrapper">
          <input required type="text" placeholder="Enter username" />
        </div>
        <div className="form-wrapper">
          <input required type="email" placeholder="Enter email" />
        </div>
        <div className="form-wrapper password-div">
          <input required type="password" placeholder="Enter password" />
        </div>
        <div className="form-wrapper password-div">
          <input required type="password" placeholder="Confirm password" />
        </div>
        <button className="pri-bg transition standard-weight header-margin">
          REGISTER
        </button>
        <Link style={{ textDecoration: "none" }} to="/sign-in">
          <p className="min-fz sec-font-clr2 sub-header-margin standard-weight align">
            Already have an account?
          </p>
        </Link>
      </form>
    </div>
  );
}
