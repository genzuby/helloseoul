import React from "react";

const imgList = [
  "images/seoul-day1.jpg",
  "images/seoul-day2.jpg",
  "images/seoul-day3.jpg",
  "images/seoul-night1.jpg",
  "images/seoul-night2.jpg",
  "images/seoul-night3.jpg"
];

const ImgSlider = () => {
  return (
    <React.Fragment>
      {imgList.map(img => {
        return (
          <div
            className="--top--image"
            key={img}
            style={{ backgroundImage: `url(${img})` }}
          />
        );
      })}
    </React.Fragment>
  );
};

export default ImgSlider;
