import React, { useEffect, useContext } from "react";
import "../styles/about.css";
import playStoreImg from "../../src/assets/images/Download-Links/play-store.png";
import appStoreImg from "../../src/assets/images/Download-Links/app-store.png";
import logoWhite from "../../src/assets/images/logos/logoWhite.png";
import phoneGif from "../../src/assets/images/phone.gif";
import newsletterGif from "../../src/assets/images/newsletter.gif";
import NewsletterForm from "../components/UI/NewsletterForm";
import SectionHeader from "../components/UI/SectionHeader";
import { ToggleContext } from "../App";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function About() {
  const setDisplayHeader = useContext(ToggleContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    setDisplayHeader(true);
    document.title = "WheelsonDemand - About";
  }, []);

  const teamData = [
    {
      id: 1,
      imgSrc:
        "https://ik.imagekit.io/zusxqcpbw/tr:w-400/team1.avif?updatedAt=1694600057681",
      teamName: "Craig Dickson",
      teamPosition: "Lead Consultant",
    },
    {
      id: 2,
      imgSrc:
        "https://ik.imagekit.io/zusxqcpbw/tr:w-400/team2.avif?updatedAt=1694600057523",
      teamName: "Tim White",
      teamPosition: "Lead Technical Advisor",
    },
    {
      id: 3,
      imgSrc:
        "https://ik.imagekit.io/zusxqcpbw/tr:w-400/team3.avif?updatedAt=1694600057617",
      teamName: "Daniel Wood",
      teamPosition: "Software Engineer",
    },
  ];

  return (
    <div>
      <SectionHeader title="ABOUT US" />
      <div className="flex constant-padding about-hero-container header-margin">
        <div>
          <LazyLoadImage
            effect="blur"
            src="https://ik.imagekit.io/zusxqcpbw/tr:w-600/hero-img-plain3.png?updatedAt=1694598286615"
            className="about-img"
            alt="car image"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src={logoWhite}
            alt="logo"
            className="logo about-logo-img"
          />
          <img />
          <h3
            className="about-logo header-margin2 standard-fz sec-font-clr"
            style={{ fontStyle: "italic" }}
          >
            We Are Commited To Providing Safe And Quality Ride Solutions
          </h3>
          <div className="offers sub-header-margin">
            <div
              className="flex-plain pri-font-clr"
              style={{ gap: ".5em" }}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
            >
              <i className="fa-solid fa-circle-check sec-font-clr2"></i>
              <p className="standard-fz sec-font">Quality Services</p>
            </div>
            <div
              className="flex-plain pri-font-clr"
              style={{ gap: ".5em" }}
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
            >
              <i className="fa-solid fa-circle-check sec-font-clr2"></i>
              <p className="standard-fz sec-font">Quality Vehicles</p>
            </div>
            <div
              className="flex-plain pri-font-clr"
              style={{ gap: ".5em" }}
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              <i className="fa-solid fa-circle-check sec-font-clr2"></i>
              <p className="standard-fz sec-font">Quality Offers</p>
            </div>
            <div
              className="flex-plain pri-font-clr"
              style={{ gap: ".5em" }}
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              <i className="fa-solid fa-circle-check sec-font-clr2"></i>
              <p className="standard-fz sec-font">Swift Operations</p>
            </div>
            <div
              className="flex-plain pri-font-clr"
              style={{ gap: ".5em" }}
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
            >
              <i className="fa-solid fa-circle-check sec-font-clr2"></i>
              <p className="standard-fz sec-font">24hr Availabilty</p>
            </div>
            <div
              className="flex-plain pri-font-clr"
              style={{ gap: ".5em" }}
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="500"
            >
              <i className="fa-solid fa-circle-check sec-font-clr2"></i>
              <p className="standard-fz sec-font">24hr Customer Service</p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ paddingBottom: "2.5em" }}
        className="constant-margin transition about-writeup"
      >
        <div>
          <p
            className="standard-fz sec-font-clr sub-header-margin"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            In a rapidly evolving world where convenience, efficiency, and
            sustainability are paramount, our car rental app envisions
            revolutionizing the way people experience mobility. With a
            commitment to seamless user experiences, technological innovation,
            and environmental consciousness, our app aims to be more than just a
            means of renting cars - it aspires to be a key player in shaping the
            future of transportation.
          </p>
          <p
            className="standard-fz sec-font-clr sub-header-margin"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="500"
          >
            At the heart of our vision is a user-centric approach that
            prioritizes simplicity, convenience, and personalization. Our app
            will empower users to effortlessly browse, book, and manage rental
            cars in a few taps, making the entire process smoother than ever.
            From selecting the perfect vehicle for their needs to choosing
            pick-up and drop-off locations, we're dedicated to ensuring a
            hassle-free experience that puts the user in control.
          </p>
          <p
            className="standard-fz sec-font-clr sub-header-margin"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="500"
          >
            We aim to provide a diverse and adaptable fleet that caters to a
            variety of preferences and needs. From fuel-efficient compact cars
            to spacious SUVs and eco-friendly electric vehicles, users will have
            a wide range of options to choose from. Moreover, we envision a
            feature that allows users to customize their rental experience by
            selecting add-ons such as car seats, GPS devices, and roof racks,
            ensuring their journey is tailored to their specific requirements.
          </p>
          <p
            className="standard-fz sec-font-clr"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            The vision of our car rental app encapsulates a future where
            mobility is not just a means of getting from point A to B, but a
            transformative experience that combines convenience, innovation, and
            environmental consciousness. By putting users first, integrating
            cutting-edge technology, promoting sustainability, and encouraging
            shared mobility, we aim to set new standards for the car rental
            industry and lead the way toward a brighter, more connected
            tomorrow.
          </p>
        </div>
      </div>
      <div className="flex-plain constant-padding header-margin2 about-newsletter-container">
        <div
          className="download-links-img"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <h2 className="sec-font standard-fz2">We Are Available On Mobile</h2>
          <p className="min-font sec-font-clr sub-header-margin about-sub-title">
            Check out our mobile app today
          </p>
          <div className="img-wrapper flex-plain">
            <button>
              <LazyLoadImage
                effect="blur"
                className="scale transition"
                src={playStoreImg}
                alt="play store"
              />
            </button>
            <button>
              <LazyLoadImage
                effect="blur"
                className="scale transition"
                src={appStoreImg}
                alt="app store"
              />
            </button>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">
          <LazyLoadImage
            effect="blur"
            className="phone-gif"
            src={phoneGif}
            alt="phone swiping"
          />
        </div>
      </div>
      <div className="flex-plain constant-padding constant-margin about-newsletter-container about-newsletter">
        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">
          <LazyLoadImage
            effect="blur"
            className="phone-gif"
            src={newsletterGif}
            alt="newsletter image"
          />
        </div>
        <div data-aos="fade-up">
          <h2 className="sec-font standard-fz2">NewsLetter</h2>
          <p className="min-font sec-font-clr sub-header-margin">
            Subscribe to our newsletter to stay updated on current information
          </p>
          <NewsletterForm />
        </div>
      </div>
      <div className="constant-padding constant-margin">
        <h1 className="sec-font standard-fz2 sub-header-margin about-titles">
          Meet Our Highly Experienced Team
        </h1>
        <div className="cars-container">
          {teamData.map((data, index) => {
            return (
              <div
                key={data.id}
                className="team-container shadow"
                data-aos="slide-up"
                data-aos-delay={index * 100}
              >
                <img
                  loading="lazy"
                  className="sub-header-margin"
                  src={data.imgSrc}
                  alt={data.teamName}
                />
                <div className="team-content align">
                  <h2 className="standard-fz sub-header-margin">
                    {data.teamName}
                  </h2>
                  <p
                    style={{ textTransform: "uppercase" }}
                    className="sec-font-clr min-font standard-weight"
                  >
                    {data.teamPosition}
                  </p>
                </div>
                <div className="team-overlay flex transition">
                  <div className="social-handle scale transition">
                    <a href="">
                      <i className="fa-brands fa-facebook-f pri-bg standard-fz"></i>
                    </a>
                  </div>
                  <div className="social-handle scale transition">
                    <a href="">
                      <i className="fa-brands fa-twitter pri-bg standard-fz"></i>
                    </a>
                  </div>
                  <div className="social-handle scale transition">
                    <a href="">
                      <i className="fa-brands fa-linkedin-in pri-bg standard-fz"></i>
                    </a>
                  </div>
                  <div className="social-handle scale transition">
                    <a href="">
                      <i className="fa-brands fa-pinterest-p pri-bg standard-fz"></i>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
