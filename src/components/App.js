import React from "react";
import { Router, Route } from "react-router-dom";
import Home from "./Home";
import WifiInfo from "./cardApps/WifiInfo";
import WalkInfo from "./cardApps/WalkInfo";
import EatInfo from "./cardApps/EatInfo";
import ExploreInfo from "./cardApps/ExploreInfo";
import ImageGallery from "./ImageGallery";
import ImageGalleryShowImage from "./ImageGalleryShowImage";
import Container from "./Container";
import history from "../history";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/pics" exact component={ImageGallery} />
          <Route path="/menupics" exact component={Container} />
          <Route path="/markets" exact component={EatInfo} />
          <Route path="/walks" exact component={WalkInfo} />
          <Route path="/explore" exact component={ExploreInfo} />
          <Route path="/wifis" exact component={WifiInfo} />
          <Route path="/imgmodal" exact component={ImageGalleryShowImage} />
        </div>
      </Router>
    </div>
  );
};

export default App;
