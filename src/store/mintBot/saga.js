import { call, all, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../constants";
import Web3 from "web3";

import apiClient from "../apiClient";
import { infuraUrl } from "../../utils/config";

async function shooterGetWallets() {
  return apiClient.get("wallet/");
}

function* getWallets() {
  return yield takeLatest(actionTypes.GET_WALLETS_REQUEST, function* () {
    try {
      const data = yield call(shooterGetWallets);
      const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl));
      for (const key in data.data) {
        if (Object.hasOwnProperty.call(data.data, key)) {
          const wallet = data.data[key];
          data.data[key].balance = web3.utils.fromWei(
            yield web3.eth.getBalance(wallet.address),
            "ether"
          );
        }
      }
      yield put({
        type: actionTypes.GET_WALLETS_REQUEST_SUCCESS,
        payload: data?.data,
      });
    } catch (error) {
      console.log(error);
    }
  });
}

function shooterAddWallets(data) {
  return apiClient.put("wallet", data);
}

function* addWallets() {
  return yield takeLatest(actionTypes.PUT_WALLETS_REQUEST, function* (action) {
    try {
      const data = yield call(shooterAddWallets, action?.payload);
      yield put({
        type: actionTypes.GET_WALLETS_REQUEST,
      });
      alert(data.data);
    } catch (error) {
      console.log(error);
    }
  });
}

function shooterDeleteWallet(data) {
  return apiClient.delete(`wallet?id=${data.id}`);
}

function* deleteWallet() {
  return yield takeLatest(
    actionTypes.DELETE_WALLET_REQUEST,
    function* (action) {
      try {
        const data = yield call(shooterDeleteWallet, action?.payload);
        yield put({
          type: actionTypes.GET_WALLETS_REQUEST,
        });
        alert(data.data);
      } catch (error) {}
    }
  );
}

export default function* runBlockingCallsExample() {
  yield all([getWallets(), addWallets(), deleteWallet()]);
}
