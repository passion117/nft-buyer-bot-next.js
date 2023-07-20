import * as actionTypes from "../constants";

const initialState = {
  wallets: [],
};

const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_WALLETS_REQUEST_SUCCESS:
      return { ...prevState, wallets: [...action.payload] };
    default:
      return prevState;
  }
};

export default reducer;
