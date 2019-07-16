import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDetailMarketAll } from "../../actions";
import "../../css/detailInfo.scss";
import EatInfoDetail from "./EatInfoDetail";
import GotoTop from "./GotoTop";

class EatInfoDetailPop extends Component {
  componentDidMount() {
    this.props.fetchDetailMarketAll(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <EatInfoDetail
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
  { fetchDetailMarketAll }
)(EatInfoDetailPop);
