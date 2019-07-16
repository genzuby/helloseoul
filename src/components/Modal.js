import React from "react";
import "../css/main.scss";

const Modal = props => {
  return (
    <div className="--modal--container" onClick={props.modalClose}>
      <span onClick={props.modalClose}>
        <i className="fas fa-times" />
      </span>
      <div className="--modal--body" onClick={e => e.stopPropagation()}>
        <div className="--modal--content">{props.content}</div>
      </div>
    </div>
  );
};

export default Modal;
