import { FETCH_WIFIS } from "../actions/constInfo";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_WIFIS:
      return [...state, action.payload];
    default:
      return state;
  }
};
