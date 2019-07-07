import React, { Component } from "react";
import { connect } from "react-redux";
import InfinteScroll from "react-infinite-scroll-component";
import { getSeoulImages } from "../actions";
import ImageGalleryCard from "./ImageGalleryCard";
import ImageGalleryShowImage from "./ImageGalleryShowImage";
import "../css/main.scss";

class ImageGallery extends Component {
  state = { page: 1, showModal: "none" };

  componentDidMount() {
    this.props.getSeoulImages(this.state.page);
    if (!this.props.pics) return;
  }

  renderImg = () => {
    const picArry = this.props.pics;
    if (!picArry) return;

    return picArry.map((pic, idx) => {
      return <ImageGalleryCard handler={this.handler} key={idx} info={pic} />;
    });
  };

  getMoreImages = () => {
    const pageno = this.state.page + 1;
    this.setState({ page: pageno });
    this.props.getSeoulImages(pageno);
  };

  handler = () => {
    this.setState({
      showModal: "block"
    });
  };

  render() {
    if (!this.props.pics) return <div />;

    return (
      <div className=".--image--gallery--container ">
        <InfinteScroll
          dataLength={this.props.pics.length}
          next={this.getMoreImages}
          hasMore={true}
        >
          <div className="--image--gallery">{this.renderImg()}</div>
        </InfinteScroll>
        <ImageGalleryShowImage showModal={this.state.showModal} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pics: state.pics.flat()
  };
};

export default connect(
  mapStateToProps,
  { getSeoulImages }
)(ImageGallery);
