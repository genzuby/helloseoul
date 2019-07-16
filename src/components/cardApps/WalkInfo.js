import React from "react";
import { fetchWalkList, fetchDetailWalkAll } from "../../actions";
import { connect } from "react-redux";
import ListObject from "./ListObject";
import ListObjectPop from "./ListObjectPop";
import "../../css/detailInfo.scss";
import { ViewRes } from "../styledComp";

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
        <ViewRes big>
          <ListObject
            itemName="WALK"
            lists={this.props.walks}
            listClick={this.getDetailInfo}
            selectedItem={this.state.selectedId}
            listTitle="Walk in Seoul"
            listDesc="In Seoul, there are a lot of mountains and streams. Of course, there is the huge Han River, as well! 
           You can not only enjoy the city life, but also some lovely nature here."
          />
        </ViewRes>
        <ViewRes >
          <ListObjectPop
            itemName="WALK"
            lists={this.props.walks}
            listTitle="Walk in Seoul"
            listDesc="In Seoul, there are a lot of mountains and streams. Of course, there is the huge Han River, as well! 
           You can not only enjoy the city life, but also some lovely nature here."
          />
        </ViewRes>
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
