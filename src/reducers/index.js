import { combineReducers } from "redux";
import currentGeoLoc from "./currentGeoLoc";
import fetchMarketReducer from "./fetchMarketReducer";
import fetchMarketDetailReducer from "./fetchMarketDetailReducer";
import fetchWifiReducer from "./fetchWifiReducer";

export default combineReducers({
  currloc: currentGeoLoc,
  markets: fetchMarketReducer,
  marketinfo: fetchMarketDetailReducer,
  wifis: fetchWifiReducer
});
