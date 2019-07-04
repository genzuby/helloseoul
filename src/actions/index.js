import seoulOpenApi from "../api/seoulOpenApi";
import axios from "axios";
import _ from "lodash";
import {
  TOUR_LIST_URL,
  tourInfo,
  tourDesc,
  tourPic
} from "../api/koreaTourOpenApi";
import {
  GEO_CURR_LOC,
  FETCH_MARKETS,
  FETCH_MARKETINFO,
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

export const fetchWifiAll = () => dispatch => {
  TRANS_AREANAME.forEach(area => dispatch(fetchWifiLists(area.name_ko)));
};

export const fetchTranditionalMarketList = () => async dispatch => {
  const response = await axios.get(TOUR_LIST_URL);

  dispatch({
    type: FETCH_MARKETS,
    payload: response.data.response.body.items.item
  });
};

export const fetchDetailMarketAll = id => async dispatch => {
  const responseInfo = await axios.get(tourInfo(id)).then(response => {
    return { main: response.data.response.body.items.item };
  });

  const responseDesc = await axios.get(tourDesc(id)).then(response => {
    return { desc: response.data.response.body.items.item };
  });

  const responsePic = await axios.get(tourPic(id)).then(response => {
    return { pic: response.data.response.body.items.item };
  });

  dispatch({
    type: FETCH_MARKETINFO,
    payload: _.merge(responseInfo, responseDesc, responsePic)
  });
};
