import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BecomeADriver from "../components/UI/BecomeADriver";
import Partners from "../components/UI/Partners";
import carData from "../assets/data/carData";
import SectionHeader from "../components/UI/SectionHeader";
import "../styles/cars.css";
import { ToggleContext } from "../App";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Cars() {
  const setDisplayHeader = useContext(ToggleContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    setDisplayHeader(true);
  }, []);

  AOS.init({
    duration: 500,
    once: true,
  });

  let paramCheck = "";
  const carParams = useParams();
  const [selectedCar, setSelectedCar] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  if (carParams.id === "All") {
    paramCheck = "Audi";
  } else {
    paramCheck = carParams.id;
  }

  const brand = carData.filter((data) => data.carBrand === paramCheck);

  useEffect(() => {
    setSelectedCar(Array.of(brand[0].carMakes[0]));
  }, [paramCheck]);

  function toggleCarMake(e) {
    const target = e.target.innerText;
    brand.forEach((car) => {
      const carObj = car.carMakes.filter((make) => make.carName === target);
      setSelectedCar([...carObj]);
    });
  }

  const [activeCar, setActiveCar] = useState(null);

  useEffect(() => {
    setActiveCar(0);
  }, [paramCheck]);

  function toggleButtonClick(index) {
    setActiveCar(index);
  }

  function toggleFilter() {
    setIsFilterOpen((prevFilter) => !prevFilter);
  }

  function setFilter() {
    setIsFilterOpen(false);
  }

  const carBrands = carData.map((data) => {
    return data.carBrand;
  });

  return (
    <div>
      <SectionHeader title="CARS" />
      <div className="constant-padding constant-margin">
        <div className="car-brand-container">
          {carBrands.map((brand, index) => {
            return (
              <Link
                key={index}
                to={`/cars/${brand}`}
                style={{ textDecoration: "none" }}
                className="cars-btn sec-bg scale transition"
                data-aos="fade"
                data-aos-delay={(index + 1) * 100}
              >
                <p
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "500",
                    letterSpacing: "1px",
                  }}
                  className="min-font pri-font-clr sec-font"
                >
                  {brand}
                </p>
              </Link>
            );
          })}
        </div>
        <div className="car-wrapper">
          <div className="car-make-container car-make-container-desktop">
            <div className="car-list">
              {brand[0].carMakes.map((make, index) => {
                return (
                  <button
                    onClick={(e) => {
                      toggleButtonClick(index);
                      toggleCarMake(e);
                    }}
                    key={make.id}
                    style={{
                      display: "block",
                      paddingBlock: "1em",
                      letterSpacing: "1px",
                    }}
                    className={`car-make sub-header-margin btn-padding sec-font ${
                      activeCar === index ? "active-button" : ""
                    }`}
                  >
                    {make.carName}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="car-make-container car-make-container-mobile">
            <div
              onClick={toggleFilter}
              className="car-filter constant-padding flex-main"
            >
              <p className="standard-weight standard-fz pri-font-clr">
                Select Car Make
              </p>
              <i className="fa-solid fa-caret-down"></i>
            </div>
            {isFilterOpen && (
              <div className="car-list">
                {brand[0].carMakes.map((make, index) => {
                  return (
                    <button
                      onClick={(e) => {
                        toggleButtonClick(index);
                        toggleCarMake(e);
                        setFilter();
                      }}
                      key={make.id}
                      style={{
                        display: "block",
                        paddingBlock: "1em",
                        letterSpacing: "1px",
                      }}
                      className={`car-make sub-header-margin btn-padding sec-font ${
                        activeCar === index ? "active-button" : ""
                      }`}
                    >
                      {make.carName}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          <div className="car-display-img">
            {selectedCar.map((car) => (
              <img
                loading="lazy"
                key={car.id}
                src={car.imgUrl}
                alt={car.carName}
              />
            ))}
          </div>
          {selectedCar.map((car) => {
            return (
              <div key={car.id} className="car-info-container align">
                <p
                  style={{
                    borderRight: "none",
                    letterSpacing: "1px",
                  }}
                  className="sec-font-clr standard-fz2 pri-font-clr standard-weight sec-font query-car-name"
                >
                  {car.carName}
                </p>
                <h1
                  style={{
                    borderTopLeftRadius: "6px",
                    borderTopRightRadius: "6px",
                    letterSpacing: "2px",
                  }}
                  className="standard-fz pri-font-clr standard-fz sec-bg car-padding sec-font2"
                >
                  {car.price}
                </h1>
                <div className="car-info-wrapper flex-main sec-font-clr min-font standard-weight">
                  <p className="car-padding">
                    <i
                      style={{ marginRight: ".2em" }}
                      className="fa-solid fa-car sec-font-clr2"
                    ></i>
                    Model
                  </p>
                  <p className="car-padding">{car.model}</p>
                </div>
                <div className="car-info-wrapper flex-main sec-font-clr min-font standard-weight">
                  <p className="car-padding">
                    <i
                      style={{ marginRight: ".2em" }}
                      className="fa-solid fa-gears sec-font-clr2"
                    ></i>
                    Transmission
                  </p>
                  <p className="car-padding">{car.carType}</p>
                </div>
                <div className="car-info-wrapper flex-main sec-font-clr min-font standard-weight">
                  <p className="car-padding">
                    <i
                      style={{ marginRight: ".2em" }}
                      className="fa-solid fa-gas-pump sec-font-clr2"
                    ></i>
                    Mileage
                  </p>
                  <p className="car-padding">{car.mileage}</p>
                </div>
                <div className="car-info-wrapper flex-main sec-font-clr min-font standard-weight">
                  <p className="car-padding">
                    <i
                      style={{ marginRight: ".2em" }}
                      className="fa-solid fa-star sec-font-clr2"
                    ></i>
                    Rating
                  </p>
                  <p className="car-padding">{car.rating}</p>
                </div>
                <div className="car-info-wrapper flex-main sec-font-clr min-font standard-weight">
                  <p className="car-padding">
                    <i
                      style={{ marginRight: ".2em" }}
                      className="fa-solid fa-paint-roller sec-font-clr2"
                    ></i>
                    Color
                  </p>
                  <p className="car-padding">{car.color}</p>
                </div>
                <Link
                  to={`/reserve/${selectedCar.map((car) => car.carName)}`}
                  className="pri-font-clr"
                  style={{ textDecoration: "none", letterSpacing: "2px" }}
                >
                  <div
                    style={{
                      paddingBlock: ".8em",
                      borderBottomRightRadius: "6px",
                      borderBottomLeftRadius: "6px",
                    }}
                    className="pri-bg standard-fz sec-font standard-weight"
                  >
                    Reserve Now
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <BecomeADriver />
      <Partners />
    </div>
  );
}
