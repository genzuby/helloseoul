import React from "react";
import Modal from "./Modal";
import { connect } from "react-redux";

class ImageGalleryShowImage extends React.Component {
  renderContent = () => {
    if (this.props.selectedpic) {
      const picinfo = this.props.selectedpic;
      return <img src={picinfo.urls.regular} alt={picinfo.alt_description} />;
    }
  };

  renderModal = () => {
    if (this.props.showModal) {
      return (
        <Modal
          content={this.renderContent()}
          modalClose={this.props.closeModal}
        />
      );
    }
  };

  render() {
    return <div>{this.renderModal()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    pics: state.pics.flat(),
    selectedpic: state.selectedpic
  };
};

export default connect(mapStateToProps)(ImageGalleryShowImage);
