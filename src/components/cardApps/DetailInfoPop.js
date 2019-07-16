import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDetailWalkAll } from "../../actions";
import "../../css/detailInfo.scss";
import WalkInfoDetail from "./WalkInfoDetail";
import GotoTop from "./GotoTop";

class DetailInfoPop extends Component {
  componentDidMount() {
    this.props.fetchDetailWalkAll(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <WalkInfoDetail
          selectContentId={this.props.match.params.id}
          className="--detail--content--info"
        />
        <GotoTop />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchDetailWalkAll }
)(DetailInfoPop);
