import React from "react";
import ReactDOM from "react-dom";
import "../css/main.scss";

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="--modal--container">
      <span>
        <i className="fas fa-times" />
      </span>
      <div className="--modal--body" onClick={e => e.stopPropagation()}>
        <div className="--modal--header">{props.header}</div>
        <div className="--modal--content">{props.content}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
