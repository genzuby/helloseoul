import React from "react";
import ImgSlider from "./ImgSlider";
import Cards from "./Cards";
import "../css/main.scss";

const App = () => {
  return (
    <div className="App">
      <h1 className="--greeting--text">HELLO SEOUL!</h1>
      <div className="--top--image--group">
        <ImgSlider />
      </div>
      <Cards />
    </div>
  );
};

export default App;
