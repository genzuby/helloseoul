import { FETCH_WALKS } from "../actions/constInfo";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_WALKS:
      return action.payload;
    default:
      return state;
  }
};
