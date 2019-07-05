import React from "react";
import { connect } from "react-redux";
//due to http apis are not allowed in netlify server
// import { fetchWifiAll } from "../../actions";
import { fetchWifiListsStatic } from "../../actions";
import MapContainer from "./MapContainer";
import { Link } from "react-router-dom";
import AreaOption from "./AreaOption";
import "../../css/detailInfo.scss";

class WifiInfo extends React.Component {
  componentDidMount() {
    // this.props.fetchWifiAll();
    this.props.fetchWifiListsStatic();
    console.log(this.props.wifis);
  }

  makeSoptArray = () => {
    if (!this.props.wifis) return;
    const array = this.props.wifis.flat();
    return array.map(data => {
      return { lat: data.instl_y, lng: data.instl_x };
    });
  };

  render() {
    return (
      <div className="--detailinfo--container">
        <div className="--detallinfo--nav">
          <Link to="/">Go Home</Link>
        </div>
        <div className="--detailinfo--body">
          <div className="--detailinfo--header">
            <h1 className="--detailinfo--title">Public Free Wifi Spots</h1>
            <p className="--detailinfo--desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              tempora reprehenderit voluptas deserunt alias reiciendis, omnis
              soluta dolorem, odio corporis sapiente numquam nihil deleniti cum
              quas! Optio at laboriosam fugiat.
            </p>
          </div>
          <div className="--detail--content">
            <div className="--map--container">
              <MapContainer dataArry={this.makeSoptArray()} zoom={15} />
            </div>
            <div className="--detail-content--opt">
              <AreaOption />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    wifis: state.wifis
  };
};

export default connect(
  mapStateToProps,
  { fetchWifiListsStatic }
)(WifiInfo);
