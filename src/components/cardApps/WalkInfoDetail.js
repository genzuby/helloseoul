import React, { Component } from "react";
import { connect } from "react-redux";
import { currentLocation } from "../../actions";
import ImageCard from "./ImageCard";
import MapContainer from "./MapContainer";
import _ from "lodash";
import "../../css/detailInfo.scss";

class WalkInfoDetail extends Component {
  renderImg = () => {
    const picArry = this.props.walkinfo;
    if (!picArry || !this.props.selectContentId) return;

    const picData = _.get(picArry, this.props.selectContentId);

    if (!picData.pic) return;
    if (!Array.isArray(picData.pic)) picData.pic = [picData.pic];

    return picData.pic.map(pic => {
      return <ImageCard key={pic.serialnum} image={pic.originimgurl} />;
    });
  };

  renderDesc = (title, value, color, addclsName) => {
    if (value) {
      const addClass = title === "Homepage" ? "--item--homepage--link" : "";
      return (
        <div key={title}>
          <p>
            <div
              className={`--item--desc--icon --item--desc--icon--${color} ${addclsName}`}
            >
              {title}
            </div>
            <div
              className={addClass}
              dangerouslySetInnerHTML={{ __html: value }}
            />
          </p>
        </div>
      );
    }
  };

  renderAddtionalInfo = infoArray => {
    if (!infoArray) return;

    if (!Array.isArray(infoArray)) infoArray = [infoArray];

    return infoArray.map(info => {
      return this.renderDesc(
        info.infoname,
        info.infotext,
        "gray",
        "--item--desc--icon--long"
      );
    });
  };

  renderMap = (loc, title) => {
    const { lat, lng } = loc;
    this.props.currentLocation(loc);
    return (
      <MapContainer
        dataArry={[{ lat, lng, locname: title }]}
        zoom={15}
        centerLoc={{ lat, lng }}
      />
    );
  };

  render() {
    if (!this.props.walkinfo) return;
    const walkDetail = _.get(this.props.walkinfo, this.props.selectContentId);

    if (!walkDetail) {
      return <div>Loading</div>;
    }
    return (
      <div className="--detailinfo--selected-container">
        <div className="--detailinfo--selected--desc">
          <h3>{walkDetail.main.title}</h3>
          {this.renderDesc("Address", walkDetail.main.addr1, "yellow")}
          {this.renderDesc(
            "Info Center",
            walkDetail.desc1.infocenter,
            "yellow"
          )}
          {this.renderDesc("Close", walkDetail.desc1.restdate, "yellow")}
          {this.renderDesc("Directions", walkDetail.main.directions, "blue")}
          {this.renderDesc("Parking", walkDetail.desc1.parking, "blue")}
          {this.renderDesc("Homepage", walkDetail.main.homepage, "blue")}
          {this.renderDesc("About Here", walkDetail.main.overview, "blue")}
          {this.renderAddtionalInfo(walkDetail.desc2)}
        </div>
        <div className="--detailinfo--selected--map">
          {this.renderMap(
            { lat: walkDetail.main.mapy, lng: walkDetail.main.mapx },
            walkDetail.main.title
          )}
        </div>
        <div className="--detailinfo--selected--imgs">{this.renderImg()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    walkinfo: state.walkinfo
  };
};

export default connect(
  mapStateToProps,
  { currentLocation }
)(WalkInfoDetail);
