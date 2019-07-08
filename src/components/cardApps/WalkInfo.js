import React from "react";
import { fetchWalkList, fetchDetailWalkAll } from "../../actions";
import { connect } from "react-redux";
import ListObject from "./ListObject";
import "../../css/detailInfo.scss";

class WalkInfo extends React.Component {
  state = {
    selectedId: null
  };

  componentDidMount() {
    this.props.fetchWalkList();
  }

  getDetailInfo = id => {
    this.props.fetchDetailWalkAll(id);
    if (!this.props.walkInfo) return;
    this.setState({
      selectedId: id
    });
  };

  render() {
    return (
      <React.Fragment>
        <ListObject
          itemName="WALK"
          lists={this.props.walks}
          listClick={this.getDetailInfo}
          selectedItem={this.state.selectedId}
          listTitle="Walk in Seoul"
          listDesc="In Seoul, There are a lot of big and small mountains and streams. Of course huge Han river as well.
           You can enjoy not only a city life but also lovely nature here. "
        />
      </React.Fragment>
    );
  }
}

const MapStateToProps = state => {
  return {
    walks: state.walks,
    walkInfo: Object.values(state.walkinfo),
    currloc: state.currloc
  };
};
export default connect(
  MapStateToProps,
  { fetchWalkList, fetchDetailWalkAll }
)(WalkInfo);
