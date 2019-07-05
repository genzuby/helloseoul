import seoulOpenApi from "../api/seoulOpenApi";
import axios from "axios";
import _ from "lodash";
import wifidata from "./wifiInfo.json";
import {
  TOUR_MARKET_LIST_URL,
  tourMarketInfo,
  tourMarketDesc,
  tourMarketPic,
  TOUR_WALK_LIST_URL,
  tourWalkMain,
  tourWalkDesc1,
  tourWalkDesc2,
  tourWalkPic
} from "../api/koreaTourOpenApi";
import {
  GEO_CURR_LOC,
  FETCH_MARKETS,
  FETCH_MARKETINFO,
  FETCH_WALKS,
  FETCH_WALKINFO,
  FETCH_WIFIS,
  TRANS_AREANAME
} from "./constInfo";

export const currentLocation = geoLocation => {
  return {
    type: GEO_CURR_LOC,
    payload: geoLocation
  };
};

export const fetchWifiLists = areaname => async dispatch => {
  const response = await seoulOpenApi.get(
    `/PublicWiFiPlaceInfo/1/1000/${areaname}`
  );

  if (response.data.PublicWiFiPlaceInfo) {
    dispatch({
      type: FETCH_WIFIS,
      payload: response.data.PublicWiFiPlaceInfo.row
    });
  } else {
    return;
  }
};

export const fetchWifiListsStatic = () => async dispatch => {
  dispatch({
    type: FETCH_WIFIS,
    payload: wifidata.data
  });
};

export const fetchWifiAll = () => dispatch => {
  TRANS_AREANAME.forEach(area => dispatch(fetchWifiLists(area.name_ko)));
};

export const fetchTranditionalMarketList = () => async dispatch => {
  const response = await axios.get(TOUR_MARKET_LIST_URL);

  dispatch({
    type: FETCH_MARKETS,
    payload: response.data.response.body.items.item
  });
};

export const fetchDetailMarketAll = id => async dispatch => {
  const responseInfo = await axios.get(tourMarketInfo(id)).then(response => {
    return { main: response.data.response.body.items.item };
  });

  const responseDesc = await axios.get(tourMarketDesc(id)).then(response => {
    return { desc: response.data.response.body.items.item };
  });

  const responsePic = await axios.get(tourMarketPic(id)).then(response => {
    return { pic: response.data.response.body.items.item };
  });

  dispatch({
    type: FETCH_MARKETINFO,
    payload: _.merge(responseInfo, responseDesc, responsePic)
  });
};

export const fetchWalkList = () => async dispatch => {
  const response = await axios.get(TOUR_WALK_LIST_URL);

  dispatch({
    type: FETCH_WALKS,
    payload: response.data.response.body.items.item
  });
};

export const fetchDetailWalkAll = id => async dispatch => {
  const responseInfo = await axios.get(tourWalkMain(id)).then(response => {
    return { main: response.data.response.body.items.item };
  });

  const responseDesc1 = await axios.get(tourWalkDesc1(id)).then(response => {
    return { desc1: response.data.response.body.items.item };
  });

  const responseDesc2 = await axios.get(tourWalkDesc2(id)).then(response => {
    if (response.data.response.body) {
      return { desc2: response.data.response.body.items.item };
    }
  });

  const responsePic = await axios.get(tourWalkPic(id)).then(response => {
    return { pic: response.data.response.body.items.item };
  });

  dispatch({
    type: FETCH_WALKINFO,
    payload: _.merge(responseInfo, responseDesc1, responseDesc2, responsePic)
  });
};
