import React from "react";
import ImgSlider from "./ImgSlider";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import "../css/main.scss";

const Home = () => {
  return (
    <div className="App">
      <h1 className="--greeting--text">HELLO SEOUL!</h1>
      <Link to="pics">
        <p className="--greeting--pics--link">Pictures of Seoul</p>
      </Link>
      <div className="--top--image--group">
        <ImgSlider />
      </div>
      <Cards />
    </div>
  );
};

export default Home;
