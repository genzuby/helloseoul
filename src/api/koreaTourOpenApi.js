export const TOUR_API_KEY =
  "gV0xPZRRNyI0MC5M%2B9UoK0vgpiZN7T8Z6mFB51P7v4kqvEHKaIgtjn7SnBDHcbJVn4PvTgwgLJS4IwpwmYCD3w%3D%3D";
export const TOUR_MARKET_LIST_URL = `https://api.visitkorea.or.kr/openapi/service/rest/EngService/areaBasedList?ServiceKey=${TOUR_API_KEY}&contentTypeId=79&areaCode=1&sigunguCode=&cat1=A04&cat2=A0401&cat3=A04010200&listYN=Y&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&arrange=A&numOfRows=20&pageNo=1&_type=json`;
export const tourMarketInfo = id =>
  `https://api.visitkorea.or.kr/openapi/service/rest/EngService/detailCommon?ServiceKey=${TOUR_API_KEY}&contentTypeId=79&contentId=${id}&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&transGuideYN=Y&_type=json`;
export const tourMarketDesc = id =>
  `https://api.visitkorea.or.kr/openapi/service/rest/EngService/detailIntro?ServiceKey=${TOUR_API_KEY}&contentTypeId=79&contentId=${id}&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&introYN=Y&_type=json`;
export const tourMarketPic = id =>
  `https://api.visitkorea.or.kr/openapi/service/rest/EngService/detailImage?ServiceKey=${TOUR_API_KEY}&contentTypeId=79&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&contentId=${id}&imageYN=Y&_type=json`;
export const TOUR_WALK_LIST_URL = `https://api.visitkorea.or.kr/openapi/service/rest/EngService/areaBasedList?ServiceKey=${TOUR_API_KEY}&contentTypeId=&areaCode=1&sigunguCode=&cat1=A01&cat2=&cat3=&listYN=Y&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&arrange=A&numOfRows=40&pageNo=1&_type=json`;
export const tourWalkMain = id =>
  `https://api.visitkorea.or.kr/openapi/service/rest/EngService/detailCommon?ServiceKey=${TOUR_API_KEY}&contentTypeId=76&contentId=${id}&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&transGuideYN=Y&_type=json`;
export const tourWalkDesc1 = id =>
  `https://api.visitkorea.or.kr/openapi/service/rest/EngService/detailIntro?ServiceKey=${TOUR_API_KEY}&contentTypeId=76&contentId=${id}&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&introYN=Y&_type=json`;
export const tourWalkDesc2 = id =>
  `https://api.visitkorea.or.kr/openapi/service/rest/EngService/detailInfo?ServiceKey=${TOUR_API_KEY}&contentTypeId=76&contentId=${id}&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&listYN=Y&_type=json`;
export const tourWalkPic = id =>
  `https://api.visitkorea.or.kr/openapi/service/rest/EngService/detailImage?ServiceKey=${TOUR_API_KEY}&contentTypeId=76&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&contentId=${id}&imageYN=Y&numOfRows=100&pageNo=1&_type=json`;
