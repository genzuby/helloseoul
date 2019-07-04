import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import WifiInfo from "./cardApps/WifiInfo";
import EatInfo from "./cardApps/EatInfo";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/markets" exact component={EatInfo} />
          <Route path="/wifis" exact component={WifiInfo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
