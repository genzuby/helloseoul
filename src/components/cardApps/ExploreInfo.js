import React from "react";
import { fetchExploreList, fetchDetailWalkAll } from "../../actions";
import { connect } from "react-redux";
import ListObject from "./ListObject";
import "../../css/detailInfo.scss";

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
        <ListObject
          itemName="EXPLORE"
          lists={this.props.explore}
          listClick={this.getDetailInfo}
          selectedItem={this.state.selectedId}
          listTitle="Explore Seoul"
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
    explore: state.explore,
    walkinfo: Object.values(state.walkinfo),
    currloc: state.currloc
  };
};
export default connect(
  MapStateToProps,
  { fetchExploreList, fetchDetailWalkAll }
)(ExploreInfo);
