import React from "react";
import { ImgSpan } from "../styledComp";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const url = this.props.image;
    return (
      <ImgSpan span={this.state.spans}>
        <img ref={this.imageRef} alt={url} src={url} />
      </ImgSpan>
    );
  }
}

export default ImageCard;
