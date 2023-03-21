import React from "react";
import { Image } from "mui-image";
import homeImage from "../../../images/homeImage.png";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Image
        className="home-image"
        src={homeImage}
        fit="contain"
        style={{ background: "transparent", animation: "none" }}
      />
    </div>
  );
};

export default Home;
