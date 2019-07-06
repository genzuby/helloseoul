import React from "react";
import ReactDOM from "react-dom";
import ImageGallery from "./ImageGallery";
import { Link } from "react-router-dom";
import "../css/main.scss";

const Modal = props => {
  return ReactDOM.createPortal(
    <div className="--modal--container">
      <Link to="/">
        <span title="close">X</span>
      </Link>
      <ImageGallery />
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
