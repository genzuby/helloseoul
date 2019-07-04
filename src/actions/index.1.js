import seoulOpenApi from "../api/seoulOpenApi";
import axios from "axios";

import {
  GEO_CURR_LOC,
  FETCH_MARKETS,
  FETCH_MARKETINFO,
  FETCH_MARKETDESC,
  FETCH_MARKETPIC,
  FETCH_WIFIS,
  TRANS_AREANAME
} from "./constInfo";
const TOUR_API_KEY =
  "gV0xPZRRNyI0MC5M%2B9UoK0vgpiZN7T8Z6mFB51P7v4kqvEHKaIgtjn7SnBDHcbJVn4PvTgwgLJS4IwpwmYCD3w%3D%3D";

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
  const response = await axios.get(
    `http://api.visitkorea.or.kr/openapi/service/rest/EngService/areaBasedList?ServiceKey=${TOUR_API_KEY}&contentTypeId=79&areaCode=1&sigunguCode=&cat1=A04&cat2=A0401&cat3=A04010200&listYN=Y&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&arrange=A&numOfRows=20&pageNo=1&_type=json`
  );

  dispatch({
    type: FETCH_MARKETS,
    payload: response.data.response.body.items.item
  });
};

export const fetchDetailMarketInfo = id => async dispatch => {
  const response = await axios.get(
    `http://api.visitkorea.or.kr/openapi/service/rest/EngService/detailCommon?ServiceKey=${TOUR_API_KEY}&contentTypeId=79&contentId=${id}&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&transGuideYN=Y&_type=json`
  );

  dispatch({
    type: FETCH_MARKETINFO,
    payload: response.data.response.body.items.item
  });
};

export const fetchDetailDescMarketInfo = id => async dispatch => {
  const response = await axios.get(
    `http://api.visitkorea.or.kr/openapi/service/rest/EngService/detailIntro?ServiceKey=${TOUR_API_KEY}&contentTypeId=79&contentId=${id}&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&introYN=Y&_type=json`
  );

  dispatch({
    type: FETCH_MARKETDESC,
    payload: response.data.response.body.items.item
  });
};

export const fetchDetailPicMarketInfo = id => async dispatch => {
  const response = await axios.get(
    `http://api.visitkorea.or.kr/openapi/service/rest/EngService/detailImage?ServiceKey=${TOUR_API_KEY}&contentTypeId=79&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&contentId=${id}&imageYN=Y&_type=json`
  );

  if (response.data.response.body.items.item) {
    dispatch({
      type: FETCH_MARKETPIC,
      payload: response.data.response.body.items.item
    });
  } else {
    return;
  }
};

// export const fetchDetailMarketAll = id => async dispatch => {
//   await dispatch(fetchDetailMarketInfo(id));
//   await dispatch(fetchDetailDescMarketInfo(id));
//   await dispatch(fetchDetailPicMarketInfo(id));
// };

export const fetchDetailMarketAll = id => async (dispatch, getState) => {
  await dispatch(fetchDetailMarketInfo(id));

  // await dispatch(fetchDetailDescMarketInfo(id));
  console.log(getState().marketinfo);

  // const UserIds = _.uniq(_.map(getState().posts, "userId"));
  // UserIds.forEach(id => dispatch(fetchUser(id)));

  // _.chain(getState().marketinfo)
  //   .map("contentid")
  //   .uniq()
  //   .forEach(id => dispatch(fetchUser(id)))
  //   .value();
};
