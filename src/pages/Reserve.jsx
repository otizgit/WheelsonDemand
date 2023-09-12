import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import SectionHeader from "../components/UI/SectionHeader";
import "../styles/reserve.css";
import carData from "../assets/data/carData";
import { ToggleContext } from "../App";
import PaystackPop from "@paystack/inline-js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Reserve() {
  const setDisplayHeader = useContext(ToggleContext);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    setDisplayHeader(true);
  }, []);

  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (day < 10) {
    day = `0${day}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }

  const [isBtnVisible, setIsBtnVisible] = useState(false);

  function toggleBtnVisibility() {
    setIsBtnVisible((prevBtnVisible) => !prevBtnVisible);
  }

  const [isPersonalUse, setIsPersonalUse] = useState(false);

  function handlePersonalUseClick(e) {
    if (e.target.value === "Personal use") {
      setIsPersonalUse(true);
    } else {
      setIsPersonalUse(false);
    }
  }

  let selectedCar;
  for (const data of carData) {
    for (const car of data.carMakes) {
      if (car.carName === id) {
        selectedCar = car;
        break;
      }
    }
  }

  const [carPrice, setCarPrice] = useState(selectedCar.price.slice(1, -6));

  function handlePriceChange(e) {
    if (e.target.checked) {
      setCarPrice(
        (prevCarPrice) => parseInt(prevCarPrice) + parseInt(e.target.value)
      );
    } else {
      setCarPrice(
        (prevCarPrice) => parseInt(prevCarPrice) - parseInt(e.target.value)
      );
    }
  }

  let maxDate;
  let minDate;
  const dropOffDateRef = useRef(null);
  const pickUpDateRef = useRef(null);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const pickUpTimeRef = useRef(null);
  const dropOffTimeRef = useRef(null);
  const licenseRef = useRef(null);
  const passportRef = useRef(null);
  const confirmRef = useRef(null);

  function handleMaxDateCheck() {
    maxDate = dropOffDateRef.current.value;
    pickUpDateRef.current.max = maxDate;
    checkTotalPrice();
  }
  function handleMinDateCheck() {
    minDate = pickUpDateRef.current.value;
    dropOffDateRef.current.min = minDate;
    checkTotalPrice();
  }

  function PayStack() {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_58230b22a04e8e07ee9d616fa22b26a450e852ec",
      amount: parseInt(priceRef.current.innerText.slice(1)) * 100,
      email: emailRef.current.value,
      firstName: nameRef.current.value,
      onSuccess(transaction) {
        let message = `Payment Complete! Reference ${transaction.reference}`;
        toast.success(message, {
          theme: "dark",
        });
        nameRef.current.value = "";
        emailRef.current.value = "";
        pickUpDateRef.current.value = "";
        pickUpTimeRef.current.value = "";
        dropOffDateRef.current.value = "";
        dropOffTimeRef.current.value = "";
        setIsBtnVisible(false);
        confirmRef.current.checked = false;
      },
      onCancel() {
        toast.error("Transaction Canceled", {
          theme: "dark",
        });
      },
    });
  }

  const priceRef = useRef(null);
  let finalPrice;

  function checkTotalPrice() {
    const startDate = new Date(pickUpDateRef.current.value);
    const endDate = new Date(dropOffDateRef.current.value);

    if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
      const timeDifference = endDate.getTime() - startDate.getTime();
      const daysDifference = timeDifference / (1000 * 3600 * 24);

      if (daysDifference > 0) {
        finalPrice = `$${parseInt(carPrice) * daysDifference}`;
        priceRef.current.innerText = finalPrice;
      } else if (daysDifference === 0) {
        finalPrice = carPrice;
        priceRef.current.innerText = finalPrice;
      } else {
        alert("Drop off date must be after pick up date");
        setIsBtnVisible(false);
        confirmRef.current.checked = false;
      }
    }
  }

  useEffect(() => {
    checkTotalPrice();
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (isPersonalUse) {
      if (
        nameRef.current.value === "" ||
        !emailRef.current.value.match(emailRegex) ||
        pickUpTimeRef.current.value === "" ||
        dropOffTimeRef.current.value === "" ||
        pickUpDateRef.current.value === "" ||
        dropOffDateRef.current.value === "" ||
        licenseRef.current.files.length === 0 ||
        passportRef.current.files.length === 0
      ) {
        toast.error("Please fill in the required fields", {
          theme: "dark",
        });
      } else {
        PayStack();
      }
    } else {
      if (
        nameRef.current.value === "" ||
        !emailRef.current.value.match(emailRegex) ||
        pickUpTimeRef.current.value === "" ||
        dropOffTimeRef.current.value === "" ||
        pickUpDateRef.current.value === "" ||
        dropOffDateRef.current.value === ""
      ) {
        toast.error("Please fill in the required fields", {
          theme: "dark",
        });
      } else {
        PayStack();
      }
    }
  }

  return (
    <div>
      <SectionHeader title="RESERVE CAR" />
      <div className="constant-padding constant-margin">
        <p className="sec-font align header-margin2 sec-font-clr title-fz reserve-car-title">
          {selectedCar.carName}
        </p>
        <div className="reserve-car-img-container header-margin">
          <img loading="lazy" src={selectedCar.imgUrl} alt="car-image" />
        </div>
        <div className="reserve-car-info flex-main">
          <div className="shadow btn-padding align pri-font-clr min-font standard-weight spacing">
            <i
              style={{ marginRight: ".4em" }}
              className="fa-solid fa-money-bill sec-font-clr2"
            ></i>
            {selectedCar.price}
          </div>
          <div className="shadow btn-padding align pri-font-clr min-font standard-weight spacing">
            <i
              style={{ marginRight: ".4em" }}
              className="fa-solid fa-car sec-font-clr2"
            ></i>
            {selectedCar.model}
          </div>
          <div className="shadow btn-padding align pri-font-clr min-font standard-weight spacing">
            <i
              style={{ marginRight: ".4em" }}
              className="fa-solid fa-gas-pump sec-font-clr2"
            ></i>
            {selectedCar.mileage}
          </div>
          <div className="shadow btn-padding align pri-font-clr min-font standard-weight spacing">
            <i
              style={{ marginRight: ".4em" }}
              className="fa-solid fa-star sec-font-clr2"
            ></i>
            {selectedCar.rating}
          </div>
        </div>
      </div>
      <form className="signin-form constant-margin sec-bg">
        <p className="standard-fz header-margin align sec-font sec-font-clr">
          Fill In The Rental Details
        </p>
        <div
          style={{ gap: ".7em" }}
          className="flex-main form-wrapper sub-header-margin"
        >
          <input
            ref={nameRef}
            required
            type="text"
            placeholder="Enter full name"
          />
          <input
            ref={emailRef}
            required
            type="email"
            placeholder="Enter email"
          />
        </div>
        <div
          style={{ gap: ".7em" }}
          className="flex-main form-wrapper sub-header-margin"
        >
          <div>
            <p>Pick Up Date</p>
            <input
              ref={pickUpDateRef}
              onChange={handleMinDateCheck}
              required
              type="date"
              min={`${year}-${month}-${day}`}
              max={maxDate}
            />
          </div>
          <div>
            <p>Drop Off Date</p>
            <input
              ref={dropOffDateRef}
              onChange={handleMaxDateCheck}
              required
              type="date"
              min={`${year}-${month}-${day}`}
            />
          </div>
        </div>
        <div
          style={{ gap: ".7em" }}
          className="flex-main form-wrapper sub-header-margin"
        >
          <div>
            <p>Pick Up Time</p>
            <input ref={pickUpTimeRef} required type="time" />
          </div>
          <div>
            <p>Drop Off Time</p>
            <input ref={dropOffTimeRef} required type="time" />
          </div>
        </div>
        <div className="sub-header-margin">
          <p className="standard-fz sub-header-margin">
            Select additional service(s):
          </p>
          <div className="flex-main form-wrapper sub-header-margin">
            <div className="flex-plain">
              <input
                onClick={handlePriceChange}
                id="GPS"
                value="10"
                className="reserve-input"
                type="checkbox"
              />
              <label
                htmlFor="GPS"
                className="min-font sec-font-clr standard-weight pri-font-clr"
              >
                GPS ($10)
              </label>
            </div>
            <div className="flex-plain">
              <input
                onClick={handlePriceChange}
                id="insurance"
                value="30"
                className="reserve-input"
                type="checkbox"
              />
              <label
                htmlFor="insurance"
                className="min-font sec-font-clr standard-weight pri-font-clr"
              >
                Insurance ($30)
              </label>
            </div>
            <div className="flex-plain">
              <input
                onClick={handlePriceChange}
                value="5"
                id="child-seats"
                className="reserve-input"
                type="checkbox"
              />
              <label
                htmlFor="child-seats"
                className="min-font sec-font-clr standard-weight pri-font-clr"
              >
                Child Seats ($5)
              </label>
            </div>
          </div>
        </div>
        <div className="sub-header-margin">
          <p>Purpose Of Rent:</p>
          <select
            onChange={handlePersonalUseClick}
            required
            name="purpose"
            id="purpose"
          >
            <option className="standard-weight" value="Tour">
              Tour
            </option>
            <option className="standard-weight" value="Personal use">
              Personal use
            </option>
          </select>
        </div>
        {isPersonalUse && (
          <div>
            <div className="CV-wrapper flex-main form-wrapper pri-font-clr">
              <label
                htmlFor="driver's-license"
                className="standard-weight sec-font-clr"
              >
                Upload Valid Driver's License{" "}
                <i className="fa-solid fa-file sec-font-clr2"></i>
              </label>
              <input
                ref={licenseRef}
                required
                style={{ flex: 1 }}
                id="driver's-license"
                type="file"
                placeholder="Enter email"
              />
            </div>
            <div className="CV-wrapper flex-main form-wrapper sub-header-margin pri-font-clr">
              <label
                htmlFor="passport"
                className="standard-weight sec-font-clr"
              >
                Upload Valid Passport{" "}
                <i className="fa-solid fa-file sec-font-clr2"></i>
              </label>
              <input
                ref={passportRef}
                required
                style={{ flex: 1 }}
                id="passport"
                type="file"
                placeholder="Enter email"
              />
            </div>
          </div>
        )}
        <div className="sub-header-margin">
          <div className="flex-plain">
            <input
              ref={confirmRef}
              className="reserve-input"
              type="checkbox"
              id="agree"
            />
            <label
              onClick={toggleBtnVisibility}
              className="pri-font-clr standard-weight"
              htmlFor="agree"
            >
              By clicking, you accept our terms and policies
            </label>
          </div>
        </div>
        <div className="sub-header-margin align">
          <p className="standard-fz">
            Total cost:{" "}
            <span
              style={{ fontSize: "1.2rem" }}
              ref={priceRef}
              className="sec-font-clr2"
            >
              ${carPrice}
            </span>
          </p>
        </div>
        {isBtnVisible && (
          <button
            onClick={handleSubmit}
            className="pri-bg transition standard-weight"
          >
            RESERVE
            <i
              style={{ marginLeft: ".4em" }}
              className="fa-solid fa-arrow-right-from-bracket"
            ></i>
          </button>
        )}
      </form>
    </div>
  );
}
