import React from "react";
import Modal from "./Modal";
import history from "../history";
import { connect } from "react-redux";

class ImageGalleryShowImage extends React.Component {
  renderContent = () => {
    if (this.props.selectedpic) {
      const picinfo = this.props.selectedpic;
      return <img src={picinfo.urls.regular} alt={picinfo.alt_description} />;
    }
  };

  renderHeader = () => {
    if (this.props.selectedpic) {
      const picinfo = this.props.selectedpic;
      return (
        <div>
          <p>{picinfo.description}</p>
          <p>{picinfo.user.name}</p>
        </div>
      );
    }
  };

  render() {
    return (
      <Modal
        onDismiss={() => history.push("/pics")}
        // header={this.renderHeader()}
        content={this.renderContent()}
      />
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    pics: state.pics.flat(),
    selectedpic: state.selectedpic
  };
};

export default connect(mapStateToProps)(ImageGalleryShowImage);
