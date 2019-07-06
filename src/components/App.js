import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import WifiInfo from "./cardApps/WifiInfo";
import WalkInfo from "./cardApps/WalkInfo";
import EatInfo from "./cardApps/EatInfo";
import ImageGallery from "../components/ImageGallery";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/pics" exact component={ImageGallery} />
          <Route path="/markets" exact component={EatInfo} />
          <Route path="/walks" exact component={WalkInfo} />
          <Route path="/wifis" exact component={WifiInfo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
