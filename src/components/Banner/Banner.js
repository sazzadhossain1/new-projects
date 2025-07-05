import React from "react";
import "./Banner.css";

import bannerPhoto from "../../accets/banner/bannerPhoto.jpg";
const Banner = () => {
  return (
    <div className="banner_parent_div">
      <img className="bannerPhoto" src={bannerPhoto} alt="" />
    </div>
  );
};

export default Banner;
