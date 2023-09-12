import React, { useState, useEffect, useContext } from "react";
import { ToggleContext } from "../App";
import SectionHeader from "../components/UI/SectionHeader";

export default function Driver() {
  const setDisplayHeader = useContext(ToggleContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    setDisplayHeader(true);
  }, []);

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => {
        const countriesArray = data.map((country) => country.name);
        setCountries(countriesArray);
      })
      .catch(() =>
        alert(
          "Oops, an error occured, please check your connection and try again"
        )
      );
  }, []);

  const optionsElement = countries.map((country, index) => {
    return (
      <option className="standard-weight" key={index} value={country}>
        {country}
      </option>
    );
  });

  return (
    <div>
      <SectionHeader title="BECOME A DRIVER" />
      <form className="signin-form constant-margin sec-bg" action="">
        <p className="standard-fz header-margin align sec-font sec-font-clr">
          Register Your Account
        </p>
        <div
          style={{ gap: ".7em" }}
          className="flex-main form-wrapper sub-header-margin"
        >
          <input required type="text" placeholder="Enter first name" />
          <input required type="text" placeholder="Enter last name" />
        </div>
        <div
          style={{ gap: ".7em" }}
          className="flex-main form-wrapper sub-header-margin"
        >
          <input required type="email" placeholder="Enter email" />
          <input
            required
            type="tel"
            pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
            placeholder="Enter phone number"
          />
        </div>
        <div className="sub-header-margin">
          <select required name="countries" id="countries">
            <option className="standard-weight" value="select">Select Your Country</option>
            {optionsElement}
          </select>
        </div>
        <div className="CV-wrapper flex-main form-wrapper sub-header-margin pri-font-clr">
          <label htmlFor="file" className="standard-weight sec-font-clr">
            Upload your CV <i className="fa-solid fa-file sec-font-clr2"></i>
          </label>
          <input
            required
            style={{ flex: 1 }}
            id="file"
            type="file"
            placeholder="Enter email"
          />
        </div>
        <div className="sub-header-margin">
          <p>Choose Favorable Working Hours</p>
          <select required name="countries" id="countries">
            <option className="standard-weight" value="morning">Morning</option>
            <option className="standard-weight" value="afternoon">Afternoon</option>
            <option className="standard-weight" value="evening">Evening</option>
          </select>
        </div>
        <div className="sub-header-margin">
          <p>Why should we hire you?</p>
          <textarea cols="30" rows="6"></textarea>
        </div>
        <button className="pri-bg transition standard-weight">
          SUBMIT FOR REVIEW
          <i
            style={{ marginLeft: ".4em" }}
            className="fa-solid fa-paper-plane"
          ></i>
        </button>
      </form>
    </div>
  );
}
