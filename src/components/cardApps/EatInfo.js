import React from "react";
import {
  fetchTranditionalMarketList,
  fetchDetailMarketAll
} from "../../actions";
import { connect } from "react-redux";
import ListObject from "./ListObject";
import "../../css/detailInfo.scss";

class EatInfo extends React.Component {
  state = {
    selectedId: null
  };

  componentDidMount() {
    this.props.fetchTranditionalMarketList();
  }

  getDetailInfo = id => {
    this.props.fetchDetailMarketAll(id);
    if (!this.props.marketInfo) return;
    this.setState({
      selectedId: id
    });
  };

  render() {
    return (
      <React.Fragment>
        <ListObject
          itemName="EAT"
          lists={this.props.markets}
          listClick={this.getDetailInfo}
          selectedItem={this.state.selectedId}
          listTitle="Traditional Markets : EAT, BUY & FUN"
          listDesc="There are a lot of traditional markets in Seoul. Here is the delicate list from Korea Tour Organization.
          You can eat, buy and try many other things."
        />
      </React.Fragment>
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
  { fetchTranditionalMarketList, fetchDetailMarketAll }
)(EatInfo);
