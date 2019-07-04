import { FETCH_MARKETS } from "../actions/constInfo";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_MARKETS:
      return action.payload;
    default:
      return state;
  }
};
