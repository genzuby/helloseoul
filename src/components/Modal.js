import React from "react";
import "../css/main.scss";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.modalClose = this.modalClose.bind(this);
  }
  state = {
    modalCloseFlag: this.props.showModal
  };

  componentDidUpdate(prvProps, provState) {
    if (provState.modalCloseFlag !== this.props.showModal)
      this.setState({ modalCloseFlag: this.props.showModal });
  }

  modalClose() {
    this.setState({ modalCloseFlag: "none" });
  }

  render() {
    return (
      <div
        className="--modal--container"
        onClick={this.modalClose}
        style={{ display: this.state.modalCloseFlag }}
      >
        <span onClick={this.modalClose}>
          <i className="fas fa-times" />
        </span>
        <div className="--modal--body" onClick={e => e.stopPropagation()}>
          <div className="--modal--header">{this.props.header}</div>
          <div className="--modal--content">{this.props.content}</div>
        </div>
      </div>
    );
  }
}

export default Modal;
