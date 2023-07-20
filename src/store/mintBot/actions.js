import * as actionTypes from "../constants";

export function getWallets() {
  return { type: actionTypes.GET_WALLETS_REQUEST };
}

export function addWallets(data) {
  return { type: actionTypes.PUT_WALLETS_REQUEST, payload: data };
}

export function deleteWallet(data) {
  return { type: actionTypes.DELETE_WALLET_REQUEST, payload: data };
}
