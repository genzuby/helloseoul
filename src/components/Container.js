import React from "react";
import Menu from "./Menu";
import ImageGallery from "./ImageGallery";

const Container = () => {
  return (
    <div>
      <Menu selected="GALLERY" />
      <ImageGallery />
    </div>
  );
};

export default Container;
