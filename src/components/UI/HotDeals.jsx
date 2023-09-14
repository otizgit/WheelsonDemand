import React from "react";
import "../../styles/hotdeals.css";
import Title from "./Title";
import carData from "../../assets/data/carData";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function HotDeals() {
  const hotDealsArray = [];

  carData.forEach((brand) => {
    const hotDeals = brand.carMakes.filter(
      (car) => car.category === "hot deals"
    );
    hotDealsArray.push(...hotDeals);
  });

  return (
    <div className="constant-padding constant-margin">
      <Title title="Hot Deals" />
      <div className="cars-container">
        {hotDealsArray.map((hotDeal, index) => {
          return (
            <div
              key={index}
              className="car-box shadow"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <LazyLoadImage
                effect="blur"
                src={hotDeal.imgUrl}
                alt={hotDeal.carName}
                className="car-img transition sub-header-margin"
              />
              <h2 className="standard-fz car-name pri-font-clr header-margin">
                {hotDeal.carName}
              </h2>
              <div className="flex-main sub-header-margin">
                <p className="min-font pri-font-clr standard-weight">
                  <i className="fa-solid fa-money-bill sec-font-clr2"></i>
                  {hotDeal.price}
                </p>
                <p className="min-font pri-font-clr standard-weight">
                  <i className="fa-solid fa-star sec-font-clr2"></i>
                  {hotDeal.rating}
                </p>
              </div>
              <div className="flex-main sub-header-margin">
                <p className="min-font pri-font-clr sec-font-clr standard-weight">
                  <i className="fa-solid fa-car sec-font-clr2"></i>
                  {hotDeal.model}
                </p>
                <p className="min-font pri-font-clr sec-font-clr standard-weight">
                  <i className="fa-solid fa-gears sec-font-clr2"></i>
                  {hotDeal.carType}
                </p>
                <p className="min-font pri-font-clr sec-font-clr standard-weight">
                  <i className="fa-solid fa-gas-pump sec-font-clr2"></i>
                  {hotDeal.mileage}
                </p>
              </div>
              <div className="flex-main deals-btn-container">
                <Link
                  to={`/cars/${hotDeal.carBrand}`}
                  style={{ textDecoration: "none" }}
                  className="sec-font-clr min-font transition sec-font"
                >
                  Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
