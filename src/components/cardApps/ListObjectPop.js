import React, { Component } from "react";
import { connect } from "react-redux";
import { currentLocation } from "../../actions";
import Menu from "../Menu";
import MapContainer from "./MapContainer";
import GotoTop from "./GotoTop";
import "../../css/detailInfo.scss";
import { Desc } from "../styledComp";
import { Link } from "react-router-dom";

class ListObjectPop extends Component {
  state = {
    selectedId: null,
    foldIcon: "fa-arrow-alt-circle-left",
    foldClass: "--detail--content--even"
  };

  componentDidMount() {
    this.props.currentLocation({ lat: 37.566296, lng: 126.977943 });
  }

  renderObjectList = () => {
    const dataList = this.props.lists;
    if (!dataList) return;

    const pageLink =
      this.props.itemName === "EAT" ? "/markets/detail/" : "/walks/detail/";

    return dataList.map(data => {
      let imgurl =
        data.firstimage === undefined
          ? "/images/NoImageFound.png"
          : data.firstimage;
      return (
        <Link to={`${pageLink}${data.contentid}`} key={data.contentid}>
          <li
            className={
              data.contentid === this.state.selectedId
                ? "--detail--item--selected"
                : ""
            }
          >
            <img alt={data.title} src={imgurl} />
            <h3 title={data.title}>{data.title}</h3>
            <p>{data.addr1}</p>
            <p>{data.tel}</p>
          </li>
        </Link>
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
    return (
      <div className="--map--container">
        <MapContainer
          dataArry={this.makeSoptArray()}
          zoom={12}
          centerLoc={this.props.currloc}
        />
      </div>
    );
  };

  render() {
    return (
      <div className="--detailinfo--container">
        <Menu selected={this.props.itemName} />
        <div className="--detailinfo--body">
          <span className="--detail--content--fold">
            {/* <i className={`far ${this.state.foldIcon}`} /> */}
          </span>
          <div className="--detailinfo--header">
            <h1 className="--detailinfo--title">{this.props.listTitle}</h1>
            <p className="--detailinfo--desc">{this.props.listDesc}</p>
            <Desc big className="--detailinfo--desc--small">
              When you click a card on the left hand side, you can see detailed
              information, like location, opening hours, and so on.
            </Desc>
            <Desc className="--detailinfo--desc--small">
              When you click a card on the bottom, you can see detailed
              information, like location, opening hours, and so on.
            </Desc>
          </div>
          <div className={this.state.foldClass}>
            <ul className="--detail--content--list">
              {this.renderObjectList()}
            </ul>
            {this.renderDetail()}
          </div>
          <GotoTop />
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
)(ListObjectPop);
