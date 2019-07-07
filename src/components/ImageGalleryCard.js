import React from "react";
import { connect } from "react-redux";
import { selectedPic } from "../actions";
import "../css/main.scss";

class ImageGalleryCard extends React.Component {
  constructor(props) {
    super(props);
    this.getPicInfo = this.getPicInfo.bind(this);
  }

  getPicInfo() {
    if (!this.props) return;
    this.props.selectedPic(this.props.info);
  }
  render() {
    const info = this.props.info;
    return (
      <div className="--image--gallery--card">
        <img alt={info.alt_description} src={info.urls.regular} />
        <div className="--image--gallery--desc">
          <ul>
            <li>Photographed by {info.user.name}</li>
            <li>{info.description}</li>
            <li>{info.alt_description}</li>
            <li
              onClick={() => {
                this.getPicInfo();
                this.props.handler();
              }}
            >
              See Orignal Image
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { selectedPic }
)(ImageGalleryCard);
