import React, { Component } from "react";
import { connect } from "react-redux";
import { currentLocation } from "../../actions";
import ImageCard from "./ImageCard";
import MapContainer from "./MapContainer";
import _ from "lodash";
import "../../css/detailInfo.scss";

class EatInfoDetail extends Component {
  renderImg = () => {
    const picArry = this.props.marketinfo;
    if (!picArry || !this.props.selectContentId) return;

    const picData = _.get(picArry, this.props.selectContentId);

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
        <p>
          <div className={`--item--desc--icon --item--desc--icon--${color}`}>
            {title}
          </div>
          <div
            className={addClass}
            dangerouslySetInnerHTML={{ __html: value }}
          />
        </p>
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
    if (!this.props.marketinfo) return;
    const marketDetail = _.get(
      this.props.marketinfo,
      this.props.selectContentId
    );

    if (!marketDetail) {
      return <div>Loading</div>;
    }
    return (
      <div className="--detailinfo--selected-container">
        <div className="--detailinfo--selected--desc">
          <h3>{marketDetail.main.title}</h3>
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

const mapStateToProps = state => {
  return {
    marketinfo: state.marketinfo
  };
};

export default connect(
  mapStateToProps,
  { currentLocation }
)(EatInfoDetail);
