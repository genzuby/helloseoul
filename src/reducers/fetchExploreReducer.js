import { FETCH_EXPL } from "../actions/constInfo";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_EXPL:
      return action.payload;
    default:
      return state;
  }
};
