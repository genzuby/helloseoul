import React from "react";
import { connect } from "react-redux";
//due to http apis are not allowed in netlify server
// import { fetchWifiAll } from "../../actions";
import { fetchWifiListsStatic } from "../../actions";
import MapContainer from "./MapContainer";
import Menu from "../Menu";
import AreaOption from "./AreaOption";
import "../../css/detailInfo.scss";

class WifiInfo extends React.Component {
  componentDidMount() {
    // this.props.fetchWifiAll();
    this.props.fetchWifiListsStatic();
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
        <Menu selected="FREEWIFIS" />
        <div className="--detailinfo--body">
          <div className="--detailinfo--header">
            <h1 className="--detailinfo--title">Public Free Wifi Spots</h1>
            <p className="--detailinfo--desc">
              Here is the map of about 4800 free public wifi spots in Seoul.
              This data is provided by the government of Seoul and the last
              released date is in April, 2018.
            </p>
            <p className="--detailinfo--desc--small">
              When this map is first loaded, the center of it will be your
              current location. Then you click a button on the right hand side,
              the map will be relocated in the center of the area.
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