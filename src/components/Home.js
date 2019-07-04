import React from "react";
import ImgSlider from "./ImgSlider";
import Cards from "./Cards";
import "../css/main.scss";

const Home = () => {
  return (
    <div className="App">
      <h1 className="--greeting--text">HELLO SEOUL!</h1>
      <p className="--greeting--pics--link">more Pictures of Seoul</p>
      <div className="--top--image--group">
        <ImgSlider />
      </div>
      <Cards />
    </div>
  );
};

export default Home;
