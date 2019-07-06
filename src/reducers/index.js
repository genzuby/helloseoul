import { combineReducers } from "redux";
import currentGeoLoc from "./currentGeoLoc";
import fetchMarketReducer from "./fetchMarketReducer";
import fetchMarketDetailReducer from "./fetchMarketDetailReducer";
import fetchWalkReducer from "./fetchWalkReducer";
import fetchWalkDetaileducer from "./fetchWalkDetaileducer";
import fetchWifiReducer from "./fetchWifiReducer";
import fetchPicsReducer from "./fetchPicsReducer";

export default combineReducers({
  currloc: currentGeoLoc,
  markets: fetchMarketReducer,
  marketinfo: fetchMarketDetailReducer,
  walks: fetchWalkReducer,
  walkinfo: fetchWalkDetaileducer,
  wifis: fetchWifiReducer,
  pics: fetchPicsReducer
});
