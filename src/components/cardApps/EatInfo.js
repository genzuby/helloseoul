import React from "react";
import {
  currentLocation,
  fetchTranditionalMarketList,
  fetchDetailMarketAll
} from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MapContainer from "./MapContainer";
import EatInfoDetail from "./EatInfoDetail";
import "../../css/detailInfo.scss";

class EatInfo extends React.Component {
  state = {
    selectedId: null
  };
  componentDidMount() {
    this.props.currentLocation({ lat: 37.566296, lng: 126.977943 });
    this.props.fetchTranditionalMarketList();
  }

  renderMarketList = () => {
    const marketsList = this.props.markets;
    if (!marketsList) return;

    return marketsList.map(market => {
      let imgurl =
        market.firstimage === undefined
          ? "/images/NoImageFound.png"
          : market.firstimage;
      return (
        <li
          key={market.contentid}
          onClick={() => this.getDetailInfo(market.contentid)}
        >
          <img alt={market.title} src={imgurl} />
          <h3 title={market.title}>{market.title}</h3>
          <p>{market.addr1}</p>
          <p>{market.tel}</p>
        </li>
      );
    });
  };

  makeSoptArray = () => {
    if (!this.props.markets) return;
    const array = this.props.markets;
    return array.map(data => {
      return { lat: data.mapy, lng: data.mapx, locname: data.title };
    });
  };

  getDetailInfo = id => {
    this.props.fetchDetailMarketAll(id);
    if (!this.props.marketInfo) return;
    this.setState({
      selectedId: id
    });
  };

  renderDetail = () => {
    if (!this.state.selectedId) {
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
      return (
        <EatInfoDetail
          selectContentId={this.state.selectedId}
          className="--detail--content--info"
        />
      );
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
            <h1 className="--detailinfo--title">
              Traditional Markets : EAT, BUY & FUN
            </h1>
            <p className="--detailinfo--desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              tempora reprehenderit voluptas deserunt alias reiciendis, omnis
              soluta dolorem, odio corporis sapiente numquam nihil deleniti cum
              quas! Optio at laboriosam fugiat.
            </p>
          </div>
          <div className="--detail--content--even">
            <ul className="--detail-content--list">
              {this.renderMarketList()}
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
    markets: state.markets,
    marketInfo: Object.values(state.marketinfo),
    currloc: state.currloc
  };
};
export default connect(
  MapStateToProps,
  { currentLocation, fetchTranditionalMarketList, fetchDetailMarketAll }
)(EatInfo);
