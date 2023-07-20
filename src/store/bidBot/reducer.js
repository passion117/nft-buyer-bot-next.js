import * as actionTypes from "../constants";

const initialState = {
  collectionStats: {},
};

const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_COLLECTION_STATS_REQUEST_SUCCESS:
      return { ...prevState, collectionStats: { ...action.payload } };
    default:
      return prevState;
  }
};

export default reducer;
