import React from "react";
import "../css/main.scss";

class ImageGalleryCard extends React.Component {
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
          </ul>
        </div>
      </div>
    );
  }
}

export default ImageGalleryCard;
