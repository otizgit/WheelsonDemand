import React from "react";
import "../../styles/partners.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mazdaLogo from "../../assets/images/Car-Logos/mazda.png";
import nissanLogo from "../../assets/images/Car-Logos/nissan.png";
import mitsubishiLogo from "../../assets/images/Car-Logos/mitsubishi.png";
import audiLogo from "../../assets/images/Car-Logos/audi.png";
import toyotaLogo from "../../assets/images/Car-Logos/toyota.png";
import bmwLogo from "../../assets/images/Car-Logos/bmw.png";

export default function Partners() {
  const partnersData = [
    {
      id: 1,
      imgUrl: mitsubishiLogo,
    },
    {
      id: 2,
      imgUrl: mazdaLogo,
    },
    {
      id: 3,
      imgUrl: nissanLogo,
    },
    {
      id: 4,
      imgUrl: audiLogo,
    },
    {
      id: 5,
      imgUrl: toyotaLogo,
    },
    {
      id: 6,
      imgUrl: bmwLogo,
    },
  ];

  return (
    <div className="constant-padding constant-margin cars-partners-container">
      <Slider>
        {partnersData.map((data) => {
          return (
            <div className="partners-container" key={data.id}>
              <img
                loading="lazy"
                className="partners-logo"
                src={data.imgUrl}
                alt="partner-logo"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
