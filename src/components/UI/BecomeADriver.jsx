import React from "react";
import "../../styles/becomeadriver.css";
import becomeAdriver from "../../assets/images/becomeAdriver.jpg";
import { Link } from "react-router-dom";
import Lambo from "../../assets/images/Cars/Lamborghini/Lambo.png";

export default function BecomeADriver() {
  return (
    <div className="constant-margin constant-padding earn-with-us flex">
      <img loading="lazy" className="earn-img" src={Lambo} alt="Lamborghini" />
      <div className="earn-content">
        <h2 style={{lineHeight: "40px"}} className="sec-font3 title-fz sub-header-margin">
          Want To Earn With Us?
        </h2>
        <p style={{lineHeight: "25px"}} className="standard-fz sec-font-clr header-margin standard-weight">
          Take clients for a ride in their dream car today
        </p>
        <Link
          style={{ textDecoration: "none", borderRadius: "5px" }}
          className="sec-font pri-font-clr standard-fz pri-bg btn-padding"
          to="/become-a-driver"
        >
          Become A Driver
        </Link>
      </div>
      <div className="earn-bg-wrapper">
        <img loading="lazy" className="earn-bg" src={becomeAdriver} alt="Driving photo" />
        <div className="earn-overlay"></div>
      </div>
    </div>
  );
}
