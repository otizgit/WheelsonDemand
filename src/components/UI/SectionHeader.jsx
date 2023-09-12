import React from "react";
import SectionHeaderImg from "../../assets/images/Section-Images/section-image.png";
import SectionHeaderImgMobile from "../../assets/images/Section-Images/section-image-mobile.png";
import "../../styles/sectionstyle.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "./Title";

export default function SectionHeader(props) {
  AOS.init({
    duration: 1000,
    once: true,
  });

  return (
    <div>
      <div className="section-img-container sub-header-margin">
        <picture>
          <source media="(max-width: 950px)" srcSet={SectionHeaderImgMobile} />
          <img
            className="section-img sub-header-margin"
            src={SectionHeaderImg}
            alt="section image"
          />
        </picture>
      </div>
      <Title title={props.title} />
    </div>
  );
}