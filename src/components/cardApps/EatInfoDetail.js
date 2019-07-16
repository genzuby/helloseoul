import React, { Component } from "react";
import { connect } from "react-redux";
import { currentLocation } from "../../actions";
import ImageCard from "./ImageCard";
import MapContainer from "./MapContainer";
import _ from "lodash";
import "../../css/detailInfo.scss";
import "../../css/loader.scss";

class EatInfoDetail extends Component {
  renderImg = () => {
    const picData = this.props.marketinfo;

    if (!picData.pic) return;
    if (!Array.isArray(picData.pic)) picData.pic = [picData.pic];

    return picData.pic.map(pic => {
      return <ImageCard key={pic.serialnum} image={pic.originimgurl} />;
    });
  };

  renderDesc = (title, value, color) => {
    if (value) {
      const addClass = title === "Homepage" ? "--item--homepage--link" : "";
      return (
        <div key={title}>
          <div className={`--item--desc--icon --item--desc--icon--${color}`}>
            {title}
          </div>
          <p className={addClass} dangerouslySetInnerHTML={{ __html: value }} />
        </div>
      );
    }
  };

  renderMap = (loc, title) => {
    const { lat, lng } = loc;
    this.props.currentLocation(loc);
    return (
      <MapContainer
        dataArry={[{ lat, lng, locname: title }]}
        zoom={17}
        centerLoc={{ lat, lng }}
      />
    );
  };

  render() {
    const marketDetail = this.props.marketinfo;

    if (!marketDetail) {
      return <div className="--loader" />;
    }
    return (
      <div className="--detailinfo--selected-container">
        <div className="--detailinfo--selected--desc">
          <h3>
            {marketDetail.main.title
              .replace(/\(/gi, "  ")
              .replace(/\)/gi, "  ")}
          </h3>
          {this.renderDesc("Sales Items", marketDetail.desc.saleitem, "pink")}
          {this.renderDesc("Address", marketDetail.main.addr1, "yellow")}
          {this.renderDesc(
            "Info Center",
            marketDetail.desc.infocentershopping,
            "yellow"
          )}
          {this.renderDesc("Open", marketDetail.desc.opentime, "yellow")}
          {this.renderDesc(
            "Close",
            marketDetail.desc.restdateshopping,
            "yellow"
          )}

          {this.renderDesc("Directions", marketDetail.main.directions, "blue")}
          {this.renderDesc(
            "Parking",
            marketDetail.desc.parkingshopping,
            "blue"
          )}
          {this.renderDesc("Homepage", marketDetail.main.homepage, "blue")}
          {this.renderDesc("About Here", marketDetail.main.overview, "blue")}
        </div>
        <div className="--detailinfo--selected--map">
          {this.renderMap(
            { lat: marketDetail.main.mapy, lng: marketDetail.main.mapx },
            marketDetail.main.title
          )}
        </div>
        <div className="--detailinfo--selected--imgs">{this.renderImg()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    marketinfo: _.get(state.marketinfo, ownProps.selectContentId)
  };
};

export default connect(
  mapStateToProps,
  { currentLocation }
)(EatInfoDetail);
