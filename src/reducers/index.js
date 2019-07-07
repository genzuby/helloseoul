import { combineReducers } from "redux";
import currentGeoLoc from "./currentGeoLoc";
import fetchMarketReducer from "./fetchMarketReducer";
import fetchMarketDetailReducer from "./fetchMarketDetailReducer";
import fetchWalkReducer from "./fetchWalkReducer";
import fetchWalkDetailReducer from "./fetchWalkDetailReducer";
import fetchExploreReducer from "./fetchExploreReducer";
import fetchWifiReducer from "./fetchWifiReducer";
import fetchPicsReducer from "./fetchPicsReducer";
import selectedPicReducer from "./selectedPicReducer";

export default combineReducers({
  currloc: currentGeoLoc,
  markets: fetchMarketReducer,
  marketinfo: fetchMarketDetailReducer,
  walks: fetchWalkReducer,
  walkinfo: fetchWalkDetailReducer,
  explore: fetchExploreReducer,
  wifis: fetchWifiReducer,
  pics: fetchPicsReducer,
  selectedpic: selectedPicReducer
});
