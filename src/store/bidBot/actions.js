import * as actionTypes from "../constants";

export function getCollectionStats(data) {
  return { type: actionTypes.GET_COLLECTION_STATS_REQUEST, payload: data };
}
