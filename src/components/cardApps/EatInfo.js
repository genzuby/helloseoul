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
          listDesc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              tempora reprehenderit voluptas deserunt alias reiciendis, omnis
              soluta dolorem, odio corporis sapiente numquam nihil deleniti cum
              quas! Optio at laboriosam fugiat."
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
