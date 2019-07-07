import { SELECTED_PICINFO } from "../actions/constInfo";

export default (state = null, action) => {
  switch (action.type) {
    case SELECTED_PICINFO:
      return action.payload;
    default:
      return state;
  }
};
