import React, { Component } from "react";
import { connect } from "react-redux";
import { currentLocation } from "../../actions";
import { Link } from "react-router-dom";
import MapContainer from "./MapContainer";
import EatInfoDetail from "./EatInfoDetail";
import WalkInfoDetail from "./WalkInfoDetail";
import "../../css/detailInfo.scss";

class ListObject extends Component {
  componentDidMount() {
    this.props.currentLocation({ lat: 37.566296, lng: 126.977943 });
  }

  renderObjectList = () => {
    const dataList = this.props.lists;
    if (!dataList) return;

    return dataList.map(data => {
      let imgurl =
        data.firstimage === undefined
          ? "/images/NoImageFound.png"
          : data.firstimage;
      return (
        <li
          key={data.contentid}
          onClick={() => {
            this.props.listClick(data.contentid);
            window.scrollTo(0, 0);
          }}
        >
          <img alt={data.title} src={imgurl} />
          <h3 title={data.title}>{data.title}</h3>
          <p>{data.addr1}</p>
          <p>{data.tel}</p>
        </li>
      );
    });
  };

  makeSoptArray = () => {
    if (!this.props.lists) return;
    const array = this.props.lists;
    return array.map(data => {
      return { lat: data.mapy, lng: data.mapx, locname: data.title };
    });
  };

  renderDetail = () => {
    if (!this.props.selectedItem) {
      return (
        <div className="--map--container">
          <MapContainer
            dataArry={this.makeSoptArray()}
            zoom={12}
            centerLoc={this.props.currloc}
          />
        </div>
      );
    } else {
      switch (this.props.itemName) {
        case "EAT":
          return (
            <EatInfoDetail
              selectContentId={this.props.selectedItem}
              className="--detail--content--info"
            />
          );
        case "WALK":
          return (
            <WalkInfoDetail
              selectContentId={this.props.selectedItem}
              className="--detail--content--info"
            />
          );
        default:
          return null;
      }
    }
  };

  render() {
    return (
      <div className="--detailinfo--container">
        <div className="--detallinfo--nav">
          <Link to="/">Go Home</Link>
        </div>
        <div className="--detailinfo--body">
          <div className="--detailinfo--header">
            <h1 className="--detailinfo--title">{this.props.listTitle}</h1>
            <p className="--detailinfo--desc">{this.props.listDesc}</p>
          </div>
          <div className="--detail--content--even">
            <ul className="--detail-content--list">
              {this.renderObjectList()}
            </ul>
            {this.renderDetail()}
          </div>
        </div>
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    currloc: state.currloc
  };
};

export default connect(
  MapStateToProps,
  { currentLocation }
)(ListObject);
