import React from "react";
import { TRANS_AREANAME } from "../../actions/constInfo";
import { connect } from "react-redux";
import { currentLocation } from "../../actions";
import "../../css/option.scss";

class AreaOption extends React.Component {
  setPropsLoc = loc => {
    this.props.currentLocation(loc);
  };

  renderButton = () => {
    return TRANS_AREANAME.map(area => {
      return (
        <button
          className="--option--button"
          key={area.name}
          onClick={() => this.setPropsLoc({ lat: area.lat, lng: area.lng })}
        >
          {area.name}
        </button>
      );
    });
  };
  render() {
    return <div className="--option--button--area">{this.renderButton()}</div>;
  }
}

export default connect(
  null,
  { currentLocation }
)(AreaOption);
