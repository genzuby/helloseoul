import { FETCH_MARKETINFO } from "../actions/constInfo";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MARKETINFO:
      return {
        ...state,
        [action.payload.main.contentid]: action.payload
      };
    default:
      return state;
  }
};
