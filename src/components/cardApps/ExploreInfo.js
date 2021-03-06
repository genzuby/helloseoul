import React from "react";
import { fetchExploreList, fetchDetailWalkAll } from "../../actions";
import { connect } from "react-redux";
import ListObject from "./ListObject";
import ListObjectPop from "./ListObjectPop";
import "../../css/detailInfo.scss";
import { ViewRes } from "../styledComp";

class ExploreInfo extends React.Component {
  state = {
    selectedId: null
  };

  componentDidMount() {
    this.props.fetchExploreList();
  }

  getDetailInfo = id => {
    this.props.fetchDetailWalkAll(id);
    if (!this.props.walkinfo) return;
    this.setState({
      selectedId: id
    });
  };

  render() {
    return (
      <React.Fragment>
        <ViewRes big>
          <ListObject
            itemName="EXPLORE"
            lists={this.props.explore}
            listClick={this.getDetailInfo}
            selectedItem={this.state.selectedId}
            listTitle="Explore Seoul"
            listDesc="As the capital of Korea, Seoul has many historical places. Seoul became the capital in 1394, more than 600 years ago. 
          You can see and feel the glorious and complex history of Korea in these places. "
          />
        </ViewRes>
        <ViewRes>
          <ListObjectPop
            itemName="EXPLORE"
            lists={this.props.explore}
            listTitle="Explore Seoul"
            listDesc="As the capital of Korea, Seoul has many historical places. Seoul became the capital in 1394, more than 600 years ago. 
          You can see and feel the glorious and complex history of Korea in these places. "
          />
        </ViewRes>
      </React.Fragment>
    );
  }
}

const MapStateToProps = state => {
  return {
    explore: state.explore,
    walkinfo: Object.values(state.walkinfo),
    currloc: state.currloc
  };
};
export default connect(
  MapStateToProps,
  { fetchExploreList, fetchDetailWalkAll }
)(ExploreInfo);
