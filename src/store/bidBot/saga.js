import { call, all, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../constants";

import apiClient from "../apiClient";
import { string2Slug } from "../../utils";
import { openseaApiKey } from "../../utils/config";

async function shooterGetCollectionStats(data) {
  return apiClient.get(
    `https://api.opensea.io/api/v1/collection/${string2Slug(data)}`,
    {
      headers: {
        "X-API-KEY": openseaApiKey,
      },
    }
  );
}

function* getCollectionStats() {
  return yield takeLatest(
    actionTypes.GET_COLLECTION_STATS_REQUEST,
    function* (action) {
      try {
        const data = yield call(shooterGetCollectionStats, action.payload);
        yield put({
          type: actionTypes.GET_COLLECTION_STATS_REQUEST_SUCCESS,
          payload: {
            name: data.data?.collection?.name,
            address: data.data?.collection?.primary_asset_contracts[0]?.address,
            floorPrice: data.data?.collection?.stats?.floor_price,
            totalSupply: data.data?.collection?.stats?.total_supply,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
  );
}

export default function* runBlockingCallsExample() {
  yield all([getCollectionStats()]);
}
