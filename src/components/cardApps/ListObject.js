import React, { Component } from "react";
import { connect } from "react-redux";
import { currentLocation } from "../../actions";
import Menu from "../Menu";
import MapContainer from "./MapContainer";
import EatInfoDetail from "./EatInfoDetail";
import WalkInfoDetail from "./WalkInfoDetail";
import GotoTop from "./GotoTop";
import "../../css/detailInfo.scss";

class ListObject extends Component {
  constructor(props) {
    super(props);

    this.clickFoldList = this.clickFoldList.bind(this);
  }

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
            this.setState({
              selectedId: data.contentid
            });
            console.log(this.state.selectedId);
          }}
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
        case "EXPLORE":
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

  clickFoldList() {
    if (this.state.foldIcon === "fa-arrow-alt-circle-right") {
      this.setState({
        foldIcon: "fa-arrow-alt-circle-left",
        foldClass: "--detail--content--even"
      });
    } else {
      this.setState({
        foldIcon: "fa-arrow-alt-circle-right",
        foldClass: "--detail--content--even--fold"
      });
    }
  }

  render() {
    return (
      <div className="--detailinfo--container">
        <Menu selected={this.props.itemName} />
        <div className="--detailinfo--body">
          <span
            onClick={this.clickFoldList}
            className="--detail--content--fold"
          >
            <i className={`far ${this.state.foldIcon}`} />
          </span>
          <div className="--detailinfo--header">
            <h1 className="--detailinfo--title">{this.props.listTitle}</h1>
            <p className="--detailinfo--desc">{this.props.listDesc}</p>
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
)(ListObject);
