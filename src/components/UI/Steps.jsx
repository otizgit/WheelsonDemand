import React from "react";
import Drive from "../../assets/images/Steps-Images/Drive.gif";
import Call from "../../assets/images/Steps-Images/Call.gif";
import Choose from "../../assets/images/Steps-Images/Choose.gif";
import "../../styles/steps.css";
import Title from "./Title";

const processes = [
  {
    title: "Choose a Car",
    imgUrl: Choose,
    moreInfo:
      "We offer a wide range of vehicles to satisfy all your driving needs, take the wheels of the car of your dreams in just a click on a button",
  },
  {
    title: "Contact Operator",
    imgUrl: Drive,
    moreInfo:
      "Our amicable operators are always ready to provide assistance and help whenever necessary to solving problems so as to give you the best experience",
  },
  {
    title: "Hit The Road",
    imgUrl: Call,
    moreInfo:
      "Now it's time to take a ride and explore, we got you covered with our wide range of cars and services",
  },
];

export default function Steps() {
  return (
    <div className="constant-padding constant-margin">
      <Title title="Explore The Rental Process" />

      <div className="steps-wrapper align pri-font-clr">
        {processes.map((process, index) => {
          return (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 200}
            >
              <img
                loading="lazy"
                src={process.imgUrl}
                className="steps-img header-margin transition"
                alt={process.title}
              />
              <p className="sec-font3 steps-title">{process.title}</p>
              <p
                style={{ lineHeight: "1.2rem" }}
                className="sec-font-clr min-font standard-weight"
              >
                {process.moreInfo}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
