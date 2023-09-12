import React from "react";
import "../../styles/testimonial.css";
import Title from "./Title";
import clientOne from "../../assets/images/Testimonial-images/user1.jpg";
import clientTwo from "../../assets/images/Testimonial-images/user2.jpg";
import clientThree from "../../assets/images/Testimonial-images/user3.webp";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Testimonial() {
  AOS.init({
    duration: 500,
    once: true,
  });

  const testimonialData = [
    {
      id: 1,
      name: "Pete Daniels",
      position: "Client",
      testimony:
        "We rented a car from this website to go camping in the outskirts of town, the process was very easy and we really enjoyed the ride.",
      customerImg: clientOne,
    },
    {
      id: 2,
      name: "David Levington",
      position: "Client",
      testimony:
        "A friend introduced me to this website and just when I needed a card to ride to an occassion, I got it really fast and easy.",
      customerImg: clientTwo,
    },
    {
      id: 3,
      name: "Anna Stones",
      position: "Client",
      testimony:
        "This website is unbelievably reliable, the drive was smooth, the car wasn't even faulty at all and the prices were affordable.",
      customerImg: clientThree,
    },
  ];
  return (
    <div className="constant-padding constant-margin">
      <Title title="Client's Testimonial" />
      <div className="cars-container">
        {testimonialData.map((data) => {
          return (
            <div
              key={data.id}
              className="testimonial-container blog-container transition shadow"
              data-aos="fade-up"
            >
              <p
                style={{ lineHeight: 1.55 }}
                className="sec-font-clr standard-fz header-margin standard-fz sec-font"
              >
                "{data.testimony}"
              </p>
              <div className="customer-wrapper flex-main">
                <div className="flex">
                  <img
                    className="customer-img"
                    src={data.customerImg}
                    alt="customer image"
                  />
                  <div className="customer-info">
                    <p className="standard-fz">{data.name}</p>
                    <p className="standard-fz">{data.position}</p>
                  </div>
                </div>
                <div>
                  <i className="fa-solid fa-quote-right sec-font-clr2 title-fz"></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
