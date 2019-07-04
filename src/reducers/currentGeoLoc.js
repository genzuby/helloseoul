import { GEO_CURR_LOC } from "../actions/constInfo";

export default (state = null, action) => {
  switch (action.type) {
    case GEO_CURR_LOC:
      return action.payload;
    default:
      return state;
  }
};
