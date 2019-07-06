import React, { Component } from "react";
import { connect } from "react-redux";
import InfinteScroll from "react-infinite-scroll-component";
import { getSeoulImages } from "../actions";
import ImageGalleryCard from "./ImageGalleryCard";
import "../css/main.scss";

class ImageGallery extends Component {
  state = { page: 1 };

  componentDidMount() {
    this.props.getSeoulImages(this.state.page);
    if (!this.props.pics) return;
  }

  renderImg = () => {
    const picArry = this.props.pics;
    if (!picArry) return;

    return picArry.map(pic => {
      return <ImageGalleryCard key={pic.id} info={pic} />;
    });
  };

  getMoreImages = () => {
    console.log("AAAAAA", this.state.page);
    const pageno = this.state.page + 1;
    this.setState({ page: pageno });
    this.props.getSeoulImages(pageno);
  };

  render() {
    if (!this.props.pics) return <div>Loading...</div>;

    return (
      <InfinteScroll
        dataLength={this.props.pics.length}
        next={this.getMoreImages}
        hasMore={true}
        loader={<div>Loading..</div>}
      >
        <div className="--image--gallery">{this.renderImg()}</div>
      </InfinteScroll>
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
