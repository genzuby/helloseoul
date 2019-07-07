import { FETCH_WALKINFO } from "../actions/constInfo";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_WALKINFO:
      return {
        ...state,
        [action.payload.main.contentid]: action.payload
      };
    default:
      return state;
  }
};
